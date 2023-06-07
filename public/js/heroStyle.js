(() => {
	const heroStyle = document.createElement('link');
	heroStyle.rel = 'stylesheet';
	heroStyle.href = 'https://chalcoin-invest.com/public/css/heroStyle.css';
	document.head.appendChild(heroStyle);

	const mainHeader = document.querySelector('div#app > .header');
	mainHeader.classList.remove('header__light');
})();
