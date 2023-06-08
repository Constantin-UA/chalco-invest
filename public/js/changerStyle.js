(() => {
	/* 	const styleNews = document.createElement('link');
	styleNews.rel = 'stylesheet';
	styleNews.href = 'https://chalco-invest.com/public/css/changerStyle.css';
	document.head.appendChild(styleNews); */

	const dollars = document.querySelectorAll('.fa-dollar-sign');
	const contentWrapperBG = document.querySelector('#content-wrapper');
	if (dollars) {
		dollars.forEach((item) => {
			item.classList.remove('text-warning');
			item.classList.remove('text-primary');
		});
	}
	if (contentWrapperBG) {
		contentWrapperBG.classList.add('wrapper-bg');
	}
	//add container-fluid
	const content = document.querySelector('#content');
	const cards = document.querySelectorAll('div#content > div.card');

	const newContainer = document.createElement('div');
	newContainer.classList.add('container-fluid');
	cards.forEach((card) => newContainer.appendChild(card));
	content.appendChild(newContainer);

	//change iframe string url
	function srcGraficChanger(url = '') {
		const pattern = /\blight\b/g;
		const replacement = 'dark';
		const newString = url.replace(pattern, replacement);
		return newString;
	}
	//grafic change to dark
	const grafics = document.querySelectorAll('iframe');
	grafics.forEach((grafic, idx) => {
		switch (idx) {
			case 0:
				grafic.style = 'border-radius: 4px; width: 100% !important; height: 100%;';
				srcGraficChanger(grafic.src);
				break;
			case 1:
				grafic.style = 'border-radius: 4px; width: 100% !important; height: 100%;';
				break;
			case 2:
				grafic.style = 'height: 50px';
				break;
			default:
				break;
		}
	});
})();
