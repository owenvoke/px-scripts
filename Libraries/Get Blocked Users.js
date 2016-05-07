// ==UserScript==
// @name         Get Blocked Users
// @namespace    PXgamer
// @version      0.4
// @description  Get a list of your blocked users.
// @author       PXgamer
// @match        *kat.cr/*
// @grant        none
// ==/UserScript==

function gbu() {
    'use strict';

    var returnedData;
    var searchString = /<li id\=\"blocked\_.+\"\><span class\=\"badgeInline\"\><span class\=\"offline\" title\=\"offline\"\><\/span\> <span class\=\"aclColor_[0-9]+\"\><a class\=\"plain\" href\=\"\/user\/.+\/\"\>([a-z0-9]+)<\/a>/gi, matches, blockedUsers = [];

    $.ajax({
        type: "GET",
        url: "/settings/privacy/",
        success: function (data) {
            returnedData = data;
            while (matches = searchString.exec(returnedData.html)) { // FUCK THIS ERROR, it doesn't matter. :P
                blockedUsers.push(matches[1]);
            }
            console.log(blockedUsers);
        },
        returnData: "json"
    });
	
	return blockedUsers;
}