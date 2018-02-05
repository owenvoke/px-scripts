// ==UserScript==
// @name         [Katcr.co] Always HTTPS
// @namespace    pxgamer
// @version      0.1
// @description  As the KAT team seem to be ignoring the KAT's Problems thread, here it goes.
// @author       pxgamer
// @include      http://katcr.co/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';
    location.replace('https://' + location.href.split('://')[1]);
})();
