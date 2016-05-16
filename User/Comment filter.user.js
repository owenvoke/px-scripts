// ==UserScript==
// @name         Comment filter
// @namespace    PXgamer
// @version      0.1
// @description  Filter comments with keywords
// @author       PXgamer
// @include      *kat.cr/*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var searchStrings = ["Denuvo"];

    $('.commentText').each(
        function() {
            for (var i = 0; i < searchStrings.length; i++) {
                if ($(this).html().toLowerCase().indexOf(searchStrings[i]) > -1) {
                    $(this).parent().parent().parent().hide();
                }
            }
        }
    );
})();
