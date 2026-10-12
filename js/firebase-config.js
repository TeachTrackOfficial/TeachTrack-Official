
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyB2_hVxzAF8yDNRdJmZ_SmyJ5kxi74hDbU",
  authDomain: "teachtrack-official.firebaseapp.com",
  projectId: "teachtrack-official",
  storageBucket: "teachtrack-official.firebasestorage.app",
  messagingSenderId: "184563716559",
  appId: "1:184563716559:web:746fbbd006e66bf77982ba",
  measurementId: "G-4YP578LMXM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
