<?php

class MovieManager {
    
    // The basic constructor
    function __construct() {
        // Get all folders
        $folders = $this->gfl(".");
        $this->init(count($folders));
        // Function for each folder
        foreach ($folders as $folder) {
            $fDetails = array();
            $fDetails = $this->formDetails($folder);
            if (count($fDetails) > 1) {
                $s_URL = $this->formUrl($fDetails[1], $fDetails[2]);
                $res   = $this->curl_req($s_URL);
                // Add the JSON data to an info.json
                if ($res["STATUS"] && $res["HTTP"] == 200) {
                    $js   = json_decode($res["DATA"]);
                    $js   = json_encode($js, JSON_PRETTY_PRINT);
                    $file = fopen($folder . "/info.json", "w");
                    fwrite($file, $js);
                }
            }
        }
        $this->finalise();
    }
    
    // Initiate the colours formatter and echo the start message
    function init($cnt) {
        $this->colours();
        
        echo $this->colourString("Starting to create .json files for " . $cnt . " folders.", "light_green");
    }
    
    // Decode the folder format. Should be:   Title (Year) Quality
    function formDetails($folder) {
        $folder_reg = '/(.+) \(([0-9]{4})\) [0-9]{3,4}p/';
        preg_match($folder_reg, $folder, $results);
        return $results;
    }
    
    // Generate the URL for the API call
    function formUrl($TITLE, $YEAR, $TYPE = 'Movie') {
        $current_url = "https://omdbapi.com/?t={TTTT}&y={YYYY}&type={TYPE}";
        // Generates the URL
        $current_url = preg_replace('/{TTTT}/', urlencode($TITLE), $current_url);
        $current_url = preg_replace('/{YYYY}/', urlencode($YEAR), $current_url);
        $current_url = preg_replace('/{TYPE}/', urlencode($TYPE), $current_url);
        
        return $current_url;
    }
    
    // Call the cURL request
    function curl_req($s_URL) {
        // Send the cURL request for the data
        $options = array(
            CURLOPT_URL => $s_URL,
            CURLOPT_RETURNTRANSFER => true
        );
        
        $cm = curl_init();
        
        CURL_SETOPT_ARRAY($cm, $options);
        
        // Set vars from the curl response/errors
        $returned    = curl_exec($cm);
        $error       = curl_error($cm);
        // Get the HTTP Status
        $http_status = curl_getinfo($cm, CURLINFO_HTTP_CODE);
        
        curl_close($cm);
        
        // If there's no errors, and the page didn't 400 (Bad Format response)
        if ($error === '' && $http_status !== 400) {
            return array(
                "STATUS" => true,
                "DATA" => $returned,
                "HTTP" => $http_status
            );
        } else {
            return array(
                "STATUS" => false,
                "DATA" => false,
                "HTTP" => $http_status
            );
        }
    }
    
    function gfl($dir) {
        // array to hold return value
        $retval = array();
        
        // add trailing slash if missing
        if (substr($dir, -1) != "/")
            $dir .= "/";
        
        // open pointer to directory and read list of files
        $d = @dir($dir) or die("getFileList: Failed opening directory $dir for reading");
        while (false !== ($entry = $d->read())) {
            // skip hidden files
            if ($entry[0] == ".")
                continue;
            if (is_dir("$dir$entry")) {
                $retval[] = "$entry";
            }
        }
        $d->close();
        
        return $retval;
    }
    
    // Set up shell colors
    function colours() {
        $this->foreground_colors['black']        = '0;30';
        $this->foreground_colors['dark_gray']    = '1;30';
        $this->foreground_colors['blue']         = '0;34';
        $this->foreground_colors['light_blue']   = '1;34';
        $this->foreground_colors['green']        = '0;32';
        $this->foreground_colors['light_green']  = '1;32';
        $this->foreground_colors['cyan']         = '0;36';
        $this->foreground_colors['light_cyan']   = '1;36';
        $this->foreground_colors['red']          = '0;31';
        $this->foreground_colors['light_red']    = '1;31';
        $this->foreground_colors['purple']       = '0;35';
        $this->foreground_colors['light_purple'] = '1;35';
        $this->foreground_colors['brown']        = '0;33';
        $this->foreground_colors['yellow']       = '1;33';
        $this->foreground_colors['light_gray']   = '0;37';
        $this->foreground_colors['white']        = '1;37';
        
        $this->background_colors['black']      = '40';
        $this->background_colors['red']        = '41';
        $this->background_colors['green']      = '42';
        $this->background_colors['yellow']     = '43';
        $this->background_colors['blue']       = '44';
        $this->background_colors['magenta']    = '45';
        $this->background_colors['cyan']       = '46';
        $this->background_colors['light_gray'] = '47';
    }
    
    // Returns colored string
    function colourString($string, $foreground_color = null, $background_color = null) {
        $colored_string = "";
        
        // Check if given foreground color found
        if (isset($this->foreground_colors[$foreground_color])) {
            $colored_string .= "\033[" . $this->foreground_colors[$foreground_color] . "m";
        }
        // Check if given background color found
        if (isset($this->background_colors[$background_color])) {
            $colored_string .= "\033[" . $this->background_colors[$background_color] . "m";
        }
        
        // Add string and end coloring
        $colored_string .= $string . "\033[0m";
        
        return $colored_string;
    }
    
    // Returns all foreground color names
    function getForegroundColors() {
        return array_keys($this->foreground_colors);
    }
    
    // Returns all background color names
    function getBackgroundColors() {
        return array_keys($this->background_colors);
    }
    
    // End echo.
    // TODO: Add cleanup process
    function finalise() {
        echo $this->colourString("\n\nCompleted!", "cyan");
        ;
    }
}

$mm = new MovieManager();
