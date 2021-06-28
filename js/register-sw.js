// Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
      .then(reg => {
        console.log("Service worker ready!");
      });
}
else {
  console.log("Service worker not supported.");
}

