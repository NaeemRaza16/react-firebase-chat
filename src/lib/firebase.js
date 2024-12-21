import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8470c.firebaseapp.com",
  projectId: "reactchat-8470c",
  storageBucket: "reactchat-8470c.firebasestorage.app",
  messagingSenderId: "718523111038",
  appId: "1:718523111038:web:d150850aafa6e1f1976a2f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()