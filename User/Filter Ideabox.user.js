// ==UserScript==
// @name         Filter Ideabox
// @namespace    PXgamer
// @version      0.1
// @description  Sort ideabox ideas by different methods
// @author       PXgamer
// @include      *kat.cr/ideabox/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('.buttonsline.floatleft').append('<select id="sortIdeas-select" style="letter-spacing: 0px; width: 220px !important;"><option value="all">Show all</option><option value="az">Sort Alphabetically (A-Z)</option><option value="no">Sort by Age (Newest to Oldest)</option><option value="votes">Sory by Votes (High to Low)</option></select> <button class="siteButton bigButton" id="sortIdeas"><span>Sort</span></button>');

    $('#sortIdeas').on('click', function() {
        var ideaSortType = $('#sortIdeas-select').val();

        switch (ideaSortType) {
            case 'all':
                $('div.ideaBox').show();
                break;
            case 'az':    // Sort alphabetically (A-Z)
                $('div.ideaBox').show();
                break;
            case 'no':    // Sort by age (Newest to Oldest)
                $('div.ideaBox').show();
                break;
            case 'votes': // Sort by votes (High to Low)
                $('div.ideaBox').show();
                break;
            default:
                $('div.ideaBox').show();
                break;
        }
    });
})();
