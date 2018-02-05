// ==UserScript==
// @name        Delete All Uploads
// @namespace   pxgamer
// @description Remove all user's comments
// @include     *kat.cr/user/*/uploads/
// @version     1
// @grant       none
// ==/UserScript==

$('th.center:nth-child(3)').append('  <span id="deleteAll"><i class="ka ka16 ka-delete ka-red"></i></span>');

console.log($('[id^="del_"] a').length);
$('[id^="del_"] a').each( function() {
  $(this).attr('onclick', $(this).attr('onclick').split(')) ')[1]);
});
console.log('Done!');
$(document).delegate('#deleteAll', 'click', function delThis() {
  $('[id^="del_"] a').each( function() {
    $(this).click();
  });
});