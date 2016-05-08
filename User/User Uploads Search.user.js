// ==UserScript==
// @name         User Uploads Search
// @namespace    PXgamer
// @version      0.1
// @description  Search a user's uploads... kinda.
// @author       PXgamer
// @match        *kat.cr/user/*/uploads/
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    $('h2').after(' <input type="text" id="uploadsSearch" style="border-radius: 2px; padding: 3px 13px 3px; margin-top: 1px;"> <button class="siteButton bigButton searchFor ka ka-search"></button>');
    $('.searchFor').on('click', function() {
        $('tr td div.torrentname div a.cellMainLink').each(function() {
            $(this).parent().parent().parent().parent().show();
        });
        var searchParam = $('input#uploadsSearch').val();
        $('tr td div.torrentname div a.cellMainLink').each(function() {
        if ($(this).html().toLowerCase().indexOf(searchParam) === -1) {
          $(this).parent().parent().parent().parent().hide();
        }
    });
    });
})();