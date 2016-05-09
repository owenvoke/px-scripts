// ==UserScript==
// @name         Signature Hide on Profiles
// @namespace    PXgamer
// @version      0.1
// @description  Hide signature on profiles
// @author       PXgamer
// @include      *kat.cr/user/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('tr td strong:contains("Signature:")').html('<span><span class="ka ka16 ka-eye" style="display: inline-block;" title="Toggle Signature" id="toggleSig"></span><span style="color: black; display: inline-block;">Signature</span></span>');
})();

$('#toggleSig').on('click', function() {
    $('#wrapperInner > div.mainpart > table > tbody > tr > td:nth-child(1) > div:nth-child(6) > div > div.leftpad10px > table > tbody > tr:nth-child(6) > td:nth-child(2)').toggle();
});