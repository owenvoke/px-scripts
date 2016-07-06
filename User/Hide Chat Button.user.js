// ==UserScript==
// @name         Hide Chat Button
// @namespace    PXgamer
// @version      0.1
// @description  Hides the chat button.
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// @require.     https://code.jquery.com/jquery-1.12.3.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.chatButton').hide();
})();
