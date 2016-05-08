// ==UserScript==
// @name         Edit Torrent Button (not on sidebar)
// @namespace    PXgamer
// @version      0.1
// @description  Add edit torrent button next to the torrent info.
// @author       PXgamer
// @match        https://kat.cr/*-t*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var uploader = $('#mainDetailsTable tbody tr td div.font11px.lightgrey.line160perc span.badgeInline span a').text();
    var userAccount = $('#navigation li a span.usernameProfile.menuItem').text();
    if (uploader == userAccount) {
        var editLink = $('[href^="/torrents/edit/"]').attr('href');
        $('div.buttonsline.downloadButtonGroup.novertpad').append('<a rel="nofollow" class="kaGiantButton siteButton iconButton" title="Edit Torrent" href="'+editLink+'"><i class="ka ka16 ka-edit"></i></a>');
    }
})();
