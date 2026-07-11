const CACHE_NAME = 'catdojo-v1';
const ASSETS = [
  './',
  './index.html',
  './dojo.html',
  './firebase-config.js',
  './imagens/logo.png',
  './imagens/fundo.png'
];

// Instalação do PWA e salvamento dos arquivos essenciais em cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de carregamento: tenta buscar da rede, se cair (offline), busca no cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
