$('div.carousel a').live('click',
	function() {					
	var currentSpotlight = $(this).attr('rel');
	var lastSpotlight = $(this).parents().find('a.carouselItem:last').attr('rel');

	$(this).parents().find('a.carouselItem[rel='+currentSpotlight+']').addClass('current');
	$(this).parents().find('a.carouselItem[rel!='+currentSpotlight+']').removeClass('current');

	$('img.bgHeroSlide'+currentSpotlight+'').siblings('img.bgHero').fadeOut(600);
	$(this).parents().find('img.bgHeroSlide'+currentSpotlight+'').fadeIn(300);

	$('img.heroLeftOverlay'+currentSpotlight+'').siblings().removeClass('current').fadeOut(300);
	$(this).parents().find('img.heroLeftOverlay'+currentSpotlight+'').fadeIn(300);

	$('p.heroCopy'+currentSpotlight+'').siblings('p').removeClass('current').fadeOut(600);
	$(this).parents().find('p.heroCopy'+currentSpotlight+'').addClass('current').fadeIn(600);	
	
	// change the next/prev				
	var prev = 1;
	var next = 1;
	if(currentSpotlight == lastSpotlight)
		next = -lastSpotlight+1;
	if(currentSpotlight == '1')
		prev = -lastSpotlight+1;
		
	$(this).parents().find('a.prev').attr('rel', parseInt(currentSpotlight)-prev);					
	$(this).parents().find('a.next').attr('rel', parseInt(currentSpotlight)+next);				
});