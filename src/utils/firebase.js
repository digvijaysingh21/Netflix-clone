// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL0SJ2mM0hn7z2NOAvpDcp-9C7Zg7HDQc",
  authDomain: "netflix-clone-f57dc.firebaseapp.com",
  projectId: "netflix-clone-f57dc",
  storageBucket: "netflix-clone-f57dc.appspot.com",
  messagingSenderId: "767494956379",
  appId: "1:767494956379:web:b75acea286dbd11b58267e",
  measurementId: "G-8MLRRBE4Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();