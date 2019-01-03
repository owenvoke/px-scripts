<?php

/*
 *
 *  Title:   GrabET
 *  Author:  pxgamer
 *  Usage:   php GrabET.php
 *
 */

class ET {

	private $baseLink = "https://extratorrent.cc/";

	public function __construct ($auto = false) {
		if ($auto) {
			$this->grabMovies();
			$this->grabGames();
			$this->grabTv();
			$this->grabMusic();
			$this->grabAnime();
			$this->grabBooks();
			$this->grabSoftware();
			$this->grabXxx();
		}
	}

	public function grabMovies () {
		$popular = $this->baseLink . "view/popular/Movies.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabGames () {
		$popular = $this->baseLink . "view/popular/Games.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabTv () {
		$popular = $this->baseLink . "view/popular/TV.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabMusic () {
		$popular = $this->baseLink . "view/popular/Music.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabAnime () {
		$popular = $this->baseLink . "view/popular/Anime.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}

	public function grabBooks () {
		$popular = $this->baseLink . "view/popular/Books.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}

	public function grabSoftware () {
		$popular = $this->baseLink . "view/popular/Software.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabXxx () {
		$popular = $this->baseLink . "view/popular/Adult+-+Porn.html?srt=added&order=desc&pp=100";
		
		$result = $this->curlGrab($popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grabCustom ($customUrl) {		
		$result = $this->curlGrab($customUrl);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grabTorrent('https://extratorrent.cc/download/' . $match . '/', $match);
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
        $cu_exec = curl_exec($cu);
        $cu_error = curl_error($cu);
		curl_close ($cu);
		
		return $cu_exec;
	}
	
	private function grabTorrent ($url, $torrentId) {
		$cu = curl_init();
		
		if (!file_exists("torrents/$torrentId.torrent")) {
			$file = fopen("torrents/$torrentId.torrent", "w+");
			
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
			$curlExec = curl_exec($cu);
			$curlError = curl_error($cu);
			curl_close ($cu);
		}
	}

}

//$et = new ET (true); 	// Create new instance of ET with auto-downloading

//$et = new ET (); 		// Create new instance of ET without auto-downloading
//$et->grabMovies(); 	// Example function to run