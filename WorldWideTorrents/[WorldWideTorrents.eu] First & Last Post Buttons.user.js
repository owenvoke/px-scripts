// ==UserScript==
// @name         [WorldWideTorrents.eu] First & Last Post Links
// @namespace    pxgamer
// @version      0.1
// @description  Adds links for first and last post to the forums.
// @author       pxgamer
// @include      https://worldwidetorrents.eu/forums.php?action=viewforum&forumid=*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('.alt1').each(function() {
        var url = $(this).find('a').first().attr('href');
        $(this).append('<p style="margin-bottom: 5px;"></p><a class="btnLink" href="/'+url+'">First Post</a> | <a class="btnLink" href="/'+url+'&page=last#last">Latest Post</a></td>');
    });
})();
