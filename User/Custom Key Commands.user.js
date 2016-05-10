// ==UserScript==
// @name         Custom Key Commands
// @namespace    PXgamer
// @version      0.5
// @description  Allows custom key commands in text fields, so far I have added Bold and Italic
// @author       PXgamer
// @include      *kat.cr/*
// @require      https://greasyfork.org/scripts/19569-jquery-selection-jquery-plugin/code/jQueryselection%20-%20jQuery%20Plugin.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arrShortCut = [{ name: 'Bold', key: 66, fx: 'bold' }, { name: 'Italic', key: 73, fx: 'italic'}, { name: 'Preview', key: 13, fx: 'preview'}];

    var ctrl = 17; // CTRL Key
    var ctrlKeyActived = false;
    var ta = $('textarea#replytext');
    var isBBaction = false;
    var previewAction = false;

    $(document).keyup(function(e) {
        if (e.which == ctrl) ctrlKeyActived = false;
    }).keydown(function(e) {
        if (e.which == ctrl) ctrlKeyActived = true;
        if (ctrlKeyActived === true && ta.is(":focus")) {
            jQuery.each(arrShortCut, function(i) {
                if (arrShortCut[i].key == e.which) {
                    exec(arrShortCut[i].fx, ta);
                    return;
                }
            });
        }
    });

    function exec(fx, ta) {
        console.info(fx);
        var strings = [];
        switch (fx) {
            case 'bold':
                strings[0] = "[b]";
                strings[2] = "[/b]";
                isBBaction = true;
                previewAction = false;
                break;
            case 'italic':
                strings[0] = "[i]";
                strings[2] = "[/i]";
                isBBaction = true;
                previewAction = false;
                break;
            case 'preview':
                isBBaction = false;
                previewAction = true;
                break;
            default:
                strings[0] = "";
                strings[2] = "";
                isBBaction = false;
                previewAction = false;
        }
        if (isBBaction === true) {
            if (window.getSelection) {
                strings[1] = window.getSelection().toString();
            } else if (document.selection && document.selection.type != "Control") {
                strings[1] = document.selection.createRange().text;
            }

            ta.selection('replace', { text: strings[0]+strings[1]+strings[2] });
        }
        if (previewAction === true) {
            $('span.ka.ka-preview.bbedit-preview[data-preview="#post_preview"]').click();
        }
    }
})();
