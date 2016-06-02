// ==UserScript==
// @name         DuckDuckVader
// @namespace    PXgamer
// @version      0.3
// @description  Adds a Star Wars theme to DDG.
// @author       PXgamer
// @include      *duckduckgo.com/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var icons = {
        ddv_icon:       'https://pxstat.us/img/ddg.ico',
        duckduckvader:  'https://pximg.xyz/images/b5161751e12e8dd67e9ebd32b9c59cb3.png',
        death_star:     'https://pximg.xyz/images/5e17830c92c9d424583562f325e14993.png',
        clone_trooper:  'https://pximg.xyz/images/d0459862f22a4da2783dd2873351adac.png',
        r2d2:           'https://pximg.xyz/images/8cd897d7a3464adb858d547ddec4a54d.png',
        darth_vader:    'https://pximg.xyz/images/c7f81673c184766261c0f77140cf8b0f.png',
        c3po:           'https://pximg.xyz/images/1ebfbf15dac7c30c4c37110e2a7b089f.png',
        yoda:           'https://pximg.xyz/images/684f7e5651bd8b671c1b5b42c656680a.png',
        ls_green:       'https://pximg.xyz/images/dc89a67fd6b7074d00799a36b9e02d5a.png',
        ls_red:         'https://pximg.xyz/images/887f1b0100f57b2f2ac0d9da1f05f9f7.png',
        xwing:          'https://pximg.xyz/images/7f6dfab841f61e9744d74c8e66603146.png',
        leia:           'https://pximg.xyz/images/24c537b1303fb80d4a42d743bdb416de.png',
        boba_fett:      'https://pximg.xyz/images/07a5a5d8b7559d27a50f2313cb8ffbea.png',
        atat:           'https://pximg.xyz/images/041bd728f8bd7ad0be3d0ab1ea784731.png',
        m_falcon:       'https://pximg.xyz/images/d00c8361eacbbe5f82c39f5da482cefa.png',
        chewbacca:      'https://pximg.xyz/images/fbecac70beb699e1f25308a21f96e148.png',
        tie_fighter:    'https://pximg.xyz/images/c3cb241d0f8d48b65542701d8a857d9d.png',
        admiral_ackbar: 'https://pximg.xyz/images/832b2714f14236164cdc2756a930497b.png'
    };

    // All pages set favicon
    (function() {
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = icons.ddv_icon;
        document.getElementsByTagName('head')[0].appendChild(link);
    }());

    // For Home
    if (location.href == 'https://duckduckgo.com/' || location.href == 'https://duckduckgo.com/?q=') {
        $('.logo-wrap--home').html('');
        $('.logo-wrap--home').css('background-image', 'url('+icons.duckduckvader+')');
        $('.logo-wrap--home').css('width', '187px');
        $('.logo-wrap--home').css('height', '103px');
        $('.tag-home').html('<span>May the force be with you</span>');
        $('.search__button').val('');
        $('.search__button').css('background-image', 'url('+icons.death_star+')');
        $('.search__button').css('background-size', 'contain');
    }
})();
