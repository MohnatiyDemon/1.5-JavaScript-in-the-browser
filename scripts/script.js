swiperInit()

const widthMediaQuery = window.matchMedia(
	'(width >= 768px) and (width < 1102px)'
)
const widthMediaQueryDesktop = window.matchMedia('(min-width: 1102px)')
const swiper = document.querySelector('.swiper')
const readMore = document.querySelector('.read-more')
const readMoreButton = readMore.querySelector('.read-more__button')
const swiperSlide = document.querySelectorAll('.swiper-slide')
const hiddenClass = document.querySelector('.hidden')

function swiperInit() {
	const swiper = new Swiper('.swiper', {
		breakpoints: {
			0: {
				enabled: true,
				freeMode: true,
				slidesPerView: 'auto',
				breakpointsBase: 'container',
				spaceBetween: 0,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			},
			768: {
				enabled: false,
			},
		},
	})
}

widthMediaQuery.addEventListener('change', () => {
	if (!widthMediaQuery.matches) {
		swiperInit()
	}
})

widthMediaQueryDesktop.addEventListener(
	'change',
	(checkMedia = () => {
		if (widthMediaQuery.matches) {
			for (let i = 6; i < swiperSlide.length; i++) {
				swiperSlide[i].classList.add('hidden')
			}
		}
		if (widthMediaQueryDesktop.matches) {
			for (let i = 6; i < 8; i++) {
				swiperSlide[i].classList.remove('hidden')
			}
			for (let i = 8; i < swiperSlide.length; i++) {
				swiperSlide[i].classList.add('hidden')
			}
		}
	})
)

checkMedia()

readMoreButton.addEventListener('click', () => {
	readMoreButton.classList.toggle('read-more__button--active')
	checkContains()
	checkCountInterations()
})

function checkCountInterations() {
	let countIteration = widthMediaQueryDesktop.matches ? 8 : 6
	for (let i = countIteration; i < swiperSlide.length; i++) {
		swiperSlide[i].classList.toggle('hidden')
	}
}
function checkContains() {
	const haveActiveClass = document.querySelector('.read-more__button--active')
	readMore.contains(haveActiveClass)
		? (readMoreButton.textContent = 'Скрыть')
		: (readMoreButton.textContent = 'Показать все')
}
