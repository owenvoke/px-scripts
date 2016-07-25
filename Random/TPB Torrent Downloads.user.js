// ==UserScript==
// @name         TPB Torrent Downloads
// @namespace    PXgamer
// @version      0.3
// @description  Piratebay download via torrents
// @author       PXgamer
// @include      *thepiratebay.se/*
// @include      *thepiratebay.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var user_preferred_cache = 'cache_2';

    var preferred_caches = {
        cache_1: {
            name: 'Torcache',
            url: 'https://torcache.net/torrent/',
            end: '.torrent'
        },
        cache_2: {
            name: 'Torrage',
            url: 'http://torrage.info/torrent.php?h=',
            end: ''
        },
        cache_3: {
            name: 'iTorrents',
            url: 'http://itorrents.org/torrent/',
            end: '.torrent'
        }
    };

    $('a[title="Download this torrent using magnet"][href^="magnet:"]').each(function() {
        var hash = $(this).attr('href').split(":")[3];
        hash = hash.split("&")[0];
        $(this).after('<a href="'+preferred_caches[user_preferred_cache].url+hash.toUpperCase()+preferred_caches[user_preferred_cache].end+'" title="Download using torrent file"><img src="https://pximg.xyz/images/247c550f6ff9d70161fe85b2b31ecbb2.png" style="width: 12px; height: 12px;" alt="Torrent link"></a>');
    });
})();
