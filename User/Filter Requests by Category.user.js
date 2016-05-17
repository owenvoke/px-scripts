// ==UserScript==
// @name         Filter Requests by Category
// @namespace    PXgamer
// @version      0.2
// @description  Adds a dropdown to filter the requests search by category.
// @author       PXgamer
// @include      *kat.cr/request/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.buttonsline.floatleft').append(' <select class="sortReqsOpt" style="vertical-align: middle;letter-spacing: 0px; width: 160px !important;"><option value="All">All</option><option value="Movies">Movies</option><option value="TV">TV</option><option value="Music">Music</option><option value="Games">Games</option><option value="Applications">Applications</option><option value="Books">Books</option><option value="Anime">Anime</option><option value="Other">Other</option><option value="XXX">XXX</option><option value="Unassigned">Unassigned</option></select> <button class="siteButton bigButton sortReqs">Filter</button>');

    $('.sortReqs').on('click', function() {
        $('.request-item.ideaBox').show();
        if ($('.sortReqsOpt').val() != 'All') {
            $('h6.lightgrey a[href^="/request/popular/"]').each(function() {
                if ($(this).text() != $('.sortReqsOpt').val()) {
                    $(this).parent().parent().parent().hide();
                }
            });
        }
    });
})();
