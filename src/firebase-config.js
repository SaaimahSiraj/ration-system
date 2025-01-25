// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYGofgzWcRXBG5xeg4qoK2mjHi226o-ag",
  authDomain: "ration-system-43df1.firebaseapp.com",
  projectId: "ration-system-43df1",
  storageBucket: "ration-system-43df1.appspot.com",
  messagingSenderId: "634262722958",
  appId: "1:634262722958:web:7618d52f22cbe7e874acdf",
  measurementId: "G-6BFJ3KN3FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Correctly export auth and db
export { auth, db };
