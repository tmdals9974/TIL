<template>
	<div>
		<h1>Notify Test</h1>
		<input type="text" name="" id="notiTitle" v-model="title" />
		<input type="text" name="" id="notiMessage" v-model="message" />
		<button @click="notify()">notify</button>
	</div>
</template>

<script>
import logo from "../public/logo.png";

export default {
	data() {
		return {
			title: "타이틀 테스트",
			message: "메시지",
		};
	},
	// created() {
	// 	navigator.serviceWorker
	// 		.register("../sw.js")
	// 		.then(function (registration) {
	// 			console.log("Service worker successfully registered.");
	// 			return registration;
	// 		})
	// 		.catch(function (err) {
	// 			console.error("Unable to register service worker.", err);
	// 		});
	// },
	methods: {
		notify() {
			var noti = new Notification(this.title, {
				body: this.message,
				icon: logo,
				// actions: [
				// 	{
				// 		action: "move",
				// 		title: "바로 보러 가기",
				// 		icon: "/TIL/logo.png",
				// 	},
				// ],
			});
			noti.onclick = (event) => {
				event.preventDefault(); // prevent the browser from focusing the Notification's tab
				window.open("http://localhost:8080/TIL/Test/notify.html", "_blank");
			};
		},
		// notify() {
		// 	if (this.getNotificationPermission())
		// 		navigator.serviceWorker.ready.then(function (registration) {
		// 			registration.showNotification('타이틀', {
		// 				body: '메시지',
		// 				icon: logo,
		// 				actions: [
		// 					{
		// 						action: "goTab",
		// 						title: "화면활성화",
		// 						icon: "/TIL/logo.png",
		// 					},
		// 					{
		// 						action: "move",
		// 						title: "바로 보러 가기",
		// 						icon: "/TIL/logo.png",
		// 					},
		// 				],
		// 			});
		// 		});
		// },
		getNotificationPermission() {
			if (!"Notification" in window) {
				alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
			}

			Notification.requestPermission((result) => {
				if (result === "denied") {
					alert(
						"알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다."
					);
					return false;
				}
			});

			return true;
		},
		// showNotify() {
		// 	const notification = new Notification();
		// 	setTimeout(() => {
		// 		notification.close();
		// 	}, 3000);
		// },
	},
};
</script>