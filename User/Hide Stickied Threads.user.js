// ==UserScript==
// @name         Hide Stickied Threads
// @namespace    PXgamer
// @version      0.1
// @description  Hides stickied threads in forum groups
// @author       PXgamer
// @include      *kat.cr/community/*/
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('table tbody tr td span.statusIcon.ka.ka-pin[title="Sticky Thread"]').parent().parent().hide();
})();
