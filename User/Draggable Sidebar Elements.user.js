// ==UserScript==
// @name        Draggable Sidebar Elements
// @namespace   PXgamer
// @include     *kat.cr/*
// @exclude     *kat.cr/settings*
// @description Fully mushable sidebar
// @version     1.9
// @grant       none
// ==/UserScript==

// set the cookie expiry time (days):
var setCookieExpiry = 2000;


$(".sliderbox").css('padding', '3px');

var i = 0;
var s = $(".sliderbox");
$(".sliderbox").each( function() {
$(this).wrap('<li id="item-'+i+'" style="margin-bottom:2px"></li>');
i++;
});

$('#sidebar').sortable({ containment: "#sidebar", scroll: false });

var setSelector = "#sidebar";
var setCookieName = "sideOrder";
 
function getOrder() {

	$.cookie(setCookieName, $(setSelector).sortable("toArray"), { expires: setCookieExpiry, path: "/" });
}

function restoreOrder() {
	var list = $(setSelector);
	if (list == null) return
 
	var cookie = $.cookie(setCookieName);
	if (!cookie) return;

	var IDs = cookie.split(",");
 

	var items = list.sortable("toArray");
 

	var rebuild = new Array();
	for ( var v=0, len=items.length; v<len; v++ ){
		rebuild[items[v]] = items[v];
	}
 
	for (var i = 0, n = IDs.length; i < n; i++) {
 

		var itemID = IDs[i];
 
		if (itemID in rebuild) {
 

			var item = rebuild[itemID];
 

			var child = $("#sidebar.ui-sortable").children("#" + item);
 

			var savedOrd = $("#sidebar.ui-sortable").children("#" + itemID);
 

			child.remove();
 
			$("#sidebar.ui-sortable").filter(":first").append(savedOrd);
		}
	}
}
 
jQuery(document).ready(function() {
	jQuery("#sidebar").sortable({axis: "y",
		cursor: "move",
		update: function() { getOrder(); }
	});
 

	restoreOrder();
});
