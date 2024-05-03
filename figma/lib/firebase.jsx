"use client"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpZSv8zbGnw5rThdRjeNRwVFj7g_yBvHE",
    authDomain: "quantumwaveit-20f81.firebaseapp.com",
    projectId: "quantumwaveit-20f81",
    storageBucket: "quantumwaveit-20f81.appspot.com",
    messagingSenderId: "833307620762",
    appId: "1:833307620762:web:824a86e2337738b2137623",
    measurementId: "G-6MD50HKX57"

};

let app; // Declare app variable outside the function

export function initializeFirebase() {
    if (!app) {
        app = initializeApp(firebaseConfig);
    }
    return app;
}

const db = getFirestore(initializeFirebase()); // Initialize Firebase and get Firestore instance

export { db };