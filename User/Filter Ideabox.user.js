// ==UserScript==
// @name         Filter Ideabox
// @namespace    PXgamer
// @version      0.2
// @description  Sort ideabox ideas by different methods
// @author       PXgamer
// @include      *kat.cr/ideabox/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('.buttonsline.floatleft').append('<select id="sortIdeas-select" style="letter-spacing: 0px; width: 220px !important;"><option value="all">Show all</option><option value="az">Sort Alphabetically (A-Z)</option><option value="no">Sort by Age (Newest to Oldest)</option><option value="views">Sort by Views (High to Low)</option></select> <button class="siteButton bigButton" id="sortIdeas"><span>Sort</span></button>');

    $('.ideaBox').each(function(){
        var html  = $(this).html();
        var title = $('.ideaBody h3 span', $(this)).text();
        var age   = $('.ideaBody div.greyText', $(this)).split('</span>')[7];
        var views = $('.ideaBody div.greyText', $(this)).split('</span>')[3];
        rows.push({"title":title,"age":age,"views":views,"html":html});
    });

    $('#sortIdeas').on('click', function() {
        var ideaSortType = $('#sortIdeas-select').val();

        switch (ideaSortType) {
            case 'all':
                $('div.ideaBox').show();
                break;
            case 'az':    // Sort alphabetically (A-Z)
                $('div.ideaBox').show();
                sortIdeas('title', 'desc');
                break;
            case 'no':    // Sort by age (Newest to Oldest)
                $('div.ideaBox').show();
                sortIdeas('age', 'desc');
                break;
            case 'views': // Sort by views (High to Low)
                $('div.ideaBox').show();
                sortIdeas('views', 'desc');
                break;
            default:
                $('div.ideaBox').show();
                break;
        }
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

    function sortIdeas(sortName, sortType) {
        sortByKey(rows, sortName);
        //rows.reverse();
        $('div.ideaBox').remove();
        for (var i=0;i<rows.length;i++) {
            $('.buttonsline.floatleft').after('<div class="ideaBox" id="idea_'+i+'">'+rows[i].html+'</div>');
        }

    }
})();
