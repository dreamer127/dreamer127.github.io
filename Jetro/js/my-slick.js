 $('.js-slider-for').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	asNavFor: '.js-slider-nav',
 	autoplay: true
 });
 $('.js-slider-nav').slick({
 	slidesToShow: 6,
 	slidesToScroll: 1,
 	asNavFor: '.js-slider-for',
 	arrows: false,
 	focusOnSelect: true
 });
