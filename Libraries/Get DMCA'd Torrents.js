// ==UserScript==
// @name         Get DMCA'd Torrents
// @namespace    PXgamer
// @version      0.2
// @description  Get a list of DMCA'd torrents.
// @author       PXgamer
// @require      https://code.jquery.com/jquery-1.12.3.min.js
// @grant        none
// ==/UserScript==

function getDMCAdTorrents(searchParam) {
    'use strict';

    var returnedData;
    var all = {dmcaList:[], dmcaHashes:[], dmcaURLs:[]};
    var dmcaURLs = [];
    var dmcaHashes = [];
    var searchString = /<i data-name="(.*)" data-hash="(.*)" data-Klink="(https:\/\/kat\.cr\/.*-t[0-9]+\.html)">/ig, matches, dmcaList = [];

    $.ajax({
        method: "GET",
        url: "https://pxstat.us/misc/dmca/?q=" + encodeURIComponent(searchParam),
        async: false,
        success: function (data) {
            returnedData = data;
            console.log(returnedData);
            while (matches = searchString.exec(returnedData)) {
                dmcaList.push(matches[1]);
                dmcaHashes.push(matches[2]);
                dmcaURLs.push(matches[3]);
            }
            all.dmcaList = dmcaList;
            all.dmcaHashes = dmcaHashes;
            all.dmcaURLs = dmcaURLs;
        },
        returnData: "text"
    });
    return all;
}