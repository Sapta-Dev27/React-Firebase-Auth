import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATSX8UQdFde4b8R2D0c2xgBPCUyCnRoeE",
  authDomain: "trial-ccbaa.firebaseapp.com",
  projectId: "trial-ccbaa",
  storageBucket: "trial-ccbaa.firebasestorage.app",
  messagingSenderId: "736260069514",
  appId: "1:736260069514:web:411c6a0841d39aa8c6f573",
  measurementId: "G-80PTPWX0T7"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();