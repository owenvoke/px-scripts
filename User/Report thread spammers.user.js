// ==UserScript==
// @name         Report thread spammers
// @namespace    PXgamer
// @version      0.1
// @description  Adds button to report thread and user.
// @author       PXgamer
// @include      *kat.cr/community/show/*
// @require      https://greasyfork.org/scripts/19550-get-user-hash/code/Get%20User%20Hash.js?version=124786
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var threadRep = $('#report_thread_div form').attr('action');
    var username  = $('div[id^="post"]:first .commentbody div.userPicSize100px .badge .badgeInfo .badgeUsernamejs a.plain[href^="/user/"]').text();
    var userHash  = guh(username);

    // Report thread
    $.ajax({
        type: "POST",
        url: threadRep,
        data: { reason: "Thread Spammer" }
    });

    // Report user
    $.ajax({
        type: "POST",
        url: "/account/report/"+userHash+"/",
        data: { reason: "Thread Spammer" }
    });
})();
