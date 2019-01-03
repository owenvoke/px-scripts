<?php

namespace pxgamer\MovieManager;

/*
 *
 *  Title:   MovieManager
 *  Author:  pxgamer
 *  Usage:   php MovieManager.php [txt|json]
 *
 */

if (isset($argv[1])) {
    $format = $argv[1];
} else {
    $format = "json";
}

new MovieManager($format);

class MovieManager
{
    private $foregroundColours;
    private $backgroundColours;

    // The basic constructor
    public function __construct($format)
    {
        // Get all folders
        $folders = $this->gfl(".");
        $this->init(count($folders));
        // Function for each folder
        foreach ($folders as $folder) {
            $fDetails = $this->formDetails($folder);
            if (count($fDetails) > 1) {
                $s_URL = $this->formUrl($fDetails[1], $fDetails[2]);
                $res = $this->curlReq($s_URL);
                // Add the JSON data to an info.json
                if ($res["STATUS"] && $res["HTTP"] == 200) {
                    echo " [".$format."]";
                    switch ($format) {
                        case 'json':
                            $js = json_decode($res["DATA"]);
                            $js = json_encode($js, JSON_PRETTY_PRINT);
                            $file = fopen($folder."/info.json", "w");
                            fwrite($file, $js);
                            break;
                        case 'txt':
                            $obj = json_decode($res["DATA"], true);
                            $js = '';
                            $i = 0;
                            $keys = array_keys($obj);
                            foreach ($obj as $o) {
                                $js .= $keys[$i].":	".$o."\n";
                                $i++;
                            }
                            $file = fopen($folder."/info.txt", "w");
                            fwrite($file, $js);
                            break;
                        default:
                    }
                }
            }
        }
        $this->finalise();
    }

    // Initiate the colours formatter and echo the start message
    public function init($cnt)
    {
        $this->colours();

        echo $this->colourString("Starting to create .json files for ".$cnt." folders.", "light_green");
    }

    // Decode the folder format. Should be:   Title (Year) Quality
    public function formDetails($folder)
    {
        $folder_reg = '/(.+) \(([0-9]{4})\) [0-9]{3,4}p/';
        preg_match($folder_reg, $folder, $results);
        return $results;
    }

    // Generate the URL for the API call
    public function formUrl($TITLE, $YEAR, $TYPE = 'Movie')
    {
        $currentUrl = "https://omdbapi.com/?t={TTTT}&y={YYYY}&type={TYPE}";
        // Generates the URL
        $currentUrl = preg_replace('/{TTTT}/', urlencode($TITLE), $currentUrl);
        $currentUrl = preg_replace('/{YYYY}/', urlencode($YEAR), $currentUrl);
        return preg_replace('/{TYPE}/', urlencode($TYPE), $currentUrl);
    }

    // Call the cURL request
    public function curlReq($s_URL)
    {
        // Send the cURL request for the data
        $options = [
            CURLOPT_URL            => $s_URL,
            CURLOPT_RETURNTRANSFER => true,
        ];

        $cm = curl_init();

        CURL_SETOPT_ARRAY($cm, $options);

        // Set vars from the curl response/errors
        $returned = curl_exec($cm);
        $error = curl_error($cm);
        // Get the HTTP Status
        $httpStatus = curl_getinfo($cm, CURLINFO_HTTP_CODE);

        curl_close($cm);

        // If there's no errors, and the page didn't 400 (Bad Format response)
        if ($error === '' && $httpStatus !== 400) {
            return [
                "STATUS" => true,
                "DATA"   => $returned,
                "HTTP"   => $httpStatus,
            ];
        } else {
            return [
                "STATUS" => false,
                "DATA"   => false,
                "HTTP"   => $httpStatus,
            ];
        }
    }

    public function gfl($dir)
    {
        // array to hold return value
        $retval = [];

        // add trailing slash if missing
        if (substr($dir, -1) != "/") {
            $dir .= "/";
        }

        // open pointer to directory and read list of files
        $d = @dir($dir) or die("getFileList: Failed opening directory $dir for reading");
        while (false !== ($entry = $d->read())) {
            // skip hidden files
            if ($entry[0] == ".") {
                continue;
            }
            if (is_dir("$dir$entry")) {
                $retval[] = "$entry";
            }
        }
        $d->close();

        return $retval;
    }

    // Set up shell colors
    public function colours()
    {
        $this->foregroundColours['black'] = '0;30';
        $this->foregroundColours['dark_gray'] = '1;30';
        $this->foregroundColours['blue'] = '0;34';
        $this->foregroundColours['light_blue'] = '1;34';
        $this->foregroundColours['green'] = '0;32';
        $this->foregroundColours['light_green'] = '1;32';
        $this->foregroundColours['cyan'] = '0;36';
        $this->foregroundColours['light_cyan'] = '1;36';
        $this->foregroundColours['red'] = '0;31';
        $this->foregroundColours['light_red'] = '1;31';
        $this->foregroundColours['purple'] = '0;35';
        $this->foregroundColours['light_purple'] = '1;35';
        $this->foregroundColours['brown'] = '0;33';
        $this->foregroundColours['yellow'] = '1;33';
        $this->foregroundColours['light_gray'] = '0;37';
        $this->foregroundColours['white'] = '1;37';

        $this->backgroundColours['black'] = '40';
        $this->backgroundColours['red'] = '41';
        $this->backgroundColours['green'] = '42';
        $this->backgroundColours['yellow'] = '43';
        $this->backgroundColours['blue'] = '44';
        $this->backgroundColours['magenta'] = '45';
        $this->backgroundColours['cyan'] = '46';
        $this->backgroundColours['light_gray'] = '47';
    }

    // Returns colored string
    public function colourString($string, $foregroundColour = null, $backgroundColour = null)
    {
        $coloredString = "";

        // Check if given foreground color found
        if (isset($this->foreground_colors[$foregroundColour])) {
            $coloredString .= "\033[".$this->foregroundColours[$foregroundColour]."m";
        }
        // Check if given background color found
        if (isset($this->background_colors[$backgroundColour])) {
            $coloredString .= "\033[".$this->backgroundColours[$backgroundColour]."m";
        }

        // Add string and end coloring
        return $coloredString.$string."\033[0m";
    }

    // Returns all foreground color names
    public function getforegroundColours()
    {
        return array_keys($this->foregroundColours);
    }

    // Returns all background color names
    public function getbackgroundColours()
    {
        return array_keys($this->backgroundColours);
    }

    // End echo.
    // TODO: Add cleanup process
    public function finalise()
    {
        echo $this->colourString("\n\nCompleted!", "cyan");
        ;
    }
}
