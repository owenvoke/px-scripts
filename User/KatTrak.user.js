// ==UserScript==
// @name         KatTrak
// @namespace    PXgamer
// @version      0.2
// @description  A Trakt system for integrating with Kickass Torrents.
// @author       PXgamer
// @include      *kat.cr/*
// @include      *pxstat.us/trakt*
// @include      *pxgamer.github.io/PX-Scripts/KatTrak/
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    // NOTE: To set this up, first go to Trakt.tv here: https://trakt.tv/oauth/authorize?client_id=9efcadc5be0011a406fa0819192bd3aef0b3b2d9fa6ba90f3ffd3907138195d3&redirect_uri=https%3A%2F%2Fpxstat.us%2Ftrakt%2F&response_type=code
    // No, I'm not going to steal your data or anything. This is just a project to add what you download to your Trakt.tv Collection.

    var auth_code = GM_getValue('katTrakAuth', '');

    // Config Params
    // ---------------------------
    //GM_setValue('katTrakAuth', ''); location.reload(); // Uncomment to reset the auth_code.


    // DO NOT EDIT BELOW THIS LINE
    // ---------------------------

    function getQV(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    var getURL = location.href.toLowerCase();
    var sendData;

    if (getURL.indexOf('pxstat.us/trakt/?kattrakauth') > -1) {
        GM_setValue('katTrakAuth', getQV('katTrakAuth'));

        if (getQV('ret') == 'ktInstall') {
            location.href = 'https://pxgamer.github.io/PX-Scripts/KatTrak/#checkup';
        }
        else {
            location.href = 'https://kat.cr/';
        }
    }
    if (getURL.indexOf('pxgamer.github.io') > -1) {
        if (auth_code !== '') {
            $('.checkup-box').html('<table style="margin-left: 20%;"><tr style="text-align: left;"><td>Status:</td><td style="padding: 15px"></td><td>Success</td></tr><tr style="text-align: left;"><td>Auth Code:</td><td style="padding: 15px"></td><td>' + auth_code + '</td></tr></table>');
        }
        else {
            $('.checkup-box').html('<table style="margin-left: 20%;"><tr style="text-align: left;"><td>Status:</td><td style="padding: 15px"></td><td>Failed</td></tr><tr style="text-align: left;"><td>Auth Code:</td><td style="padding: 15px"></td><td>' + auth_code + '</td></tr></table>');
        }
    }
    if (getURL.indexOf('kat.cr') > -1 && getURL.indexOf('.html') > -1) {
        var category = $('span[id^="cat_"] strong a[href]:first').text();
        $('a.kaGiantButton[href^="/torrents/"][data-download]').attr('target', '_blank');
        var imdbId = "tt" + $('a.plain[href^="http://www.imdb.com/title/tt"]').text();
        if (category == 'Movies') {
            sendData = {
                "movies": [
                    {
                        "ids": {
                            "imdb": imdbId
                        }
                    }
                ]
            };
        }
        else if (category == 'TV') {
            sendData = {
                "shows": [
                    {
                        "ids": {
                            "imdb": imdbId
                        }
                    }
                ]
            };
        }

        $('a.kaGiantButton[href^="/torrents/"][data-download]').on('click', function() {
            $.ajax({
                beforeSend: function (request)
                {
                    request.setRequestHeader("Content-type", "application/json");
                    request.setRequestHeader("trakt-api-key", "9efcadc5be0011a406fa0819192bd3aef0b3b2d9fa6ba90f3ffd3907138195d3");
                    request.setRequestHeader("trakt-api-version", 2);
                    request.setRequestHeader("Authorization", "Bearer "+auth_code+"");
                },
                type: "POST",
                url: "https://api-v2launch.trakt.tv/sync/collection",
                data: JSON.stringify(sendData),
                success: function (data) {
                    console.log(data);
                },
                returnData: "json"
            });
        });
        $('a.kaGiantButton[href^="magnet:?xt"][data-nop]').on('click', function() {
            $.ajax({
                beforeSend: function (request)
                {
                    request.setRequestHeader("Content-type", "application/json");
                    request.setRequestHeader("trakt-api-key", "9efcadc5be0011a406fa0819192bd3aef0b3b2d9fa6ba90f3ffd3907138195d3");
                    request.setRequestHeader("trakt-api-version", 2);
                    request.setRequestHeader("Authorization", "Bearer "+auth_code+"");
                },
                type: "POST",
                url: "https://api-v2launch.trakt.tv/sync/collection",
                data: JSON.stringify(sendData),
                success: function (data) {
                    console.log(data);
                },
                returnData: "json"
            });
        });
    }
})();
