// ==UserScript==
// @name         TPB Torrent Downloads
// @namespace    PXgamer
// @version      0.2
// @description  Piratebay download via torrents
// @author       PXgamer
// @include      *thepiratebay.se/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('a[title="Download this torrent using magnet"][href^="magnet:"]').each(function() {
        var hash = $(this).attr('href').split(":")[3];
        hash = hash.split("&")[0];
        $(this).after('<a href="http://torcache.net/torrent/'+hash+'.torrent" title="Download using torrent file"><img src="https://pximg.xyz/images/247c550f6ff9d70161fe85b2b31ecbb2.png" style="width: 12px; height: 12px;" alt="Torrent link"></a>');
    });
})();
