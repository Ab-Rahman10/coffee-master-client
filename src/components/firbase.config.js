// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9XV1LSENitSPkp2Yc1LqbZ-uXq6CQaUk",
  authDomain: "coffee-master-74a2f.firebaseapp.com",
  projectId: "coffee-master-74a2f",
  storageBucket: "coffee-master-74a2f.firebasestorage.app",
  messagingSenderId: "933911242659",
  appId: "1:933911242659:web:2c0f8c5b242ca619aa5c16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
