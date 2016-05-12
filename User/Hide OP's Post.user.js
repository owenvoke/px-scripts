// ==UserScript==
// @name         Hide OP's post
// @namespace    PXgamer
// @version      0.1
// @description  Hides the OP in a thread.
// @author       PXgamer
// @include      *kat.cr/community/show/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ($('.firstPost').length > 0) {
        $('div[id^="post"]:first').hide();
    }
})();
