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

// // Event Listener para Offline/ Online Status
// window.addEventListener('offline', event => {
//   document.querySelector('body').classList.add('alert-danger');
// });

// window.addEventListener('online', event => {
//   document.querySelector('body').classList.remove('alert-danger');
// });

// A veces este evento falla, ojo!
// Sirve para saber si el navegador esta offline, cuando entramos offline. 
// Es decir, no se disparo los eventos de arriba aun, y necesito conocer el estado.
// 

// if (!navigator.onLine) {
//   document.querySelector('body').classList.add('offline');
//   main.innerHTML = "No obtener los partidos! La aplicacion esta offline!"
// }