 ==UserScript==
 @name         Signature Hide on Profiles
 @namespace    PXgamer
 @version      0.1
 @description  Hide signature on profiles
 @author       PXgamer
 @match        kat.cruser
 @grant        none
 ==UserScript==

(function() {
    'use strict';

    $('tr td strongcontains(Signature)').html('spanspan class=ka ka16 ka-eye style=display inline-block; title=Toggle Signature id=toggleSigspanspan style=color black; display inline-block;Signaturespanspan');
})();

$('#toggleSig').on('click', function() {
    $('#wrapperInner  div.mainpart  table  tbody  tr  tdnth-child(1)  divnth-child(6)  div  div.leftpad10px  table  tbody  trnth-child(6)  tdnth-child(2)').toggle();
});