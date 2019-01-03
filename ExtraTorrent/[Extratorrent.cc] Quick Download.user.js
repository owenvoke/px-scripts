// ==UserScript==
// @name         [Extratorrent.cc] Quick Download
// @namespace    pxgamer
// @version      0.3.1
// @description  Converts all ad download links to direct download.
// @author       pxgamer
// @include      *extratorrent.cc/*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('a[href^="/torrent_download/"]').each(function() {
        let torrentId  = $(this).attr("href").split("/")[2];
        let newUrl  = "/download/" + torrentId;
        $(this).attr("href", newUrl);
    });
})();
