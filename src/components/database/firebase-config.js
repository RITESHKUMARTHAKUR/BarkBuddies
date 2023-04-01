import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDs9PUJeWwemrl91jSgQVymvdxjzSNyLpk",
  authDomain: "bark-buddies-new.firebaseapp.com",
  projectId: "bark-buddies-new",
  storageBucket: "bark-buddies-new.appspot.com",
  messagingSenderId: "338133437913",
  appId: "1:338133437913:web:f7dcdccf55cc4e0ca39dc8",
  measurementId: "G-R8381BPKPW"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);