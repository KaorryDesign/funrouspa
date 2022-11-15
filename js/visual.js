jQuery(document).ready(function($){ 

	//index visual slick
	$(".sec1-slider").slick({
		dots: false,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed:2400,
		speed:400,
		respondTo : 'window',
		mobileFirst:true,
		pauseOnHover:false,
		pauseOnFocus: false, 
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					autoplaySpeed:2400,
					pauseOnFocus: false, 
					speed:400
				}
			},

			{
				breakpoint: 768,
				settings: {
					autoplaySpeed:2400,
					pauseOnFocus: false, 
					speed:400
				}
			}
		]
	});

});