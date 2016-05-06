// ==UserScript==
// @name         Achievement Filter
// @namespace    PXgamer
// @version      0.1
// @description  Filter un-obtainable cheevos
// @author       PXgamer
// @match        *kat.cr/achievements/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var year = new Date().getFullYear();

    $('table.achTable').before('<span class="showAllCheevos kaButton smallButton normalText">Show All</span> <span class="showOnlyCollected kaButton smallButton normalText">Show Only Achieved</span> <span class="showCurrentCheevos kaButton smallButton normalText">Show Current Achievements</span>');

    // Only show achievements you've already got
    $('.showOnlyCollected').on('click', function() {
        $('table.achTable tbody tr td.width100perc ul li').each(function() {
            $(this).show();
        });
        $('table.achTable tbody tr td.width100perc ul li span.achBadge').each(function() {
            if (!$(this).hasClass('assignedAchievement')) {
                $(this).parent().hide();
            }
        });
    });

    // Only current achievements
    $('.showCurrentCheevos').on('click', function() {
        $('table.achTable tbody tr td.width100perc ul li').each(function() {
            $(this).show();
        });
        $('table.achTable tbody tr td.width100perc ul li span.achBadge').each(function() {
            if (!$(this).hasClass('assignedAchievement') && $(this).children('a').children('span.achTitle').text().substring(0, 4) < year) {
                $(this).parent().hide();
            }
        });
    });

    // Show all cheevos (reset)
    $('.showAllCheevos').on('click', function() {
        $('table.achTable tbody tr td.width100perc ul li').each(function() {
            $(this).show();
        });
    });
})();