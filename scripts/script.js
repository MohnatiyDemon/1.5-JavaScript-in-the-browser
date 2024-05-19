import Swiper from 'swiper'
import 'swiper/css'

console.log('is ok')
const swiper = new Swiper('.swiper', {
	//! Основные настройки
	direction: 'horizontal', // 'vertical', 'horizontal'
	loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
	speed: 500, // скорость переключения слайдов
	effect: 'slider', // cards, coverflow, flip, fade, cube
	// initialSlide: 2, // Начинаем со 2 слайдера
	// freeMode: true, // можно перетаскивать как ленту
	slidesPerView: 1, // кол-во активных слайдов
	centeredSlides: true, // центрирование слайдов

	//! Пагинация (точки)
	pagination: {
		el: '.swiper-pagination',
		clickable: true, // true - Пагинация становится кликабельной
	},
	//! Автоматическое перелистывание
	// autoplay: {
	//     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
	// },

	// 	breakpoints: {
	// 		1251: {
	// 				spaceBetween: 20,
	// 				slidesPerView: 3,
	// 		},

	// 		951: {
	// 				spaceBetween: 20,
	// 				slidesPerView: 2,
	// 		},

	// 		0: {
	// 				spaceBetween: 0,
	// 				slidesPerView: 1,
	// 		},
	// },
})
