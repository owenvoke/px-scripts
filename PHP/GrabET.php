<?php

/*
 *
 *  Title:   GrabET
 *  Author:  PXgamer
 *  Usage:   php GrabET.php
 *
 */

class ET {

	private $base_link = "https://extratorrent.cc/";

	function __construct ($auto = false) {
		if ($auto) {
			$this->grab_movies();
			$this->grab_games();
			$this->grab_tv();
			$this->grab_music();
			$this->grab_anime();
			$this->grab_books();
			$this->grab_software();
			$this->grab_xxx();
		}
	}

	public function grab_movies () {
		$movies_popular = $this->base_link . "view/popular/Movies.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($movies_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grab_games () {
		$games_popular = $this->base_link . "view/popular/Games.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($games_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grab_tv () {
		$tv_popular = $this->base_link . "view/popular/TV.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($tv_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grab_music () {
		$music_popular = $this->base_link . "view/popular/Music.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($music_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grab_anime () {
		$anime_popular = $this->base_link . "view/popular/Anime.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($anime_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}

	public function grab_books () {
		$books_popular = $this->base_link . "view/popular/Books.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($books_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}

	public function grab_software () {
		$software_popular = $this->base_link . "view/popular/Software.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($software_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
		}
	}
	
	public function grab_xxx () {
		$xxx_popular = $this->base_link . "view/popular/Adult+-+Porn.html?srt=added&order=desc&pp=100";
		
		$result = $this->curl_grab($xxx_popular);
		
		preg_match_all("/<a href=\"\/torrent_download\/([0-9]+)\/.*?\.torrent\" title=\"Download /", $result, $matches);
		
		$matches = array_unique($matches[1]);
		
		foreach($matches as $match) {
			$this->grab_torrent('https://extratorrent.cc/download/' . $match . '/', $match);
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

//$et = new ET (true); 	// Create new instance of ET with auto-downloading

//$et = new ET (); 		// Create new instance of ET without auto-downloading
//$et->grab_movies(); 	// Example function to run