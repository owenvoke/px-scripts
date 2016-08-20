// ==UserScript==
// @name         [WorldWideTorrents.eu] Fix JS Quoting
// @namespace    PXgamer
// @version      0.1
// @description  Fixes quoting in the Javascript by escaping the single quotes in the function calls.
// @author       PXgamer
// @include      http*://*worldwidetorrents.eu*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
	'use strict';

	function escapeHtml (text) {
		return text
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	var reg = /(javascript:SmileIT\(\'\[quote\=)([\s\S]+?)(\[\/quote\]\',[\s\S]+?\'Form\',[\s\S]+?\'body\'\);)/i;
	$('a[href^="javascript:SmileIT("]').each(function(){
		var url   = $(this).attr('href');
		var match = reg.exec(url);
		console.log(match);
		if (match !== null) {
			var match1 = match[2];
			var match2 = match[2].replace(/\'/g, "\\'");
			$(this).attr('href', url.replace(match1, match2));
		}
	});
})();
