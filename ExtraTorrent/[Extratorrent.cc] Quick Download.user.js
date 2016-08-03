// ==UserScript==
// @name         [Extratorrent.cc] Quick Download
// @namespace    PXgamer
// @version      0.3
// @description  Converts all ad download links to direct download.
// @author       PXgamer
// @include      *extratorrent.cc/*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('a[href^="/torrent_download/"]').each(function() {
        var torr_id  = $(this).attr("href").split("/")[2];
        var new_url  = "/download/" + torr_id;
        $(this).attr("href", new_url);
    });
})();
