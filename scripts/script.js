const widthMediaQuery = window.matchMedia(
	'(width >= 768px) and (width < 1120px)'
)
const widthMediaQueryDesktop = window.matchMedia('(min-width: 1120px)')
const swiper = document.querySelector('.swiper')
const readMore = document.querySelector('.read-more')
const readMoreButton = readMore.querySelector('.read-more__button')
const readMoreText = readMore.querySelector('.read-more__text')
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

swiperInit()

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

readMore.addEventListener('click', () => {
	readMoreButton.classList.toggle('read-more__button--active')
	readMoreText.classList.toggle('read-more__text--active')
	let countIteration = widthMediaQueryDesktop.matches ? 8 : 6
	for (let i = countIteration; i < swiperSlide.length; i++) {
		swiperSlide[i].classList.toggle('hidden')
	}
})
