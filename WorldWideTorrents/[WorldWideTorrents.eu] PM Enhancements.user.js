// ==UserScript==
// @name         [WorldWideTorrents.eu] PM Enhancements
// @namespace    pxgamer
// @version      0.2
// @description  Adds a few changes to the mailbox screen.
// @author       pxgamer
// @match        *worldwidetorrents.eu/mailbox.php*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @require      https://greasyfork.org/scripts/22406-moment-js/code/Momentjs.js?version=142481
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


	$('#wrapper > div.myTable > div:nth-child(1) > div.main > table > tbody > tr > td:nth-child(1) > div.myFrame > div.wrapper').append('<div id="preview_box"></div>');

	$('#preview_box').css('border-radius', '4px');
	$('#preview_box').css('border', '1px solid #e3e3e3');
	$('#preview_box').css('box-shadow', 'inset 0 1px 1px rgba(0,0,0,.05)');
	$('#preview_box').css('padding', '9px');
	$('#preview_box').css('background', '#ffffff');

	$('[href^="javascript:read("]').on('click', function (e) {
		var id = e.target.toString().split('read(')[1].split(')')[0];
		var x = document.getElementById('msg_'+ id);
		var y = document.getElementById('img_'+ id);
		if (x.style.display === '') {
			x.style.display='none';y.src='images/plus.gif';
		}
		else {
			x.style.display='';y.src='images/minus.gif';
		}

		$('#preview_box').html(x);
		$('#preview_box tr').css('display', 'block');
	});
})();
