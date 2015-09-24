$(function(){
	var wrap = $('#wrapper');
	$('#menu-icon').click(function(event){
		var drawer = $("aside#drawer");
		drawer.hasClass('open') ? drawer.removeClass('open') : drawer.addClass('open');
	});

	function randpos(axis){
		if(axis == 'x')
			return Math.floor(Math.random() * ($(window).height() - 0));
		else if(axis == 'y')
			return Math.floor(Math.random() * ($(window).width() - 270));
		else if(axis == 'dimen')
			return Math.floor(Math.random() * ($(window).width() / 5));
		else if(axis == 'img')
			return 1 + Math.floor(Math.random() * 6);
		else
			return 0;
	}

	function doeshit(){
		var element = '<img src="img/' + randpos('img') + '.jpg" style="position:absolute;height:' + randpos('dimen') + 'px;top:'+ randpos('x') + 'px;left:' + randpos('y') + 'px;">';
		console.debug(element);
		$(wrapper).append(element);
	}

	setInterval(doeshit, 50);
});
