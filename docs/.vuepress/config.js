module.exports = {
	title: 'TIL_SM',
	description: 'Today SeungMin Learned',
	base: '/TIL/',
	head: [['link', { rel: 'icon', href: '/logo.ico' }]],
	themeConfig: {
		logo: '/logo.png', // 로고 이미지
		nav: [{ text: 'GitHub', link: 'https://github.com/tmdals9974/' }],
		sidebar: [
			{
				title: 'FrontEnd',
				children: [
					{
						title: 'Vue',
						children: ['FrontEnd/Vue/vue-sync', 'FrontEnd/Vue/vuetify', 'FrontEnd/Vue/vuepress']
					},	
					{
						title: 'Webpack',
						children: ['FrontEnd/Webpack/webpack']
					},
				],
				initialOpenGroupIndex: -1
			},
			{
				title: 'Backend',
				children: [
					{
						title: 'Node.js',
						children: [
							{
								title: 'Express',
								children: [
									'Backend/Node.js/Express/express',
									'Backend/Node.js/Express/express-deploy'
								]
							},
							{
								title: 'Multer',
								children: ['Backend/Node.js/Multer/multer']
							},
							{
								title: 'PM2',
								children: ['Backend/Node.js/PM2/pm2']
							}
						]
					},
					{
						title: 'Spring',
						children: ['Backend/Spring/Spring']
					}
				],
				initialOpenGroupIndex: -1
			},
			{
				title: 'DevOps',
				children: [
					{
						title: 'AWS',
						children: ['DevOps/AWS/ec2', 'DevOps/AWS/rds']
					},
					{
						title: 'Docker',
						children: ['DevOps/Docker/docker-compose', 'DevOps/Docker/docker-start', 'DevOps/Docker/docker']
					},
					{
						title: 'GithubActions',
						children: ['DevOps/GithubActions/github-actions-start', 'DevOps/GithubActions/github-actions']
					},
				],
				initialOpenGroupIndex: -1
			}
		]
	}
};
