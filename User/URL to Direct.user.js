// ==UserScript==
// @name         URL to Direct
// @namespace    PXgamer
// @version      0.3
// @description  URL to Direct for Kickass Torrents
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('a.nofollow.noreferrer').each(function() {
        var eurl = $(this).attr('href').split('/')[5];
        var url = window.atob(eurl);
        $(this).attr('href', url);
        $(this).attr('target', '_blank');
    });
})();
