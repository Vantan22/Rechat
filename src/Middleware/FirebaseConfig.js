// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBzrveOPC6oKqS8JNCR41vsd4mc78O_Z4Q",
  authDomain: "rechat-60e98.firebaseapp.com",
  databaseURL: "https://rechat-60e98-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rechat-60e98",
  storageBucket: "rechat-60e98.appspot.com",
  messagingSenderId: "556731779174",
  appId: "1:556731779174:web:35589c4a340428461f05a7",
  measurementId: "G-SFWPGV4ZWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
