// ==UserScript==
// @name         Grab All Uploads Info
// @namespace    PXgamer
// @version      0.1
// @description  Grabs a list of all uploads and their data for a certain user.
// @author       PXgamer
// @include      *kat.cr/user/*/uploads/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    // Defines vars
    var defined = {
        first_page: '1',
        last_page:  $('.pages a.turnoverButton.siteButton.bigButton[rel="nofollow"]:last').text(),
        data_list: []
    };
    var eMatch = { titles: [], magnets: [], torrents: [] };

    $('h2').after('<span class="siteButton bigButton grabUploadsList">Grab uploads list</span>');

    $('.grabUploadsList').on('click', function() {
        console.log('Constructing List. Please wait...');
        console.info(defined);

        for (var i = 1; i <= defined.last_page; i++) {
            var url       = 'https://kat.cr/user/XpoZ.Torrent/uploads/?page=' + i;
            var ss_title   = /<a href="\/.*-t[0-9]+.html" class="cellMainLink">(.*)<\/a>/ig;
            var ss_magnet  = /<a data-nop title="Torrent magnet link" href="(magnet:\?xt=urn:btih:.*)" class="icon16 askFeedbackjs" data-id="[A-Z0-9]+"><i class="ka ka16 ka-magnet"><\/i><\/a>/ig;
            var ss_torrent = /<a data-download title="Download torrent file" href="(\/torrents\/.*-t[0-9]+\/)" class="icon16 askFeedbackjs"><i class="ka ka16 ka-arrow-down"><\/i><\/a>/ig;
            var matches;
            $.ajax({
                type: "GET",
                url: url,
                async: false,
                success: function (data) {
                    var e = 0;
                    while (matches = ss_title.exec(data.html)) {
                        eMatch.titles.push(matches[1]);
                    }
                    while (matches = ss_magnet.exec(data.html)) {
                        eMatch.magnets.push(matches[1]);
                    }
                    while (matches = ss_torrent.exec(data.html)) {
                        eMatch.torrents.push('https://kat.cr' + matches[1]);
                    }
                },
                returnData: "json"
            });
        }

        for (var k = 0; k < eMatch.titles.length; k++) {
            defined.data_list.push({
                title: eMatch.titles[k],
                magnet: eMatch.magnets[k],
                torrent: eMatch.torrents[k]
            });
        }
        console.log(defined.data_list);
    });
})();
