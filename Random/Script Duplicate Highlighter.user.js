// ==UserScript==
// @name         Script Duplicate Highlighter
// @namespace    PXgamer
// @version      0.1
// @description  Highlight duplicated @descriptions/@name in the list all scripts thread. [For Boba_Fett]
// @author       PXgamer
// @include      *kat.cr/community/show/list-all-scripts-themes-made-our-site-members/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var dl_v      = [];
    var ss_script = /[a-z0-9]+ - [a-z0-9]+/ig;

    var dl = $('div[id="post17719419"] .commentbody div[id^="content_"]').text().split('\n');
    for (var i = 0; i < dl.length; i++) {
        var title = dl[i].split(' - ')[0];
        var descr = dl[i].split(' - ')[1];
        if (typeof descr !== 'undefined' && title !== '') {
            dl_v.push({
                title: title,
                descr: descr
            });
        }
    }

    for (i = 0; i < dl_v.length; i++) {
        if (dl_v[i].title == dl_v[i].descr) {
            console.info(dl_v[i]);
        }
    }
})();
