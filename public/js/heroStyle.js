'use strict';
(() => {
	/* 	const heroStyle = document.createElement('link');
	heroStyle.rel = 'stylesheet';
	heroStyle.href = 'https://chalcoin-invest.com/public/css/heroStyle.css';
	document.head.appendChild(heroStyle); */

	const mainHeader = document.querySelector('div#app > .header');
	mainHeader.classList.remove('header__light');

	const priceContainer = document.querySelector('div.wrapper > .section__price > .container');
	const priceList = document.querySelector(
		'div.wrapper > .section__price > .container > .price__list'
	);
	const priceTitle = document.createElement('div');
	priceTitle.classList.add('sectitle');
	priceTitle.style = 'text-align: center';
	priceTitle.textContent = 'Предложения';
	priceContainer.insertBefore(priceTitle, priceList);

	const aboutGrafic = document.querySelector(
		'div#app > .wrapper > section.section__about > div.container > div.sectitle__cont > iframe'
	);
	aboutGrafic.classList.add('neon_shadow');
})();
