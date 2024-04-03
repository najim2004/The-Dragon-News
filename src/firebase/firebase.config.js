// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJFNC9OprV77I_IQ123_A9ntEBXNbczM",
  authDomain: "the-dragon-news-3155e.firebaseapp.com",
  projectId: "the-dragon-news-3155e",
  storageBucket: "the-dragon-news-3155e.appspot.com",
  messagingSenderId: "799903953963",
  appId: "1:799903953963:web:baa8809b2a92a46fe1666e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);