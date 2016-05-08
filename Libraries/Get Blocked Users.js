// ==UserScript==
// @name         Get Blocked Users
// @namespace    PXgamer
// @version      0.5
// @description  Get a list of your blocked users.
// @author       PXgamer
// @match        *kat.cr/*
// @grant        none
// ==/UserScript==

function gbu() {
    'use strict';

    var returnedData;
    var searchString = /<span class="aclColor_.*"><a class="plain" href="\/user\/.*\/">([a-z)-9_.-]+)<\/a>/gi, matches, blockedUsers = [];

    $.ajax({
        type: "GET",
        url: "/settings/privacy/",
        success: function (data) {
            returnedData = data;
            while (matches = searchString.exec(returnedData.html)) {
                blockedUsers.push(matches[1]);
            }
            console.log(blockedUsers);
        },
        returnData: "json"
    });
	return blockedUsers;
}