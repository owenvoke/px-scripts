// ==UserScript==
// @name        Extra Smileys
// @namespace   PXgamer
// @description Adds more smileys to KAT
// @include     *localhost:999/kat/testpage
// @include     *kickass.to/*
// @include     *kat.cr/*
// @version     2.6
// @grant       none
// ==/UserScript==


$(window).load(function(){
  
	$('.bbedit-smileybar').append('<img title="Smoking" class="cusSmile" alt="smoke" href src="http://www.skype-emoticons.com/images/emoticon-00176-smoke.gif" />');
	$('.bbedit-smileybar').append('<img title="Headbanger" class="cusSmile" alt="headbang" src="http://www.skype-emoticons.com/images/emoticon-00179-headbang.gif" />');
	$('.bbedit-smileybar').append('<img title="Mooning" class="cusSmile" alt="mooning" src="http://www.skype-emoticons.com/images/emoticon-00172-mooning.gif" />');
	$('.bbedit-smileybar').append('<img title="Squirrel" class="cusSmile" alt="squirrel" src="http://www.skype-emoticons.com/images/emoticon-00185-heidy.gif" />');
	$('.bbedit-smileybar').append('<img title="Ninja" class="cusSmile" alt="ninja" src="http://www.skype-emoticons.com/images/emoticon-00170-ninja.gif" />');
	$('.bbedit-smileybar').append('<img title="Beer" class="cusSmile" alt="beer" src="http://www.skype-emoticons.com/images/emoticon-00167-beer.gif" />');
	$('.bbedit-smileybar').append('<img title="Drink" class="cusSmile" alt="drink" src="http://www.skype-emoticons.com/images/emoticon-00168-drink.gif" />');
	$('.bbedit-smileybar').append('<img title="Cake" class="cusSmile" alt="cake" src="http://www.skype-emoticons.com/images/emoticon-00166-cake.gif" />');
	$('.bbedit-smileybar').append('<img title="Pizza" class="cusSmile" alt="pizza" src="http://www.skype-emoticons.com/images/emoticon-00163-pizza.gif" />');
	$('.bbedit-smileybar').append('<img title="Rain" class="cusSmile" alt="rain" src="http://www.skype-emoticons.com/images/emoticon-00156-rain.gif" />');
	$('.bbedit-smileybar').append('<img title="Mail" class="cusSmile" alt="mail" src="http://www.skype-emoticons.com/images/emoticon-00154-mail.gif" />');
	$('.bbedit-smileybar').append('<img title="Music" class="cusSmile" alt="music" src="http://www.skype-emoticons.com/images/emoticon-00159-music.gif" />');
	$('.bbedit-smileybar').append('<img title="Phone" class="cusSmile" alt="phone" src="http://www.skype-emoticons.com/images/emoticon-00161-phone.gif" />');
	$('.bbedit-smileybar').append('<img title="Weed" class="cusSmile" alt="weed" src="http://www.sherv.net/cm/emo/smoke/weed-4.gif" height="19px" width="19px" />');
	$('.bbedit-smileybar').append('<img title="MLP Headless" class="cusSmile" alt="mlph" src="http://fc09.deviantart.net/fs70/f/2014/251/3/8/_gift__club_can_t_handle_me__smiley__by_ricepoison-d7yhrlf.gif" height="19px" width="19px" />');
	$('.bbedit-smileybar').append('<img title="Coffee" class="cusSmile" alt="coffee" src="http://emoticoner.com/files/emoticons/skype_smileys/coffee-skype-smiley.gif" />');
	
	
jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  });
}
});

	$('.cusSmile').click(function(){ $('textarea',$(this).closest('form')).insertAtCaret( '[img width="19px" height="19px"]'+ $(this).attr('src') +'[/img]' );})
  
});