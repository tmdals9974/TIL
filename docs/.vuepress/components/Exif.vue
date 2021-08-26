<template>
	<div>
		<h1>Exif Test</h1>
		<img id="catImg" src="tmdals9974.github.io/TIL/cat.jpg" class="img-border" alt="은하">
		<!-- <img id="catImg" src="/cat.jpg" class="img-border" alt="은하" /> -->
		<h4 id="exifContent"></h4>
	</div>
</template>

<script>
export default {
	mounted() {
		let recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/exif-js");
		document.head.appendChild(recaptchaScript);

		setTimeout(() => {
			let script = document.createElement("script");
			script.text = `
            var imgElem = document.getElementById("catImg");
            imgElem.exifdata = null; // 같은 페이지 안에서 이미지가 바뀌는 경우 이전의 메타데이터 정보를 지워주어야 함.
            EXIF.getData(imgElem, function() {
                var allMetaData = EXIF.getAllTags(this); //모든 EXIF정보
                document.getElementById("exifContent").innerText = JSON.stringify(allMetaData, null, "\t");
            });
        `;
			document.head.appendChild(script);
		}, 1000);
	},
};
</script>

<style>
</style>