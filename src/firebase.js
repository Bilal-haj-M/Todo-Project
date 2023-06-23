// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAduvU6TpTT52i7tRe31tmmNaARc7Mj-CI",
  authDomain: "todo-project-ceeb5.firebaseapp.com",
  projectId: "todo-project-ceeb5",
  storageBucket: "todo-project-ceeb5.appspot.com",
  messagingSenderId: "516351785429",
  appId: "1:516351785429:web:3b2d96a4f5d8b18cb5a55c",
  measurementId: "G-ZEJ0XC8TTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
