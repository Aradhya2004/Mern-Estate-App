import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gharlelo-c6b31.firebaseapp.com",
  projectId: "gharlelo-c6b31",
  storageBucket: "gharlelo-c6b31.firebasestorage.app",
  messagingSenderId: "648012595720",
  appId: "1:648012595720:web:63bcd8c5396b9504f947bd"
};

export const app = initializeApp(firebaseConfig);