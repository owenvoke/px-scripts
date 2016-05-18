// ==UserScript==
// @name         Image Favourites
// @namespace    PXgamer
// @version      0.1
// @description  Add favourites for images.
// @author       PXgamer
// @include      *kat.cr/user/*/albums/
// @include      *kat.cr/user/*/recentimages/
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('a.turnoverButton.siteButton.bigButton[href$="/albums/"]').before('<a class="turnoverButton siteButton bigButton favouriteImages">Favourites</a>');
    if (location.href.indexOf('/recentimages/') > -1) {
        $('a[href^="/image/delete/"][data-id].deleteImageJs').after('<a class="favouriteImageJS topmarg2px absolute" style="margin-left: 25px;"><i class="ka ka16 ka-star"></i></a>');
    }

    $('a.favouriteImages').on('click', function() {
        $('a.turnoverButton').removeClass('active');
        $('a.favouriteImages').addClass('active');
        $('h2').text('Favourites');
        $('a[href="/account/newalbum/"]').parent().hide();
        $('.pages.botmarg5px.floatright').hide();
        var imgCan = $('div.galleryThumbSizerStills.inlineblock:first').parent();
        imgCan.html('');

        var imgList = GM_getValue('favImgList', '');

        if (imgList.length === 0) {
            imgCan.append('<h3>No Favourites Were Found!</h3>');
        }
        else {
            for (var i = 0; i < imgList.length; i++) {
                imgCan.append('<div class="galleryThumbSizerStills inlineblock ui-selectee">\
<a class="deleteImageJs topmarg2px leftmarg2px absolute favRemove"><i class="ka ka16 ka-delete ka-green"></i></a>\
<a href="'+imgList[i].url+'" class="galleryThumb ajaxLink" rel="recentimages">\
<img class="lazyjs" data-original="'+imgList[i].url+'" src="'+imgList[i].url+'" style="display: inline;">\
</a>\
</div>');
            }
        }
    });
})();
