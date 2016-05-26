// ==UserScript==
// @name         Bring Back [Shift + Enter]
// @namespace    PXgamer
// @version      0.3
// @description  Adds the old post method to post boxes (Shift + Enter)
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arrShortCut = [{ name: 'Post', key: 13, fx: 'post' }];

    var shift = 16; // SHIFT Key
    var shiftKeyActived = false;
    var ta = $('.quicksubmit');
    var isBBaction = false;
    var postAction = false;

    $(document).keyup(function(e) {
        if (e.which == shift) shiftKeyActived = false;
    }).keydown(function(e) {
        if (e.which == shift) shiftKeyActived = true;
        if (shiftKeyActived === true && ta.is(":focus")) {
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
            case 'post':
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
        postAction = false;
        shiftKeyActived = false;
    }
})();
