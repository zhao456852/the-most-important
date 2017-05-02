$('div.mag').swipeleft(function(){
	$('div.mag').hide(2000);
	$('div.mag').show(2000);
	$(function(){
		function jump(){

			$('.part1').css('background-image','url(images/image2.jpg)');
			// location.href = 'http://www.baidu.com';
		}
	setTimeout(jump,4000);
	});
});

