// src/services/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase.js";

export const signup = async (companyName, companyRegNumber, companyGSTNumber, companyAddress, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            companyName,
            companyRegNumber,
            companyGSTNumber,
            companyAddress,
            email,
            createdAt: new Date()
        });

        return user;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
