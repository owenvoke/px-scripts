// ==UserScript==
// @name         Get Total Download Count
// @namespace    PXgamer
// @version      0.1
// @description  Gets a total value as the count for downloads.
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==

function gtdc() {
    'use strict';

    var returnedData;
    var dlCount = "";
    var searchString = /<h1>Your download history<\/h1><p class="lightgrey">Total download count: ([0-9]+)<\/p><div class="buttonsline">/g;

    $.ajax({
        type: "GET",
        url: "https://kat.cr/account/history",
        async: false,
        success: function (data) {
            returnedData = data;
            dlCount = searchString.exec(returnedData.html);
            console.log('Download Count: ' + dlCount);
        },
        returnData: "json"
    });
	return dlCount;
}