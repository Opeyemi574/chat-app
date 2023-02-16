// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYPqMpUwfjdz40hDEw4CzAXQF8510w1g",
  authDomain: "fire-chat-339ba.firebaseapp.com",
  projectId: "fire-chat-339ba",
  storageBucket: "fire-chat-339ba.appspot.com",
  messagingSenderId: "610552136531",
  appId: "1:610552136531:web:80ad1ec591b177c7f397a6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)