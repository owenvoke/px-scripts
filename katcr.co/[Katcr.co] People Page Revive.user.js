// ==UserScript==
// @name         [Katcr.co] People Page Revive
// @namespace    PXgamer
// @version      0.2
// @description  Makes the people page thread like the old site again.
// @author       PXgamer
// @include      *katcr.co/community/index.php/topic,177*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var titles = {
        lower: $('#msg_964 > table > tbody > tr:nth-child(1) > td:nth-child(2)').html(),
        middle: $('#msg_964 > table > tbody > tr:nth-child(1) > td:nth-child(21)').html(),
        upper: $('#msg_964 > table > tbody > tr:nth-child(1) > td:nth-child(52)').html()
    };

    var people = {
        lower: $('#msg_964 > table > tbody > tr:nth-child(2) > td:nth-child(2)').html(),
        middle: $('#msg_964 > table > tbody > tr:nth-child(2) > td:nth-child(21)').html(),
        upper: $('#msg_964 > table > tbody > tr:nth-child(2) > td:nth-child(52)').html()
    };

    // Append titles
    $('#msg_964 > table > tbody > tr:nth-child(1)').empty();
    $('#msg_964 > table > tbody > tr:nth-child(1)').append('<td class="p1p">'+titles.lower+'</td><td class="p1p">'+titles.middle+'</td><td class="p1p">'+titles.upper+'</td>');

    // Append Users
    $('#msg_964 > table > tbody > tr:nth-child(2)').empty();
    $('#msg_964 > table > tbody > tr:nth-child(2)').append('<td class="p1p">'+titles.lower+'<br/>'+people.lower+'</td><td class="p1p">'+titles.middle+'<br/>'+people.middle+'</td><td class="p1p">'+titles.upper+'<br/>'+people.upper+'</td>');
    $('#msg_964 > table > tbody > tr:nth-child(1)').empty();
    // Theming
    $('.p1p').css('padding', '2%');
    $('.bbc_link').css('border', 'none');
    $('#msg_964 > table > tbody tr').css('background', 'none');
    $('#msg_964 > table').css('margin', 'auto');
})();
