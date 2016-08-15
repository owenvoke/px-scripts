// ==UserScript==
// @name         [PrivateHD.to] Fix Beta Downloads
// @namespace    PXgamer
// @version      0.1
// @description  Trying to download through beta beta.privatehd.to/download/torrent/*.torrent causes a 500 error. Simple bug fix to resolve this.
// @author       PXgamer
// @include      *beta.privatehd.to/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    $('a[href^="https://beta.privatehd.to/download/"]').each(function(){
        var new_link = $(this).attr('href').replace('beta.','');
        $(this).attr('href', new_link);
    });
})();
