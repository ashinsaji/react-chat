import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUYYTmRm4Zqgj3okKM3z-9fEHjwoGsTZk",
  authDomain: "chat-34725.firebaseapp.com",
  projectId: "chat-34725",
  storageBucket: "chat-34725.appspot.com",
  messagingSenderId: "515616084214",
  appId: "1:515616084214:web:48653d4328b4cd5a2c9cd7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
