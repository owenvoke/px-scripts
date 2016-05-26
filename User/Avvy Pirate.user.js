// ==UserScript==
// @name         Avvy Pirate
// @namespace    PXgamer
// @version      0.1
// @description  Steals people's avatars anywhere on KAT.
// @author       PXgamer
// @include      *kat.cr/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('div.userPic div.userPicHeight a[href^="/user/"] img').after(
        ' <a class="stealAvvy siteButton textButton"">Steal User\'s avatar</a>'
    );

    $('.stealAvvy').on(
        'click',
        function() {
            var imgData = $(this).prev('img').attr('src');
            $.ajax(
                {
                    type: 'POST',
                    url: '/account/setuserpic/',
                    data: {
                        avatar: imgData
                    },
                    error: function() {
                        console.info('AP: An error occurred');
                    },
                    dataType: 'json',
                    success: function(data) {
                        location.reload();
                    }
                }
            );
        }
    );

})();
