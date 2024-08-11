import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-social-media-app-4b9c2.firebaseapp.com",
  projectId: "react-social-media-app-4b9c2",
  storageBucket: "react-social-media-app-4b9c2.appspot.com",
  messagingSenderId: "11523823024",
  appId: "1:11523823024:web:50986f0d4bee2a8e9df275",
  measurementId: "G-03WJTTXGJJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();
