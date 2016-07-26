// ==UserScript==
// @name         ExtraTorrent File Renamed to Title
// @namespace    PXgamer
// @version      0.2
// @description  Renames ET downloads to the actual file name, instead of hash.
// @author       PXgamer
// @include      *extratorrent.cc/torrent_download/*/*.torrent
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('a[alt^="Download Torrent"][href^="/download/"]').each(function(){
        $(this).attr('download', $('h1').text() + '.torrent');
    });
})();
