// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYkSGXDLXfXzPsFfb8MX-LtPFnOna_z1A",
  authDomain: "testmonoma.firebaseapp.com",
  projectId: "testmonoma",
  storageBucket: "testmonoma.appspot.com",
  messagingSenderId: "45507752763",
  appId: "1:45507752763:web:cda8059ca52d5abb0b3d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);