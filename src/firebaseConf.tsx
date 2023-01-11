// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.REACT_APP_NEXT_PUBLIC_FIREBASE_CONFIG !== undefined && JSON.parse(process.env.REACT_APP_NEXT_PUBLIC_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);