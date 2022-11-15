
$(window).on("load", function() {
	
	$('.loading').delay(260).fadeTo(300,0,function() {$(this).hide();});
	
	//hover function
	$( "[hov]" ).hover(function(){$(this).stop().fadeTo(100,$(this).attr('hov'));},function(){$(this).stop().fadeTo(100,1)});
	$( "[voh]" ).each(function(){
		voh = $(this).attr('voh');
		$(this).css('opacity',voh);
		})
	$( "[voh]" ).hover(function(){$(this).stop().fadeTo(100,1)},function(){$(this).stop().fadeTo(100,$(this).attr('voh'));});
	
	//init wow
	AOS.init();
	new WOW().init();

	//menu
	$('.nav').nav({
		slideSpeed: 150
	});


	//index header scroll
	function ScrollYellow(){

		var sticky = $('.index header'),
			scroll = $(window).scrollTop();
		if (scroll >= 240) sticky.addClass('index-header-y');
		else sticky.removeClass('index-header-y');

	}

	ScrollYellow();

	$(window).scroll(function(){
		ScrollYellow();
	});

	//anchor
	$( "a.anchor" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-80 }, 750);
	}); 


});
