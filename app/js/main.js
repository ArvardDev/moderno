$(function(){

	var mixer = mixitup('.products__inner-box');
	
	
	// Плавный скролл по странице
	$(".header__nav, .header__content, .action__inner, .back-to-top__link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// Кнопка Наверх
	function backToTop() {
		let button = $('.back-to-top__link');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 500) {
				button.fadeIn();
			} else {
				button.fadeOut();
			}
		});

		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({scrollTop: 0}, 1000)
		})
	};
	backToTop();


})