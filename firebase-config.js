// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// SUBSTITUA ESTE OBJETO PELAS CHAVES DO SEU FIREBASE
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

// Exportando para usar nas outras telas
export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };
