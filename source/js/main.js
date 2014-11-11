$(document).ready(function(){
	
	$(".button-nav-toggle").click(function(){
		$(".main").toggleClass("open");
		$(".menu").toggleClass("open");
	});

	$(".main").click(function(){
		var mainOffset = $(this).css("right").replace('px', '');
		if (mainOffset > 0) {
			$(".main").removeClass("open");
			$(".menu").removeClass("open");
		};
	});

	$(".nav-main li:has(ul)").addClass("has-sub-nav").prepend("<div class=\"sub-toggle\"></div>")

});