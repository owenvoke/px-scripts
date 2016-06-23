// ==UserScript==
// @name         Image BG Toggle
// @namespace    PXgamer
// @version      0.8
// @description  Toggles the background colour for images in the browser
// @author       PXgamer
// @include      *
// @exclude      *caramel/*
// @require      https://code.jquery.com/jquery-1.12.3.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var allowGrey = false;
    var col = 'black';
    if (document.contentType.indexOf('image') > -1) {
        console.info('IBGT: IS IMAGE');
        $('body').append('<span class="bgToggle" style="left: 95.6%; cursor: pointer; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 999999; position: fixed; float: right; background-color: white; border: 1px solid grey; border-radius: 2px; margin: 5px; padding: 2px; font-family: fantasy;">TOGGLE BG</span>');

        $('.bgToggle').on('click', function() {
            if (col == 'black') {
                $('body').css('background-color', col);
                if (allowGrey) { col = 'grey'; }
                else { col = 'white'; }
            }
            else if (col == 'grey') {
                $('body').css('background-color', col);
                col = 'white';
            }
            else if (col == 'white') {
                $('body').css('background-color', col);
                col = 'black';
            }
            else {
                $('body').css('background-color', 'white');
                col = 'black';
            }
        });
    }
})();
