<?php

/*
 *
 *  Title:   GrabTPB
 *  Author:  pxgamer
 *  Usage:   php GrabTPB.php
 *
 */

class TPB {

	private $baseLink = "https://thepiratebay.org/";

	public function __construct ($auto = false) {
		if ($auto) {
			$this->grabMovies();
			$this->grabGames();
			$this->grabTv();
			$this->grabMusic();
			$this->grabBooks();
			$this->grabSoftware();
			$this->grabXxx();
		}
	}

	public function grabMovies () {
		$popular = $this->baseLink . "browse/201/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabGames () {
		$popular = $this->baseLink . "browse/400/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}

	public function grabTv () {
		$popular = $this->baseLink . "browse/205/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabMusic () {
		$popular = $this->baseLink . "browse/101/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabBooks () {
		$popular = $this->baseLink . "browse/601/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabSoftware () {
		$popular = $this->baseLink . "browse/300/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabXxx () {
		$popular = $this->baseLink . "browse/500/";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	public function grabCustom ($customUrl) {
		
		$result = $this->curlGrab($customUrl);
		
		preg_match_all("/<div class=\"detName\">			<a href=\"\/torrent\/([0-9]+)\/.*?\" class=\"detLink\" title=\"Details for .*?\">(.*?)<\/a>\n<\/div>\n<a href=\"magnet:\?xt=urn:btih:(.*?)&dn=/", $result, $matches);
		
		$matches[1] = array_unique($matches[1]);
		$matches[2] = array_unique($matches[2]);
		$matches[3] = array_unique($matches[3]);
		
		foreach($matches[3] as $match) {
			$this->grabTorrent('https://itorrents.org/torrent/' . strtoupper($match) . '.torrent', strtoupper($match));
		}
	}
	
	private function curlGrab ($url) {
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
        $cuExec = curl_exec($cu);
        $cuError = curl_error($cu);
		curl_close ($cu);
		
		return $cuExec;
	}
	
	private function grabTorrent ($url, $torrent_id) {
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
			$cuExec = curl_exec($cu);
			$cuError = curl_error($cu);
			curl_close ($cu);
		}
	}

}

//$tpb = new TPB (true); 	// Create new instance of TPB with auto-downloading

/*
$tpb = new TPB (); 		// Create new instance of TPB without auto-downloading
for ($i = 0; $i < 100; $i++) {
	echo $i;
	$tpb->grabCustom("https://thepiratebay.org/browse/201/".$i."/3/"); 	// Example function to run
}
*/
