import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// NOVO: Importamos o Mensageiro aqui na central
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyBQffvPhcKvIX3Kgwr2M103I8uG6wqA4xM",
  authDomain: "catdojo-ff9f3.firebaseapp.com",
  projectId: "catdojo-ff9f3",
  storageBucket: "catdojo-ff9f3.firebasestorage.app",
  messagingSenderId: "246691703665",
  appId: "1:246691703665:web:6fafdb4bfd51c0bed024d0"
};

// Inicializando os serviços
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// NOVO: Ligamos o mensageiro ao nosso aplicativo
const messaging = getMessaging(app); 

// NOVO: Adicionamos o 'messaging' na lista de exportação lá no final
export { db, auth, messaging, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };
