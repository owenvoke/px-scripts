// ==UserScript==
// @name        IRC
// @namespace   pxgamer
// @description Adds IRC to /irc
// @include     *kat.cr/irc/
// @include     *kickass.to/irc/
// @version     1
// @grant       none
// ==/UserScript==

document.title = "KAT IRC";
$('.errorpage').html('<iframe src="http://chat.efnet.org:9090/?channels=%23KAT.ph" width="800px" height="550px"></iframe>');
$('.errorpage').css("background", "none");