// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHwai1fA20PO7rRppA-U_cl8jjQ9QSHkQ",
    authDomain: "b2b-travel-company.firebaseapp.com",
    projectId: "b2b-travel-company",
    storageBucket: "b2b-travel-company.appspot.com",
    messagingSenderId: "891919769714",
    appId: "1:891919769714:web:5259c991ee1e5465eba2eb",
    measurementId: "G-5LZQ4ZY9BN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc, getDoc };
