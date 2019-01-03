// ==UserScript==
// @name        Adds Solved button
// @namespace   pxgamer
// @description Perm add Solved button
// @include     *kat.cr/community/show/*
// @include     *kickass.to/community/show/*
// @version     1.0.1
// @grant       none
// ==/UserScript==

if ($('[href^="/community/set_solved/"]').length == 0) {
let tid = $('[href^="/community/update/"]').attr('href');
let tid = tid.split('/')[3];
$('.imove').after(' <a title="Solve Thread" href="/community/set_solved/'+tid+'/" class="icheck ajaxLink icon16"><span></span></a> ');
}