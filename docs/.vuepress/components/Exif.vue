<template>
	<div>
		<h1>Exif Test</h1>

		<h2>이미지 메타데이터 조회</h2>

		<h3>이미지를 업로드하시면 해당 이미지의 메타데이터가 출력됩니다.</h3>
		<h5>* 업로드한 이미지는 저장하지 않습니다.</h5>

		<input type="file" id="imgUpload" @change="getEXIF()" accept="image/*" />
		
		<img id="img" src="" alt="">

		<h4 id="imageDescription"></h4>
		<h4 id="exifContent"></h4>
	</div>
</template>

<script>
export default {
	methods: {
		getEXIF() {
			if (document.getElementById("exifScript"))
				document.head.removeChild(document.getElementById("exifScript"));

			let script = document.createElement("script");
			script.id = "exifScript";
			script.text = `
				var img = document.getElementById("imgUpload").files[0];
				window.exifr.parse(img).then(exif => {
					document.getElementById("imageDescription").innerText = '설명 : ' + exif.ImageDescription;
					document.getElementById("exifContent").innerText = JSON.stringify(exif, null, "\t");
				});
				window.exifr.thumbnailUrl(img).then(url => {
					document.getElementById("img").src = url;
				})
				
			`;
			document.head.appendChild(script);
		},
	},
	beforeMount() {
		let recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute(
			"src",
			"https://cdn.jsdelivr.net/npm/exifr/dist/lite.umd.js"
		);
		document.head.appendChild(recaptchaScript);
	},
	remove() {
		// imgElem.exifdata = null; // 같은 페이지 안에서 이미지가 바뀌는 경우 이전의 메타데이터 정보를 지워주어야 함.
		// 		EXIF.getData(imgElem, function() {
		// 			var allMetaData = EXIF.getAllTags(this); //모든 EXIF정보
		// 			document.getElementById("exifContent").innerText = JSON.stringify(allMetaData, null, "\t");
		// 			console.dir(allMetaData);
		// 		});
	},
};
</script>

<style>
</style>