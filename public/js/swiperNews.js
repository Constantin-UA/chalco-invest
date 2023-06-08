'use strict';
const newsData = [
	{
		subtitle: 'ИНФОРМАЦИЯ',
		title: 'ALUMINUM CORPORATION OF CHINA:',
		description: 'знакомство с алюминиевым гигантом.',
		imageUrl: 'main/img/news/news1.png',
		linkTo:
			'https://bcs-express.ru/novosti-i-analitika/aluminum-corporation-of-china-derzhim-aktsii',
	},
	{
		subtitle: 'ЭКОНОМИКА',
		title: 'Дивиденды Chalco:',
		description: 'одно из самых ожидаемых событий на российском рынке.',
		imageUrl: 'main/img/news/news2.png',
		linkTo: 'https://www.chalco.com.cn',
	},
	{
		subtitle: 'ИНФОРМАЦИЯ',
		title: 'Поставки российской нефти в КНР выросли в январе-апреле на 26,5%.',
		description: '',
		imageUrl: '/main/img/news/news3.png',
		linkTo: 'https://www.chalco.com.cn/en/',
	},
	{
		subtitle: 'ЭКОНОМИКА',
		title: 'Мнение аналитиков.',
		description: 'Нефтепереработка в РФ снизилась на 6%.',
		imageUrl: '/main/img/news/news4.png',
		linkTo:
			'https://bcs-express.ru/novosti-i-analitika/mnenie-analitikov-neftepererabotka-v-rf-snizilas-na-6',
	},
	{
		subtitle: 'АНАЛИТИКА',
		title: 'Ход торгов.',
		description: 'Индекс МосБиржи не хочет отступать.',
		imageUrl: '/main/img/news/news5.png',
		linkTo:
			'https://bcs-express.ru/novosti-i-analitika/2023815390-khod-torgov-indeks-mosbirzhi-ne-khochet-otstupat',
	},
	{
		subtitle: 'ЭКОНОМИКА',
		title: 'The Guardian:',
		description: 'Китай запустил проект по бурению одной из глубочайших шахт в мире.',
		imageUrl: '/main/img/news/news6.png',
		linkTo:
			'https://news-24.ru/2023/06/08/the-guardian-kitaj-zapustil-proekt-po-bureniju-odnoj-iz-glubochajshih-shaht-v-mire/?utm_source=yxnews&utm_medium=desktop',
	},
	{
		subtitle: 'ЭКОНОМИКА',
		title: 'Новак:',
		description: 'Значительная часть расчетов РФ по энергоресурсам идет в рублях, юанях и рупиях.',
		imageUrl: '/main/img/news/news7.png',
		linkTo: 'https://tass.ru/ekonomika/17963559?utm_source=yxnews&utm_medium=desktop',
	},
];
function createCard(item) {
	const card = document.createElement('div');
	card.classList.add('swiper-slide');
	card.innerHTML = `
	<div class="news__card">
	<div class="news__card_Up">
	<div class="news__card_Up-subtitle">${item.subtitle}</div>
	<div class="news__card_Up-title">${item.title}</div>
	<div class="news__card_Up-description">${item.description}</div>
	</div>
	<div class="news__card_Down">
				<a href=${item.linkTo} target="_blank" rel="noopener noreferrer" class="news__card_Down-button">
				УЗНАТЬ БОЛЬШЕ
				</a>
				<div class="news__card_Down-img-box">
				<img src=${item.imageUrl} alt="news" class="news__card_Down-image" />
				</div>
				</div>
		</div>
				`;
	return card;
}
//add style and scripts
/* const styleNews = document.createElement('link');
styleNews.rel = 'stylesheet';
styleNews.href = 'public/css/swiperNews.css';
document.head.appendChild(styleNews); */

const styleSwiper = document.createElement('link');
styleSwiper.rel = 'stylesheet';
styleSwiper.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
document.head.appendChild(styleSwiper);

const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';
swiperScript.setAttribute('defer', '');
document.head.appendChild(swiperScript);

window.onload = function () {
	const startSection = document.querySelector('.section__start');
	if (startSection) {
		//section create
		const sectionNews = document.createElement('section');
		sectionNews.classList.add('section__news');

		//create container
		const container = document.createElement('div');
		container.classList.add('container');

		//create title
		const newsTitle = document.createElement('h2');
		newsTitle.classList.add('news__title');
		newsTitle.classList.add('sectitle');
		newsTitle.textContent = 'Новости';

		//create news-slider swiper
		const newsSlider = document.createElement('div');
		newsSlider.classList.add('news-slider');
		newsSlider.classList.add('swiper');

		/* 		//create pagination
		const sliderPagination = document.createElement('div');
		sliderPagination.classList.add('swiper-pagination');
		newsSlider.appendChild(sliderPagination); */

		//create swiper-wrapper
		const swiperWrapper = document.createElement('div');
		swiperWrapper.classList.add('swiper-wrapper');
		newsSlider.appendChild(swiperWrapper);

		//create cards
		newsData.forEach((item) => swiperWrapper.appendChild(createCard(item)));
		sectionNews.appendChild(container);
		container.appendChild(newsTitle);
		container.appendChild(newsSlider);
		const parentNode = startSection.parentNode;
		parentNode.insertBefore(sectionNews, startSection);
	}

	const swiper = new Swiper('.news-slider', {
		// Optional parameters
		direction: 'horizontal',
		speed: 800,
		autoHeight: true,
		slidesPerGroup: 1,
		centeredSlides: false,
		initialSlide: 1,
		loop: false,
		freeMode: true,
		autoplay: {
			delay: 5000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		breakpoints: {
			'@0.75': {
				slidesPerView: 1,
			},
			'@1.00': {
				slidesPerView: 2,
			},
			'@1.5': {
				slidesPerView: 4,
			},
		},
		observer: true,
		observerParents: true,
		observeSlideChildren: true,
	});
};
