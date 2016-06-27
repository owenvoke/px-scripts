// ==UserScript==
// @name        KAT - Friend Likes Remover
// @namespace   PXgamer
// @description Torrent Friend Likes Remover
// @include     *kat.cr/*
// @version     1.2
// @grant       none
// @author      PXgamer (original idea by Keka_Umans)
// ==/UserScript==

$(function(){
  $(".ajaxAlert").each(function(){
    if ($(this).find('img[src="/content/images/apple-touch-icon.png"]').length == 1) { $(this).remove(); }
  });
});
