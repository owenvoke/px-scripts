// ==UserScript==
// @name        Sort alphabetically
// @namespace   PXgamer
// @description Sorts torrents alphabetically as an option
// @include     *kickass.so/new/
// @include     *kickass.so/movies/
// @include     *kickass.so/games/
// @include     *kickass.so/tv/
// @include     *kickass.so/books/
// @include     *kickass.so/applications/
// @include     *kickass.so/music/
// @include     *kickass.so/anime/
// @include     *kickass.so/other/
// @include     *kickass.so/xxx/
// @include     *kickass.to/new/
// @include     *kickass.to/movies/
// @include     *kickass.to/games/
// @include     *kickass.to/tv/
// @include     *kickass.to/books/
// @include     *kickass.to/applications/
// @include     *kickass.to/music/
// @include     *kickass.to/anime/
// @include     *kickass.to/other/
// @include     *kickass.to/xxx/
// @include     *kat.cr/new/
// @include     *kat.cr/movies/
// @include     *kat.cr/games/
// @include     *kat.cr/tv/
// @include     *kat.cr/books/
// @include     *kat.cr/applications/
// @include     *kat.cr/music/
// @include     *kat.cr/anime/
// @include     *kat.cr/other/
// @include     *kat.cr/xxx/
// @version     1.2
// @grant       none
// ==/UserScript==

var rows = [];
 
$('.data').before('<div class="buttonsline"><select disabled id="field-select" style="letter-spacing: 0px; width: 160px !important;"><option value="title">Sort by Torrent Name</option></select><select id="field-sort" style="letter-spacing: 0px; width: 150px !important;"><option value="asc">Ascending</option><option value="desc">Descending</option></select> <button class="siteButton bigButton" id="sortTable"><span>Sort</span></button></div>');
 
$(document).delegate('#sortTable', 'click', function() {
  var sortName = $('#field-select').val();
  var sortType = ($('#field-sort').val()=="asc");
  sortTable(sortName, sortType);
});
 
$('.data tr[id^="torrent_"]').each(function() {
  var title = $('.cellMainLink', $(this)).text();
  var html = $(this).html();
  rows.push({"title":title, "html":html});
});
 
function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    if (typeof x == "string") {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
 
function sortTable(sortName, sortType) {
  sortByKey(rows, sortName);
  if (!sortType) { // Not sortType / is false
    rows.reverse();
  }
  $('.data tr[id^="torrent_"]').remove();
  for (var i=0;i<rows.length;i++) {
    $('.data').append('<tr id="torrent_'+i+'">'+rows[i].html+'</tr>');
  }

    }
