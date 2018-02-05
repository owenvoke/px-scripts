<?php

/*
 *
 *  Title:   GrabTPB
 *  Author:  pxgamer
 *  Usage:   php GrabTPB.php
 *
 */

class TPB {

	private $base_link = "https://thepiratebay.org/";

	function __construct ($auto = false) {
		if ($auto) {
			$this->grab_movies();
			$this->grab_games();
			$this->grab_tv();
			$this->grab_music();
			$this->grab_books();
			$this->grab_software();
			$this->grab_xxx();
		}
	}

	public function grab_movies () {
		$movies_popular = $this->base_link . "browse/201/";
		
		$result = $this->curl_grab($movies_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_games () {
		$games_popular = $this->base_link . "browse/400/";
		
		$result = $this->curl_grab($games_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}

	public function grab_tv () {
		$tv_popular = $this->base_link . "browse/205/";
		
		$result = $this->curl_grab($tv_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_music () {
		$music_popular = $this->base_link . "browse/101/";
		
		$result = $this->curl_grab($music_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_books () {
		$books_popular = $this->base_link . "browse/601/";
		
		$result = $this->curl_grab($books_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_software () {
		$software_popular = $this->base_link . "browse/300/";
		
		$result = $this->curl_grab($software_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_xxx () {
		$xxx_popular = $this->base_link . "browse/500/";
		
		$result = $this->curl_grab($xxx_popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grab_custom ($custom_url) {
		
		$result = $this->curl_grab($custom_url);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grab_torrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	private function curl_grab ($url) {
		$cu = curl_init();
		
		curl_setopt_array(
          $cu,
          array(
            CURLOPT_URL => $url,                // The GET url
            CURLOPT_RETURNTRANSFER => true,     // Return any response
            CURLOPT_FOLLOWLOCATION => true,     // Will follow redirects
            CURLOPT_SSL_VERIFYPEER => false     // Disable verififying the remote SSL
          )
        );

        // Exec and error catch
        $cu_exec = curl_exec($cu);
        $cu_error = curl_error($cu);
		curl_close ($cu);
		
		return $cu_exec;
	}
	
	private function grab_torrent ($url, $torrent_id) {
		$cu = curl_init();
		
		if (!file_exists("torrents/$torrent_id.torrent")) {
			$file = fopen("torrents/$torrent_id.torrent", "w+");
			
			curl_setopt_array(
			  $cu,
			  array(
				CURLOPT_URL => $url,                // The GET url
				CURLOPT_RETURNTRANSFER => true,     // Return any response
				CURLOPT_FOLLOWLOCATION => true,     // Will follow redirects
				CURLOPT_SSL_VERIFYPEER => false,    // Disable verififying the remote SSL
				CURLOPT_FILE           => $file     // Dump to file
			  )
			);

			// Exec and error catch
			$cu_exec = curl_exec($cu);
			$cu_error = curl_error($cu);
			curl_close ($cu);
		}
	}

}

//$tpb = new TPB (true); 	// Create new instance of TPB with auto-downloading

/*
$tpb = new TPB (); 		// Create new instance of TPB without auto-downloading
for ($i = 0; $i < 100; $i++) {
	echo $i;
	$tpb->grab_custom("https://thepiratebay.org/browse/201/".$i."/3/"); 	// Example function to run
}
*/
