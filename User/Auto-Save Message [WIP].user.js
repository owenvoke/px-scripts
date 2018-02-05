// ==UserScript==
// @name        Auto-Save Message [WIP]
// @namespace   pxgamer
// @description Auto-Saves message on accidental click.
// @include     *kat.cr/*
// @include     *kickass.to/*
// @version     1.1
// @grant       none
// ==/UserScript==

var saved = "";

$(document).delegate('#fancybox-overlay', 'click', function () {
  if ($('[id^="message_content_"]').length) {
    saved = $('[id^="message_content_"]').val();
    confirm(`Are you sure you wanted to remove your carefully constructed message? \n \n` + saved);
  }
});