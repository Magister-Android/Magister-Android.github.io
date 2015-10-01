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

	function randpos(axis){
		if(axis == 'x')
			return Math.floor(Math.random() * ($(window).height() - 0));
		else if(axis == 'y')
			return Math.floor(Math.random() * ($(window).width() - 270));
		else if(axis == 'dimen')
			return Math.floor(Math.random() * ($(window).width() / 5));
		else if(axis == 'img')
			return 1 + Math.floor(Math.random() * 4);
		else
			return 0;
	}

	function doeshit(){
		var element = '<img src="img/' + randpos('img') + '.jpg" style="position:absolute;height:' + randpos('dimen') + 'px;top:'+ randpos('x') + 'px;left:' + randpos('y') + 'px;">';
		console.debug(element);
		$(wrapper).append(element);
	}

	var interval = setInterval(doeshit, 50); // dit zodat ik em kan stoppen in console om de site te bekijken lol
	var running = true;
	
	$(document).on("keypress", function (e)
	{
		if (! e.which == 80) return;
		
		if (running)
		{
			clearInterval(interval);
			$("#wrapper img").remove();
		}
		
		else
		{
			interval = setInterval(doeshit, 50);
		}
	});
});
