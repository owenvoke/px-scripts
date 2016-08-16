// ==UserScript==
// @name         [WorldWideTorrents.eu] Load Content Over HTTPS
// @namespace    PXgamer
// @version      0.2
// @description  Using SSL breaks the site as it tries to load everything from HTTP rather than the server root.
// @author       PXgamer
// @match        https://worldwidetorrents.eu/*
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	$('img[src^="http://worldwidetorrents.eu/"], script[src^="http://worldwidetorrents.eu/"]').each(function(){
		var new_src = $(this).attr('src').replace('http://', 'https://');
		$(this).attr('src', new_src);
	});

	$('link[href^="http://worldwidetorrents.eu/"]').each(function(){
		var new_href = $(this).attr('href').replace('http://', 'https://');
		$(this).attr('href', new_href);
	});
})();
