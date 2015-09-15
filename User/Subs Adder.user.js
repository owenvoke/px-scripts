// ==UserScript==
// @name        Subs Adder [KAT]
// @namespace   PXgamer
// @include     *kickass.to/*.html*
// @include     *kat.cr/*.html*
// @version     2.6
// @grant       none
// @description Adds subtitle YIFYSubs link to KAT pages
// ==/UserScript==

if ($('.dataList').length==1) {
  if (/\/movies\//i.test($('span[id^="cat_"]').html())) {
    var imdbID = $('.dataList [href*="www.imdb.com/title/"]').html();
    $('.dataList .textButton[href^="/bookmarks/"]').after(' <br><br><a title="Check YIFY Subtitles" rel="http://www.yifysubtitles.com/movie-imdb/tt'+imdbID+'/" class="postLink icon16 textButton isearch subs"><span></span>check for subtitles</a>');
  }else if (/\/tv\//i.test($('span[id^="cat_"]').html())) {
    var episode = $('.dataList li:first strong').html()+((/S\d\dE\d\d/).test($('.dataList ul:first').html()) ? ' '+$('.dataList ul:first').html().match(/S\d\dE\d\d/)[0] : '');
    $('.dataList .textButton[href^="/bookmarks/"]').after(' <br><br><a title="Check Addic7ed.com" rel="http://www.addic7ed.com/search.php?search='+encodeURIComponent(episode)+'&Submit=Search" class="postLink icon16 textButton isearch subs"><span></span>check for subtitles</a>');   
  }
}

$(document).delegate('.subs', 'click', function() {
  var subLink = $(this).attr('rel');
   window.open(subLink, '_blank'); 
});