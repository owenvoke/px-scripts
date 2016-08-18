// ==UserScript==
// @name         [WorldWideTorrents.eu] PM Enhancements
// @namespace    PXgamer
// @version      0.1
// @description  Adds a few changes to the mailbox screen.
// @author       PXgamer
// @match        *worldwidetorrents.eu/mailbox.php*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @require      http://momentjs.com/downloads/moment.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
	'use strict';

	var i = 0;
	var end = $('#wrapper > div.myTable > div:nth-child(1) > div.main > table > tbody > tr > td:nth-child(1) > div.myFrame > div.wrapper > div > form > table > tbody > tr > td > table > tbody > tr:not([id^="msg_"])').length;
	$('#wrapper > div.myTable > div:nth-child(1) > div.main > table > tbody > tr > td:nth-child(1) > div.myFrame > div.wrapper > div > form > table > tbody > tr > td > table > tbody > tr:not([id^="msg_"])').each(function() {
		var html = [];
		$(this).css('border-bottom', '1px solid #ddd');
		$('th,td', this).each(function(){
			html.push($(this).html());
		});
		if (html[1] === undefined) {
			var container = $(this).parent().parent().parent().parent().parent().parent();
			$(this).remove();
			container.after('<div>'+ html[0] + '</div>');
		}
		else {
			if (i !== 0 && i !== end -1) {
				$(this).html('<td style="width: 5px;">'+ html[0] + '</td><td style="width: 190px;">' + moment(html[3], 'YYYY-MM-DD hh:mm:ss').format("DD MMMM YYYY, hh:mm:ss") + '</td><td style="width: 320px;">' + html[2] + '</td><td>' + html[1] + '</td>');
			} else {
				$(this).html('<td style="width: 5px;">'+ html[0] + '</td><td style="width: 190px;">' + html[3] + '</td><td style="width: 320px;">' + html[2] + '</td><td>' + html[1] + '</td>');
			}
		}
		i++;
	});

	$('[id^="msg_"]').each(function(){
		$(this).css('border-radius', '4px');
		$(this).css('border', '1px solid #e3e3e3');
		$(this).css('box-shadow', 'inset 0 1px 1px rgba(0,0,0,.05)');
		$(this).css('padding', '9px');
	});
})();
