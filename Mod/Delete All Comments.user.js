// ==UserScript==
// @name        Delete All Comments
// @namespace   pxgamer
// @description Remove all user's comments
// @include     *kat.cr/user/*/comments/
// @include     *kickass.to/user/*/comments/
// @version     1
// @grant       none
// ==/UserScript==

$('th.lasttd:nth-child(4)').append('  <span id="deleteAll"><i class="ka ka16 ka-delete ka-red"></i></span>');

$(document).delegate('#deleteAll', 'click', function delThis() {
  $('.lasttd.nobr a').each( function() { 
    $(this).click();
  });
});