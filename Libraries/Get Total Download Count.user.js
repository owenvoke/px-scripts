// ==UserScript==
// @name         Get Total Download Count
// @namespace    PXgamer
// @version      0.2
// @description  Gets a total value as the count for downloads.
// @author       PXgamer
// @grant        none
// ==/UserScript==

function gtdc() {
    'use strict';

    var returnedData;
    var searchString = /<p class=\"lightgrey\">Total download count: ([0-9]+)<\/p>/ig, matches, dl = [];

    $.ajax({
        type: "GET",
        url: "https://kat.cr/account/history",
        async: false,
        success: function (data) {
            returnedData = data;
            while (matches = searchString.exec(returnedData.html)) {
                dl.push(matches[1]);
            }
        },
        returnData: "json"
    });
	return dl[0];
}