// ==UserScript==
// @name        Anti-DMCA (Download DMCA'd Torrents from KAT)
// @namespace   PXgamer
// @include     *kickass.so/*
// @include     *kickass.to/*
// @include     *kat.ph/*
// @include     *kat.cr/*
// @version     1.5
// @grant       none
// @description Created by PXgamer & Dr.YeTii
// ==/UserScript==

if ($('.alertfield').length==1) {
    var hash = $('#tab-technical .lightgrey').text().split(': ')[1];
    var name = window.location.pathname.split('/')[1];
    name = name.substring(0, name.lastIndexOf("-"));
    var trackers = [];
    $('#trackers_table tr').each(function() {
      trackers.push({'url':$('td:eq(0)', $(this)).text(), 'seed':$('td:eq(3)', $(this)).text(), 'leech':$('td:eq(4)', $(this)).text()});
    })
    trackers.sort(function(a, b) {
    var x = a['seed']; var y = b['seed'];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    for (var i=0;i<trackers.length;i++){
      console.log(trackers[i].url + ' - ' + trackers[i].val);
    }
    var tracker = trackers[trackers.length-1].url;

    var values = '<div class="seedLeachContainer" title="These are the last updated values, they are likely not up to date"><div class="seedBlock"><span class="seedLeachIcon"></span>seeders: <strong itemprop="seeders">'+trackers[trackers.length-1].seed+'</strong></div><div class="leechBlock"><span class="seedLeachIcon"></span>leechers: <strong itemprop="leechers">'+trackers[trackers.length-1].leech+'</strong></div></div>';

    var style = '.alertfield {margin: 0px auto 5px;}'+
        '.siteButton.verifTorrentButton .buttonPic {margin-right: 0px;}'+
        '.siteButton.verifTorrentButton .buttonPicMagnet {background: url("//kastatic.com/images/spriteContent-b566b8c.png") no-repeat scroll -147px -149px, linear-gradient(rgb(153, 135, 80), rgb(140, 122, 64)) repeat scroll 0% 0% transparent;padding-right: 1px;margin-right: 12px;}'+
        '.siteButton.verifTorrentButton:hover .buttonPicMagnet{background: url("//kastatic.com/images/spriteContent-b566b8c.png") no-repeat scroll -147px -149px, linear-gradient(#857540, #7E6B2E) repeat scroll 0% 0% transparent;}';
    
    var verified = '';
    if ($('.tabs.tabSwitcher').prev().text().indexOf('Torrent verified') >= 0) {
      verified = '<em class="buttonPic"></em>';
    }
    
    var buttonGroup = '<div class="buttonsline downloadButtonGroup clearleft novertpad"><style>'+style+'</style><a href="magnet:?xt=urn:btih:'+hash+'&amp;dn='+name+'&amp;tr='+tracker+'" class="siteButton giantButton askFeedbackjs verifTorrentButton" rel="nofollow" title="Magnet link download"><span>'+verified+'<em class="buttonPicMagnet buttonPic"></em>Download DMCA\'d Torrent</span></a></div>';
    $('.alertfield').after(values+buttonGroup)
}

