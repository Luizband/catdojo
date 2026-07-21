// =========================================================================
// 1. IMPORTAÇÕES DO FIREBASE (Sempre no topo)
// =========================================================================
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// 2. INICIALIZAÇÃO DO FIREBASE EM SEGUNDO PLANO
firebase.initializeApp({
  apiKey: "AIzaSyBQffvPhcKvIX3Kgwr2M103I8uG6wqA4xM",
  authDomain: "catdojo-ff9f3.firebaseapp.com",
  projectId: "catdojo-ff9f3",
  storageBucket: "catdojo-ff9f3.firebasestorage.app",
  messagingSenderId: "246691703665",
  appId: "1:246691703665:web:6fafdb4bfd51c0bed024d0"
});

const messaging = firebase.messaging();

// =========================================================================
// 3. SEU CÓDIGO ORIGINAL DO PWA (Cache e Offline)
// =========================================================================
const CACHE_NAME = 'catdojo-v6'; 
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

// =========================================================================
// 4. O CÓDIGO DO MENSAGEIRO (Escuta as notificações com o jogo fechado)
// =========================================================================
messaging.onBackgroundMessage((payload) => {
  console.log('Mensagem de dados recebida do robô:', payload);
  
  // Agora ele lê de payload.data em vez de payload.notification
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: './imagens/logo.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
