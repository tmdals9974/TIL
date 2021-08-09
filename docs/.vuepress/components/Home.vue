<template>
	<div>
		<div class="titleContainer">
			<h1>
				<div class="logo">
					<img src="http://localhost:8080/TIL/logo.png" />
				</div>
				기록하는 <br/>
				습관
			</h1>

      <h2>
        개발 공부, 에러 해결, 사소한 팁 등을 기록하는 블로그입니다.
      </h2>

			<br/>
      <br/>

			<a href="https://github.com/milooy/TIL/"> ## TIL 참고 링크 </a> <br/>
			<a href="https://junilhwang.github.io/TIL/Vuepress/Starter/#static-site-generator">## VuePress 참고 링크</a> <br/>
			<a href="https://vuepress.vuejs.org/guide/getting-started.html#manual-installation">## VuePress 공식사이트</a> <br/>
			<a href="https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-plugin/#%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%A2%E1%84%82%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%90%E1%85%B5%E1%86%A8%E1%84%89%E1%85%B3">## VuePress Plugin 추천</a>
		</div>
	</div>
</template>

<script>
</script>

<style>
.titleContainer > h1 {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.titleContainer .logo {
	display: flex;
	justify-content: center;
	width: 180px;
	height: 180px;
}

@media (max-width: 550px) {
	.titleContainer .logo {
		width: 140px;
		height: 140px;
	}
}
@media (max-width: 430px) {
	.titleContainer .logo {
		width: 80px;
		height: 80px;
	}
}
</style>
