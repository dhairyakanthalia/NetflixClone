// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOpgq3Gxr8uKWrTFtHJYthzZuFSsu4Dy0",
  authDomain: "netflix-ce3a5.firebaseapp.com",
  projectId: "netflix-ce3a5",
  storageBucket: "netflix-ce3a5.firebasestorage.app",
  messagingSenderId: "327564104",
  appId: "1:327564104:web:9cf47060c535b350d7917d",
  measurementId: "G-2XKSW0Z3ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();