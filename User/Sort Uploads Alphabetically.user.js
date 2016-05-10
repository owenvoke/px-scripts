// ==UserScript==
// @name         Sort Uploads Alphabetically
// @namespace    PXgamer
// @version      0.1
// @description  Sort user uploads alphabetically
// @author       PXgamer
// @match        *kat.cr/user/*/uploads/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var rows = [];

    $('tr.firstr th.width100perc.nopad').html(
        '<a class="sortAlpha">torrent name</a>'
    );

    $('.data tr[id^="torrent_"]').each(function() {
        var title = $('.cellMainLink', $(this)).text();
        var html = $(this).html();
        rows.push({"title":title, "html":html});
    });
    console.log(rows);

    $('.sortAlpha').on('click', function() {
        var sortName = 'title';
        var sortType = 'desc';
        sortTable(sortName, sortType);
    });

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x == "string") {
                x = x.toLowerCase();
                y = y.toLowerCase();
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    function sortTable(sortName, sortType) {
        sortByKey(rows, sortName);
        if (!sortType) {
            rows.reverse();
        }
        $('.data tr[id^="torrent_"]').remove();
        for (var i=0;i<rows.length;i++) {
            $('.data').append('<tr id="torrent_'+i+'">'+rows[i].html+'</tr>');
        }

    }
})();