jQuery(document).ready(function($) {
	var introHeight = $('.introduction').height() / 2;
	var chevron = $('i.chevron');

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();

		if(scrollTop > introHeight) {
			return;
		}

		var opacity = 1 - (scrollTop / introHeight);
		console.log(opacity);

		if(scrollTop < introHeight) {
			chevron.css("opacity", opacity);
		}
	});
});