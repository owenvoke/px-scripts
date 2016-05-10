// ==UserScript==
// @name         Custom Key Commands
// @namespace    PXgamer
// @version      0.1
// @description  Allows custom key commands in text fields, so far I have added Bold and Italic
// @author       PXgamer
// @match        *kat.cr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arrShortCut = [{ name: 'Bold', key: 66, fx: 'bold' }, { name: 'Italic', key: 73, fx: 'italic'}];

    var ctrl = 17; // CTRL Key
    var ctrlKeyActived = false;

    $(document).keyup(function(e) {

        var ta = $('div.form-group textarea.form-control');
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
                strings[1] = "[/b]";
                break;
            case 'italic':
                strings[0] = "[i]";
                strings[1] = "[/i]";
                break;
            default:
                strings[0] = "";
                strings[1] = "";
        }

    }
})();