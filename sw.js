self.addEventListener('install', function(event) {
	self.skipWaiting();
});

self.addEventListener('activate', function(event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener(
	'notificationclick',
	function(event) {
		switch (event.action) {
			case 'open_url':
				event.notification.close();

				event.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
					const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === event.notification.data.url ? (windowClient.focus(), true) : false);
					if (!hadWindowToFocus) clients.openWindow(event.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
				}));				
				break;
		}
	},
	false
);
