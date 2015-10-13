$(function(){
	var wrap = $('#wrapper');
	var drawer = $("aside#drawer");

	$('#menu-icon').click(function(event){
		drawer.toggleClass('open');
	});

	$(window).on('click', function (e)
	{
		var element = e.toElement;

		if (drawer.hasClass('open'))
		{
			if ($('#menu-icon').is(element) || drawer.get(0).contains(element)) return true; // als dit werkt de 1e keer.. lmao

			else if (typeof element.onclick == 'function')
			{
				element.onclick.apply(element);
				return false; // fixt zodat drawer niet sluit bij event handlers..
			}

			else if (element.nodeName == 'A')
			{
				if (element.getAttribute('href') !== '#') return true;
			}

			drawer.removeClass('open');

			return true;
		}
	});

	$("#menu-icon").click(function() {
		if($(this).css("transform") == 'none') $(this).css("transform", "rotate(360deg)");
		else $(this).css("transform", "");
	});

	var imgs = $('#slider .sliderimg');
	var i = 0;

	var count = imgs.length - 1;

	window.setInterval(function () {
		
		$(imgs[i++]).toggleClass('shown');
		$(imgs[i]).toggleClass('shown');

		i = i % count;

	}, 2000);



});
