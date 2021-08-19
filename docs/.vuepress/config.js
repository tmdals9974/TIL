const sidebar = require('./util');

module.exports = {
	title: 'TIL_SM',
	description: 'Today SeungMin Learned',
	base: '/TIL/',
	head: [
		['link', { rel: 'icon', href: '/logo.ico' }],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'GbGQneKOnByqTIUEpu8LVOYCCxpI0z364sCucHicItw'
			}
		]
	],
	themeConfig: {
		logo: '/logo.png', // 로고 이미지
		nav: [
			{ text: 'GitHub', link: 'https://github.com/tmdals9974/' },
			{ text: 'About', link: '/about/' }
		],
		smoothScroll: true,
		lastUpdated: true,
		sidebar
	},
	plugins: [
		'@vuepress/back-to-top',
		[
			'@vuepress/google-analytics',
			{
				ga: 'G-1V2CF4MMB5'
			}
		]
	]
};
