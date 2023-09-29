import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAG2OjwoX1VNmVDIrYznkUd86w8Mm-HANQ",
  authDomain: "blog-site-c8312.firebaseapp.com",
  projectId: "blog-site-c8312",
  storageBucket: "blog-site-c8312.appspot.com",
  messagingSenderId: "196990063698",
  appId: "1:196990063698:web:9d622bc778fb04953a3b8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app)