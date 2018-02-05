<?php

namespace pxgamer\MovieManager;

/*
 *
 *  Title:   MovieManager
 *  Author:  PXgamer
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
    private $foregroundColors;
    private $backgroundColors;

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
        $current_url = "https://omdbapi.com/?t={TTTT}&y={YYYY}&type={TYPE}";
        // Generates the URL
        $current_url = preg_replace('/{TTTT}/', urlencode($TITLE), $current_url);
        $current_url = preg_replace('/{YYYY}/', urlencode($YEAR), $current_url);
        $current_url = preg_replace('/{TYPE}/', urlencode($TYPE), $current_url);

        return $current_url;
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
        $http_status = curl_getinfo($cm, CURLINFO_HTTP_CODE);

        curl_close($cm);

        // If there's no errors, and the page didn't 400 (Bad Format response)
        if ($error === '' && $http_status !== 400) {
            return [
                "STATUS" => true,
                "DATA"   => $returned,
                "HTTP"   => $http_status,
            ];
        } else {
            return [
                "STATUS" => false,
                "DATA"   => false,
                "HTTP"   => $http_status,
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
        $this->foregroundColors['black'] = '0;30';
        $this->foregroundColors['dark_gray'] = '1;30';
        $this->foregroundColors['blue'] = '0;34';
        $this->foregroundColors['light_blue'] = '1;34';
        $this->foregroundColors['green'] = '0;32';
        $this->foregroundColors['light_green'] = '1;32';
        $this->foregroundColors['cyan'] = '0;36';
        $this->foregroundColors['light_cyan'] = '1;36';
        $this->foregroundColors['red'] = '0;31';
        $this->foregroundColors['light_red'] = '1;31';
        $this->foregroundColors['purple'] = '0;35';
        $this->foregroundColors['light_purple'] = '1;35';
        $this->foregroundColors['brown'] = '0;33';
        $this->foregroundColors['yellow'] = '1;33';
        $this->foregroundColors['light_gray'] = '0;37';
        $this->foregroundColors['white'] = '1;37';

        $this->backgroundColors['black'] = '40';
        $this->backgroundColors['red'] = '41';
        $this->backgroundColors['green'] = '42';
        $this->backgroundColors['yellow'] = '43';
        $this->backgroundColors['blue'] = '44';
        $this->backgroundColors['magenta'] = '45';
        $this->backgroundColors['cyan'] = '46';
        $this->backgroundColors['light_gray'] = '47';
    }

    // Returns colored string
    public function colourString($string, $foreground_color = null, $background_color = null)
    {
        $colored_string = "";

        // Check if given foreground color found
        if (isset($this->foreground_colors[$foreground_color])) {
            $colored_string .= "\033[".$this->foregroundColors[$foreground_color]."m";
        }
        // Check if given background color found
        if (isset($this->background_colors[$background_color])) {
            $colored_string .= "\033[".$this->backgroundColors[$background_color]."m";
        }

        // Add string and end coloring
        $colored_string .= $string."\033[0m";

        return $colored_string;
    }

    // Returns all foreground color names
    public function getForegroundColors()
    {
        return array_keys($this->foregroundColors);
    }

    // Returns all background color names
    public function getBackgroundColors()
    {
        return array_keys($this->backgroundColors);
    }

    // End echo.
    // TODO: Add cleanup process
    public function finalise()
    {
        echo $this->colourString("\n\nCompleted!", "cyan");
        ;
    }
}
