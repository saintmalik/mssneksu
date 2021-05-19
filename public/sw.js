self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mssn-eksu').then((cache) => cache.addAll([
      '/',
      'app.js',
      'default/css/main.css',
      'default/css/media.css',
      'default/css/head&foot.css',
      'default/js/main.js',
      'default/images/mssn-eksu.png',
      'default/css/bootstrap/bootstrap.min.css',
      'default/js/bootstrap/bootstrap.min.js',
      'default/js/wow.min.js',
      'default/css/404.css',
      'default/css/about.css',
      'default/css/animate.css',
      'default/css/donate.css',
      'default/css/eksuma.css',
      'default/css/excos.css',
      'default/css/reg.css',
      'default/css/submit.css',
      'default/css/events.css',
      'default/images/abdul.jpeg',
      'default/images/adigun.jpg',
      'default/images/aisha.jpg',
      'default/images/banner.jpg',
      'default/images/bar.jpg',
      'default/images/idayat.jpg',
      'default/images/jar.jpg',
      'default/images/kareem.jpg',
      'default/images/logo.png',
      'default/images/logo2.PNG',
      'default/images/nhicoms.jpg',
      'default/images/rasak.jpg',
      'default/images/wahab.jpg',
      'default/images/zainab.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});



// 
// 
// 'default/js/fire.js',
// 
// 