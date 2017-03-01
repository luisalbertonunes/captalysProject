//botao mobile
$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
});

//scroll suave menu
$('.navbar-animate a[href^="#"]').click(function(e){
	e.preventDefault();
	
	var id = $(this).attr('href'),
		menuHeight = $('.navbar-animate').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


// Scroll suave para o topo
$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});

$(window).scroll(function() {
	var windowTop = $(this).scrollTop();
	$('.anime').each(function(){
		if(windowTop > $(this).offset().top - 400) {
			$(this).addClass('anime-init');
		}
	});
});