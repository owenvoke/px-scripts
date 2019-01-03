// ==UserScript==
// @name        Work from Reported [KAT] [MOD]
// @namespace   pxgamer
// @description Adds the work button in the report list
// @include     *kat.cr/moderator/reported/
// @include     *kat.cr/moderator/reported/torrents/
// @version     1.4.1
// @grant       none
// ==/UserScript==
 

$(window).load( function() {
  $('.data').before("<script>function processTorrent(action, id) {	let btn = $('.processTorrent_'+id);	if (action=='process'||action=='stopprocess') {		$.ajax({			 			type: 'POST',			url: '/moderator/'+action+'/torrent/?id='+id,			data: 'return_uri=',			beforeSend: function() {				btn.addClass('disabledButton')			},success: function(data) {				btn.removeClass('disabledButton').attr('onclick', 'processTorrent('+(action=='process'?\"'stopprocess'\":\"'process'\")+', '+id+')').attr('title', action=='process'?'Mark finished':'Place in work');				if (action=='process') {					btn.find('i').addClass('ka-red').removeClass('ka-green');					btn.closest('tr').find('td:nth-last-child(2)').html('<a title=\"In process by '+$('.usernameProfile').text()+'\" class=\"ilock icon16\"><span></span></a>');				}else {					btn.find('i').addClass('ka-green').removeClass('ka-red');					btn.closest('tr').find('.ilock').remove();				}			},error: function() {				alert('Something went wrong');			}		});	}}</script>");
  $('.data tr:not(.firstr)').each( function() {
    let link = $(this).find('.cellMainLink').attr('href');
    link = link.split('').reverse().join('').split('t-')[0].split('').reverse().join('').split('.')[0];
    let inwork = ($(this).find('.ilock').length == 1);
    $(this).find('[href^="/moderator/reported/delete/"]').addClass('botmarg5px').after('<br><a title="'+(inwork?'Mark finished':'Place in work')+'" class="processTorrent_'+link+'" onclick="processTorrent('+(inwork?"'stopprocess'":"'process'")+', '+link+')"><i class="ka ka16 ka-settings '+(inwork?'ka-red':'ka-green')+'"></i></a>');
  });
});
