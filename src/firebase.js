import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lognord-f788a.firebaseapp.com",
  projectId: "lognord-f788a",
  storageBucket: "lognord-f788a.appspot.com",
  messagingSenderId: "479094509833",
  appId: "1:479094509833:web:feccbb03b7b8e550f403d8"
};

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);

export const auth = getAuth();

export const storage = getStorage(app);
