// ==UserScript==
// @name        Delete All Comments From User IP
// @namespace   PXgamer
// @description Kill That IP's Comments
// @include     *kat.cr/moderator/listusers/*/comments/
// @include     *kickass.to/moderator/listusers/*/comments/
// @version     1
// @grant       none
// ==/UserScript==

$('th.lasttd').append('  <span id="deleteAll"><i class="ka ka16 ka-delete ka-red"></i></span>');

$(document).delegate('#deleteAll', 'click', function delThis() {
  $('.lasttd.nobr a').each( function() { 
    $(this).click();
  });
});