// ==UserScript==
// @name         Bring Back [Shift + Enter]
// @namespace    PXgamer
// @version      0.1
// @description  Adds the old post method to post boxes (Shift + Enter)
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arrShortCut = [{ name: 'Post', key: 16, fx: 'post' }];

    var ctrl = 17; // CTRL Key
    var ctrlKeyActived = false;
    var ta = $('.quicksubmit');
    var isBBaction = false;
    var postAction = false;

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
        switch (fx) {
            case 'preview':
                isBBaction = false;
                postAction = true;
                break;
            default:
                isBBaction = false;
                postAction = false;
        }
        if (postAction === true) {
            $('form[action^="/community/post/"] div.buttonsline button.siteButton.bigButton[type="submit"]').click();
        }
    }
})();
