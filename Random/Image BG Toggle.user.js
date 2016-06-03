// ==UserScript==
// @name         Image BG Toggle
// @namespace    PXgamer
// @version      0.5
// @description  Toggles the background colour for images in the browser
// @author       PXgamer
// @include      *.png*
// @include      *.jpg*
// @include      *.gif*
// @require      https://code.jquery.com/jquery-1.12.3.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';
    // EDITABLE VARS
    var allowGrey = false;
    
    // DO NOT EDIT BELOW
    var col = 'black';
    $('body').append('<span class="bgToggle" style="cursor: pointer; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 999999; float: right; background-color: white; border: 1px solid grey; border-radius: 2px; margin: 5px; padding: 2px; font-family: fantasy;">TOGGLE BG</span>');
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
})();
