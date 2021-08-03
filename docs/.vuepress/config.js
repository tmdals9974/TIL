module.exports = {
	title: 'TIL_SM',
	description: 'Today SeungMin Learned',
	base: '/TIL/',
	head: [['link', { rel: 'icon', href: '/logo.ico' }]],
	themeConfig: {
		logo: '/logo.png', // 로고 이미지
		nav: [
			{ text: 'GitHub', link: 'https://github.com/tmdals9974/' }
		],
		sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
	}
};