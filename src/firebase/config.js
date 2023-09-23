// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_mHaRQmHFLyRV8urk_zeCr7lFjOVaTI",
  authDomain: "natuye-1f4ab.firebaseapp.com",
  projectId: "natuye-1f4ab",
  storageBucket: "natuye-1f4ab.appspot.com",
  messagingSenderId: "9946497034",
  appId: "1:9946497034:web:469d79b4ef749845685ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);