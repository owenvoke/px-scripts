// ==UserScript==
// @name        Clear Wall
// @namespace   pxgamer
// @description Clears the wall - https://kat.cr/ideabox/show/ability-to-clean-wall/
// @include     *kat.cr/user/*
// @version     1
// @grant       none
// ==/UserScript==

$('div.buttonsline').append(' <a class="siteButton bigButton redButton" id="clearWall"><span>clear wall</span> <span class="ka ka-delete ka16 ka-red"></span></a> <style> a#clearWall span.ka-red { height: 12px !important; background: none !important;  text-shadow: none !important;} </style>');

$(document).delegate(function() {
  $('[href^"javascript: DeleteComment"]').each (function() {
    $(this).click();
  });
});

