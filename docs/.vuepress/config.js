const sidebar = require('./util');

module.exports = {
	title: 'TIL_SM',
	description: 'Today SeungMin Learned',
	base: '/TIL/',
	locales: {
		'/': { lang: 'ko-KR' }
	},
	head: [
		['link', { rel: 'icon', href: '/logo.ico' }],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'GbGQneKOnByqTIUEpu8LVOYCCxpI0z364sCucHicItw'
			}
		],
		[
			'script',
			{
				async: true,
				src: 'https://www.googletagmanager.com/gtag/js?id=G-1V2CF4MMB5'
			}
		],
		[
			'script',
			{},
			[
				"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1V2CF4MMB5');"
			]
		]
	],
	themeConfig: {
		logo: '/logo.png', // 로고 이미지
		nav: [
			{ text: 'GitHub', link: 'https://github.com/tmdals9974/' },
			{ text: 'About', link: '/about/' }
		],
		smoothScroll: true,
		// lastUpdated: true,
		sidebar
	},
	plugins: [
		'@vuepress/back-to-top',
		['sitemap', { hostname: 'https://tmdals9974.github.io/TIL/' }]
	]
};
