
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCH7NolUQTqhQZ8x8PE-RE5kfmV9XFSzkM",
  authDomain: "motorcycle-marketplace.firebaseapp.com",
  projectId: "motorcycle-marketplace",
  storageBucket: "motorcycle-marketplace.appspot.com",
  messagingSenderId: "385453067120",
  appId: "1:385453067120:web:169b30847b55541a439db5"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()