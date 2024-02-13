// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvAXiEJPdniO3XeZP3KrdWrOCQp1Kryx8",
  authDomain: "real-estate-website-faaab.firebaseapp.com",
  projectId: "real-estate-website-faaab",
  storageBucket: "real-estate-website-faaab.appspot.com",
  messagingSenderId: "962859692737",
  appId: "1:962859692737:web:ac0e8095ee1ee7696cda40",
  measurementId: "G-7S9LRTGCYR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
