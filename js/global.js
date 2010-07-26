$('div.carousel a').live('click',
	function() {					
	var currentSpotlight = $(this).attr('rel');
	var lastSpotlight = $(this).parents().find('a.carouselItem:last').attr('rel');

	$(this).parents().find('a.carouselItem[rel='+currentSpotlight+']').addClass('current');
	$(this).parents().find('a.carouselItem[rel!='+currentSpotlight+']').removeClass('current');

	$('img.bgHeroSlide'+currentSpotlight+'').siblings('img.bgHero').fadeOut(600);
	$(this).parents().find('img.bgHeroSlide'+currentSpotlight+'').fadeIn(300);

	$('p.heroCopy'+currentSpotlight+'').siblings('p').removeClass('current').fadeOut(600);
	$(this).parents().find('p.heroCopy'+currentSpotlight+'').addClass('current').fadeIn(600);
	
	if(currentSpotlight == '1')
		$('div.right').addClass('transparent');
	if(currentSpotlight != '1')
		$('div.right').removeClass('transparent');
		
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

$('#SGM6 div.letter ul li a').live('click',
	function() {
		if($(this).parent().hasClass('selected')){
			$(this).parent().removeClass('selected');
		}
		else {
		$(this).parent().addClass('selected');
		}
});