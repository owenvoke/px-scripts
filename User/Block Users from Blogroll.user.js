// ==UserScript==
// @name         Block Users from Blogroll
// @namespace    PXgamer
// @version      0.1
// @description  Allows you to block selected users from the blogroll.
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    // Begin Blocklist
    var blocklist = [
        'TheDels'
    ];
    // End Blocklist

    $('#blogroll li .explanation a.plain.aclColor_').each(
        function() {
            for (var i = 0; i < blocklist.length; i++) {
                if ($(this).text() == blocklist[i]) {
                    $(this).parent().parent().hide();
                }
            }
        }
    );
})();
