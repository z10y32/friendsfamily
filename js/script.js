$(document).ready(function () {
	$(".menu__link").click(function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top,
			},
			350,
			"linear"
		);
	});

	$(".about-slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		initialSlide: 0,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		draggable: false,
		swipe: false,
		rows: 1,
		slidesPerRow: 1,
		fade: true,
	});

	$(".about-content__popup-open").click(function () {
		$(".popup-overlay, .popup-content").addClass("popup--active");
	});

	$(".popup-overlay, .popup-content__close").click(function () {
		$(".popup-overlay, .popup-content").removeClass("popup--active");
	});
});
