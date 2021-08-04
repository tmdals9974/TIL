const sidebar = require('./util');

module.exports = {
	title: 'TIL_SM',
	description: 'Today SeungMin Learned',
	base: '/TIL/',
	head: [['link', { rel: 'icon', href: '/logo.ico' }]],
	themeConfig: {
		logo: '/logo.png', // 로고 이미지
		nav: [
			{ text: 'GitHub', link: 'https://github.com/tmdals9974/' },
			{ text: 'About Me', link: '/about/' }
		],
		smoothScroll: true,
		lastUpdated: true,
		sidebar
	}
};
