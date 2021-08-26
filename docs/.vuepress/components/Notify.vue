<template>
	<div>
		<h1>Notify Test</h1>
		<div class="flex-column">
			<input type="text" name="" id="notiTitle" v-model="title" />
			<input type="text" name="" id="notiMessage" v-model="message" />
			<input type="button" @click="notify()" value="1. 즉시 알림" />
			<input type="button" @click="afterNotify()" value="2. 10초 후 알림" />
		</div>
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
	mounted() {
		navigator.serviceWorker
			.register("../sw.js")
			.then(function (registration) {
				console.log("Service worker successfully registered.");
				return registration;
			})
			.catch(function (err) {
				console.error("Unable to register service worker.", err);
			});
	},
	methods: {
		afterNotify() {
			setTimeout(() => this.notify(), 10000);
		},
		notify() {
			if (this.getNotificationPermission()) {
				const m_title = this.title;
				const m_body = this.message;
				navigator.serviceWorker.ready.then(function (registration) {
					registration.showNotification(m_title, {
						body: m_body,
						icon: logo,
						data: { url: "http://tmdals9974.github.io/TIL/Test/notify.html" },
						actions: [{ action: "open_url", title: "Read Now" }],
					});
				});
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

<style scoped>
.flex-column {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.flex-column > * {
	margin: 0 auto;
	margin-bottom: 15px;
	padding: 7px;
	font-family: "Cafe24SsurroundAir";
}

.flex-column > input[type="text"] {
	width: 50%;
}

.flex-column > input[type="button"] {
	min-width: fit-content;
	padding: 10px;
	width: 20%;
	font-weight: bold;
	font-size: 1.05rem;
	color: white;
	background-color: #4c9ccc;
	border: none;
	border-radius: 7px;
	cursor: pointer;
}
</style>