<template>
	<div>
		<h1>겁없는 개발자</h1>

		<article class="content">
			<h2 class="brd-left-title">About Me</h2>

			<div class="context">
				<h3>
					저는
					<div class="brd-bt-text"></div>
					개발자입니다.
				</h3>

				<ul class="mt-2">
					<li>해보고 싶으면 무엇이든 겁없이 도전하는 풀스택</li>
					<li>직관적이고 확장성 있는 코드를 추구하는</li>
					<li>자동화에 환장하는</li>
					<li>이해력과 적응력이 출중한</li>
					<li>긍정적인 마인드와 관계를 선호하는</li>
				</ul>
			</div>
		</article>

		<article class="content">
			<h2 class="brd-left-title">Contact</h2>

			<div class="context">
				<table>
					<tbody>
						<tr>
							<td class="th"><strong>Phone</strong></td>
							<td>
								<a href="tel:010-2238-9974">010-2238-9974</a>
							</td>
						</tr>
						<tr>
							<td class="th"><strong>Email</strong></td>
							<td>
								<a href="mailto:noh5524@gmail.com">tmdals9974@gmail.com</a>
							</td>
						</tr>
						<tr>
							<td class="th"><strong>Blog</strong></td>
							<td>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://tmdals9974.github.io/TIL/"
									>https://tmdals9974.github.io/TIL/</a
								>
							</td>
						</tr>
						<tr>
							<td class="th"><strong>Github</strong></td>
							<td>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/tmdals9974"
									>https://github.com/tmdals9974</a
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</article>

		<article class="content">
			<h2 class="brd-left-title">Experiences</h2>

			<div class="context">
				<h3 class="sub-title">인피니텀(주)</h3>
				<span class="ml-1"> 2021.02.15 ~ </span>

				<div class="project-container">
					<div class="project">
						<div class="title">픽셀로 프로젝트</div>
						<div class="item">
							<div class="sub-title">픽셀로 관리자 페이지 개발</div>
							<div class="period">2021.02 ~ 2021.05</div>
							<div class="skils">
								<div class="skill-tag">javascript</div>
								<div class="skill-tag">node.js</div>
								<div class="skill-tag">react</div>
								<div class="skill-tag">graphQL</div>
								<div class="skill-tag">apollo</div>
								<div class="skill-tag">express</div>
								<div class="skill-tag">prisma</div>
								<div class="skill-tag">mariaDB</div>
							</div>
						</div>
					</div>

					<div class="project">
						<div class="title">보훈자격조회 시스템</div>
						<div class="item">
							<div class="sub-title">보훈공단의 보훈자격조회 시스템 개발</div>
							<div class="period">2021.05 ~ 2021.07</div>
							<div class="skils">
								<div class="skill-tag">c#</div>
								<div class="skill-tag">WPF</div>
								<div class="skill-tag">xaml</div>
								<div class="skill-tag">java</div>
								<div class="skill-tag">egovframework</div>
								<div class="skill-tag">oracle</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {};
</script>

<style>
.brd-left-title {
	font-family: "RixYeoljeongdo_Regular";
	border-left: 12px solid #4c9ccc;
	border-bottom: none;
	padding-left: 12px;
	padding-bottom: 0;
}

.brd-bt-text {
	display: inline-block;
	width: 70px;
	border-bottom: 1px solid #4c9ccc;
	position: relative;
	top: 5px;
}

.content {
	padding-top: 20px;
}

.context {
	padding: 18px 0;
	margin-left: 24px;
}

.context > .sub-title {
	font-family: 'Cafe24Ssurround';
}

.context h3 {
	display: inline-block;
	margin: 0 auto;
}

.context ul {
	padding: 0 0 0 40px;
	margin-bottom: 0;
}

.mt-2 {
	margin-top: 2rem;
}

.ml-1 {
	margin-left: 1rem;
}

table {
	margin: 0 auto;
	padding: 0 auto;
	line-height: 1.625rem;
	display: table;
	width: 100%;
	border-color: #e0e0e0;
}

tbody {
	display: table-row-group;
	vertical-align: middle;
	border-color: inherit;
}

tr {
	background-color: white !important;
}

td {
	border-left: none;
	border-right: none;
}

td.th {
	text-align: right;
	border-right: 1px solid #e0e0e0;
}

.project-container {
	margin-left: 24px;
}

.project {
	margin: 30px 0;
}

.project > .title {
	font-size: 1.25rem;
	font-weight: bold;
}

.project > .item {
	margin-top: 20px;
}

.project > .item > *:not(.skils) {
	margin-top : 8px;
}

.project > .item > *::before {
	margin: 0 10px;
	content: '-';
}

.skill-tag {
	background: #4c9ccc;
	display: inline-block;
	color: white;
	padding: 0px 8px;
	margin-top: 8px;
	border-radius: 8px;
	height: 25px;
	line-height: 25px;
}
</style>