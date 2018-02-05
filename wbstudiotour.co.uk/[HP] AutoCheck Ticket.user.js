// ==UserScript==
// @name         [HP] AutoCheck Ticket
// @namespace    pxgamer
// @version      0.1
// @description  Automatically checks for new tickets for Harry Potter tour (personal tool)
// @author       pxgamer
// @include      https://tickets.wbstudiotour.co.uk/webstore/shop/ViewItems.aspx?CG=HPTST2&C=TIX2
// @include      https://tickets.wbstudiotour.co.uk/WebStore/error.aspx
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
/*jshint multistr: true */

(function() {
	'use strict';
	if (location.href == 'https://tickets.wbstudiotour.co.uk/WebStore/error.aspx') location.href = 'https://tickets.wbstudiotour.co.uk/webstore/shop/ViewItems.aspx?CG=HPTST2&C=TIX2';
	setTimeout(function(){}, 200);

	var total = GM_getValue('hp_total', ''); // Total number of adults
	var date = GM_getValue('hp_date', '');   // Must be entered as the exact date integer (i.e. 6227 for 18th January 2017)

	if (total === '')
		total = prompt('Enter total required adults:'); GM_setValue('hp_total', total);
	if (date === '')
		date = prompt('Enter date required:'); GM_setValue('hp_date', date);

	console.log ('Date: ' + date + '\nTotal Adults: ' + total);

	date = date.split('/');

	$('[name="ctl00$ContentPlaceHolder$SalesChannelDetailControl$SalesChannelDetailRepeater$ctl00$35479$SalesChannelDetailPLURepeater$ctl01$PLUQuantityTextBox"]').val(total);
	__doPostBack('ctl00$ContentPlaceHolder$SalesChannelDetailControl$EventsDateTimeSelectorModal$EventsDateTimeSelector$CalendarSelector$Calendar','6216');
})();
