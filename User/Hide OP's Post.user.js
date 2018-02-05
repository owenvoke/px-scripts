// ==UserScript==
// @name         Hide OP's post
// @namespace    pxgamer
// @version      0.2
// @description  Hides the OP in a thread.
// @author       pxgamer
// @include      *kat.cr/community/show/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.commentHeadLine:first .floatright').prepend('<span class="ka ka16 ka-eye toggleOP" title="Toggle OP"></span> ');
    if ($('.firstPost').length > 0) {
        $('div[id^="post"]:first').hide();
    }
    $('.toggleOP').on('click', function() {
        $('div[id^="post"]:first').toggle();
    });
})();
