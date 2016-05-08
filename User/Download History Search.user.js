// ==UserScript==
// @name         Download History Search
// @namespace    PXgamer
// @version      0.1
// @description  Search your account downloads.
// @author       PXgamer
// @match        *kat.cr/account/history/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('div.buttonsline').append(' <input type="text" id="historySearch" style="border-radius: 2px; padding: 3px 13px 3px; margin-top: 1px;"> <button class="siteButton bigButton searchFor ka ka-search"></button>');
    $('.searchFor').on('click', function() {
        $('#wrapperInner div.mainpart table tbody tr td:nth-child(1) table tbody tr td:nth-child(2) div.markeredBlock.torType a.cellMainLink').each(function() {
            $(this).parent().parent().parent().show();
        });
        var searchParam = $('input#historySearch').val();
        $('#wrapperInner div.mainpart table tbody tr td:nth-child(1) table tbody tr td:nth-child(2) div.markeredBlock.torType a.cellMainLink').each(function() {
        if ($(this).html().toLowerCase().indexOf(searchParam) === -1) {
          $(this).parent().parent().parent().hide();
        }
    });
    });
})();