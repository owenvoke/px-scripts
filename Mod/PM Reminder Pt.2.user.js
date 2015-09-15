// ==UserScript==
// @name        PM Reminder Pt.2
// @namespace   PXgamer
// @description Part 2
// @include     *kat.cr/messenger/dialog/*
// @include     *kickass.to/messenger/dialog/*
// @version     1
// @grant       none
// ==/UserScript==


$('h2').append('<br><button id="warnCom" class="siteButton bigButton"><span>Comment Removal</span></button> <button id="warnTor" class="siteButton bigButton"><span>Torrent Removal</span></button> <button id="warnSig" class="siteButton bigButton"><span>Sig. Edited</span></button>');

$(document).delegate('#warnCom','click', function() {
    $('#message_content').val(`I've noticed you've been commenting and voting torrents that you haven't downloaded.

Please read the rules and PM me when you've read and understood this PM.
https://kickass.to/rules
[quote]Multi commenting is not allowed.[/quote]

We have a guide of what rep and rep abuse are here:
[faq=39]

Thanks,
PXgamer, Kickass Mod Team`);
});

$(document).delegate('#warnTor','click', function() {
  
  i = prompt('I have removed this torrent due to it...','');
  j = prompt('Enter the link of the removed torrent here:','');
    $('#message_content').val(`I have removed this torrent due to `+i+`. Please make sure you scan all your torrents before uploading to prevent user infections.
`+j+`

Please also read the rules here: https://kat.cr/rules

Thanks,
PXgamer, Kickass Mod Team`);
  });


$(document).delegate('#warnSig','click', function() {
    $('#message_content').val(`I have edited your signature as it was too large. Please read the signature rules here:
[center][url="https://kickass.to/community/show/27229/"]Correct signature sizes click here[/url][/center]

And the site rules here if you haven't already: https://kat.cr/rules

Thanks,
PXgamer, Kickass Mod Team`);
  });