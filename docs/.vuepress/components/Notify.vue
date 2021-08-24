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
	methods: {
		notify() {
			if (this.getNotificationPermission()) {
				var noti = new Notification(this.title, {
					body: this.message,
					icon: logo
				});
				noti.onclick = (event) => {
					event.preventDefault();
					window.open("http://tmdals9974.github.io/TIL/Test/notify.html", "_blank");
				};
			}
		},
		getNotificationPermission() {
			console.log("getNotificationPermission");

			if (!"Notification" in window) {
				alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
			}

			Notification.requestPermission((result) => {
				console.log("requestPermission result: " + result);
				if (result === "denied") {
					alert(
						"알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다."
					);
					return false;
				}
			});

			return true;
		},
	},
};
</script>