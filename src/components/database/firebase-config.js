import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCK3s4Zy9mqXokyn8VkAqh58PC7qWtzUyA",
  authDomain: "bark-buddies-71f1f.firebaseapp.com",
  projectId: "bark-buddies-71f1f",
  storageBucket: "bark-buddies-71f1f.appspot.com",
  messagingSenderId: "1023201993508",
  appId: "1:1023201993508:web:985d9767db6504efb749b1",
  measurementId: "G-Y65WZZZYLL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);