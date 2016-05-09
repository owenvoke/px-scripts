// ==UserScript==
// @name         Signature Hide on Profiles
// @namespace    PXgamer
// @version      0.2
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
    $('#toggleSig').parent().parent().parent().next().toggle();
});