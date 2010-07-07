$('div.carousel a').live('click',
	function() {					
	var currentSpotlight = $(this).attr('rel');
	var lastSpotlight = $(this).parents().find('a.carouselItem:last').attr('rel');

	$(this).parents().find('a.carouselItem[rel='+$(this).attr('rel')+']').addClass('current');
	$(this).parents().find('a.carouselItem[rel!='+$(this).attr('rel')+']').removeClass('current');


	$('img.bgHeroSlide'+currentSpotlight+'').siblings('img.bgHero').fadeOut(600);
	$(this).parents().find('img.bgHeroSlide'+$(this).attr('rel')+'').fadeIn(300);

	$('img.heroLeftOverlay'+currentSpotlight+'').siblings().removeClass('current').fadeOut(300);
	$(this).parents().find('img.heroLeftOverlay'+$(this).attr('rel')+'').fadeIn(30);

	$('p.heroCopy'+currentSpotlight+'').siblings('p').removeClass('current').fadeOut(600);
	$(this).parents().find('p.heroCopy'+$(this).attr('rel')+'').addClass('current').fadeIn(600);	
	
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