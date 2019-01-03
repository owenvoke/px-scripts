// ==UserScript==
// @name         [YouTube.com] youtube-dl-php - Download Button
// @namespace    pxgamer
// @version      0.2.1
// @description  For use with: https://github.com/pxgamer/youtube-dl-php
// @author       pxgamer
// @include      *youtube.com/watch?v=*
// @include      *www.youtube.com/watch?v=*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    const searchGet = '/public/index.php'; // Your path to GET based implementation (i.e. /tests/$_GET.test.php)

    const videoId = location.href.split('watch?v=')[1].split('&')[0];

    $('#watch8-secondary-actions').append('<div class="yt-uix-menu"><a target="_blank" href="'+searchGet+'?vid_id='+videoId+'"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity"><span class="yt-uix-button-content">Download/Parse Video</span></button></a></div>');
})();
