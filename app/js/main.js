$(function () {

	var scrolled;
	window.onscroll = function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 30) {
			$(".menu").css({ "background-color": "#242121" })
			$(".menu").css({ "position": "fixed" })
			$(".menu").css({ "top": "0" })
			$(".menu__list").css({ "top": "-5px" })
		}
		if (30 > scrolled) {
			$(".menu").css({ "background-color": "transparent" })
			$(".menu").css({ "position": "absolute" })
			$(".menu").css({ "top": "30px" })
			$(".menu__list").css({ "top": "-35px" })
		}
	}

	$('.menu__icon, .menu__list a').on('click', function () {
		$('.menu').toggleClass('menu--active');
		$('.cmn-toggle-switch__htx').toggleClass('active');
	});

	$(".logo, #menu a").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.slider').slick({
		dots: true,
		autoplay: true,
		speed: 600,
		fade: true,
		easing: 'ease-in-out',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});

	var mixer = mixitup('.gallery__content');

});