// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCVdKpI2SmLFWQ8s2YHPm_RKj0kBH8cvvE",
  authDomain: "prepwiserk-11c3b.firebaseapp.com",
  projectId: "prepwiserk-11c3b",
  storageBucket: "prepwiserk-11c3b.firebasestorage.app",
  messagingSenderId: "114200711682",
  appId: "1:114200711682:web:ade35e1c36c7d52e360d1b",
  measurementId: "G-W0G0D9L2PK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
