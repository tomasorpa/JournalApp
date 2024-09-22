// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-12llpUMwEba7RmC-ZcJBBE7iv3mkbUs",
  authDomain: "journalapp-7a9f4.firebaseapp.com",
  projectId: "journalapp-7a9f4",
  storageBucket: "journalapp-7a9f4.appspot.com",
  messagingSenderId: "115442662476",
  appId: "1:115442662476:web:9f85e3b76d4af6ca9848e9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);
