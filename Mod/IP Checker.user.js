// ==UserScript==
// @name        IP Check [KAT][Mod]
// @namespace   pxgamer
// @description Checks IPs against IPVoid
// @include     *kat.cr/user/*/ips/*
// @include     *kickass.to/user/*/ips/*
// @include     *kat.ph/user/*/ips/*
// @version     1.1
// @grant       none
// ==/UserScript==

$('.doublecelltable').before('<style>.high { color:black; background-color:rgba(216,74,74, 0.8); border:1px thin red; border-radius:3px; padding:3px; } #searchtext span{background-color:#FF9;color:#555;}.btn {background:transparent linear-gradient(to bottom, #766843 0%, #645736 100%) repeat scroll 0% 0%; border:1px black solid; padding:3px; color:white; border-radius:4px;} #ip_address {border:1px black solid; border-radius:4px; padding:3px;} </style>');
$('.doublecelltable > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > h2:nth-child(4)').before('<div align="center"><div style="display:inline-block;" id="ahIP" align="center"><form class="form-inline top-bottom-space" role="form" target="_blank" action="http://www.ipvoid.com/" method="post" onsubmit=""><input name="ip" class="form-control" id="ip_address" placeholder="Enter IP address..." type="text">        <button type="submit" class="btn btn-primary">Check IP</button>    </form>   </div>');
$('#ahIP').after(' <div style="display:inline-block;"><button id="scanIP" class="btn btn-primary">Scan IP</button></div></div>');

$(document).delegate('#scanIP', 'click', function highlightSearch() {
    var query = $('#ip_address').val();
    query = query.trim();
    $('[href^="/moderator/listusers/"').removeClass('high');
    $('[href^="/moderator/listusers/'+query+'"').addClass('high');
});