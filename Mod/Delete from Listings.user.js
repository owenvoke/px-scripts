// ==UserScript==
// @name        Delete from Listings [MOD]
// @namespace   pxgamer
// @include     *kickass.to/community/user/*/*
// @include     *kat.cr/community/user/*/*
// @include     *localhost:999/kat/communitySearch
// @version     1.3
// @description Adds buttons to allow post deletions
// @grant       none
// ==/UserScript==

$('.commentHeadLine.borderrad3px.lightivorybg.line160perc').each(function() {
  $(this).append('<a href="javascript:deletePost('+$('div:first .plain', $(this)).attr('href').split('=')[1]+');" class="icon16 redButton icross floatright" title="Delete" style="margin-right:1%"><span></span></a>');                                                                 
});