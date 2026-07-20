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
const CACHE_NAME = 'catdojo-v4';[cite: 1]
const ASSETS = [[cite: 1]
  './',[cite: 1]
  './index.html',[cite: 1]
  './dojo.html',[cite: 1]
  './firebase-config.js',[cite: 1]
  './imagens/logo.png',[cite: 1]
  './imagens/fundo.png'[cite: 1]
];[cite: 1]

// Instalação do PWA e salvamento dos arquivos essenciais em cache[cite: 1]
self.addEventListener('install', (e) => {[cite: 1]
  e.waitUntil([cite: 1]
    caches.open(CACHE_NAME).then((cache) => {[cite: 1]
      return cache.addAll(ASSETS);[cite: 1]
    }).then(() => self.skipWaiting())[cite: 1]
  );[cite: 1]
});[cite: 1]

// Ativação do Service Worker[cite: 1]
self.addEventListener('activate', (e) => {[cite: 1]
  e.waitUntil([cite: 1]
    caches.keys().then((keys) => {[cite: 1]
      return Promise.all([cite: 1]
        keys.map((key) => {[cite: 1]
          if (key !== CACHE_NAME) {[cite: 1]
            return caches.delete(key);[cite: 1]
          }[cite: 1]
        })[cite: 1]
      );[cite: 1]
    }).then(() => self.clients.claim())[cite: 1]
  );[cite: 1]
});[cite: 1]

// Estratégia de carregamento: tenta buscar da rede, se cair (offline), busca no cache[cite: 1]
self.addEventListener('fetch', (e) => {[cite: 1]
  e.respondWith([cite: 1]
    fetch(e.request).catch(() => {[cite: 1]
      return caches.match(e.request);[cite: 1]
    })[cite: 1]
  );[cite: 1]
});[cite: 1]

// =========================================================================
// 4. O CÓDIGO DO MENSAGEIRO (Escuta as notificações com o jogo fechado)
// =========================================================================
messaging.onBackgroundMessage((payload) => {
  console.log('Mensagem recebida do robô com o jogo fechado:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './imagens/logo.png' // Aproveitando sua imagem de logo que já está no cache
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
