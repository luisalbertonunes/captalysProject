$('.animais .tab-menu a').click(function(e){
	e.preventDefault();
	var itemId=$(this).attr('href') //pegando o valor do atributo href de onde eu cliquei
	$('.animais .tab-menu a, .animais .item').removeClass('active'); //removo a class active de todos os .tab-menu a e class item
	$(this).addClass('active'); //add no class active no que eu cliquei
	$(itemId).addClass('active'); //add no href do item que eu cliquei
});

