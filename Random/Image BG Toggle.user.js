// ==UserScript==
// @name         Image BG Toggle
// @namespace    PXgamer
// @version      0.3
// @description  Toggles the background colour for images in the browser
// @author       PXgamer
// @include      *.png
// @include      *.jpg
// @include      *.gif
// @require      https://code.jquery.com/jquery-1.12.3.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var col = false;
    $('body').append('<span class="bgToggle" style="cursor: pointer; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 999999; float: right; background-color: white; border: 1px solid grey; border-radius: 2px; margin: 5px; padding: 2px; font-family: fantasy;">TOGGLE BG</span>');
    $('.bgToggle').on('click', function() {
        if (!col) {
            $('body').css('background-color', 'black');
            col = true;
        }
        else {
            $('body').css('background-color', 'white');
            col = false;
        }
    });
})();
