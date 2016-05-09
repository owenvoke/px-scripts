// ==UserScript==
// @name         Get User Hash
// @namespace    PXgamer
// @version      0.1
// @description  Get any user's hash, for various activities
// @author       PXgamer
// @grant        none
// ==/UserScript==

function guh(username) {
        var re = /<a href="\/bookmarks\/[a-z]+\/[a-z]+\/([a-z0-9]+)\/" class="postLink kaButton smallButton normalText"><i class="ka ka-bookmark"><\/i>/ig, matches, ret = [];
        $.ajax({
            type: "GET",
            url: "/user/"+encodeURIComponent(username)+"/",
            async: false,
            success: function (data) {
                while (matches = re.exec(data.html)) {
                    ret.push(matches[1]);
                }
            },
            returnData: "json"
        });
        console.log(ret[0]);
        return ret[0];
    }