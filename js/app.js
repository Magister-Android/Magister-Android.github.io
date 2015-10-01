$(function(){
	var wrap = $('#wrapper');
	$('#menu-icon').click(function(event){
		var drawer = $("aside#drawer");
		drawer.toggleClass('open');
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
		if (! e.which == 80 return;
		
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
