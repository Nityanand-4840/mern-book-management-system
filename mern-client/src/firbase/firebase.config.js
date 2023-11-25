// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCONq1GkJVeHesvX8AUFVmlHb-g0WACwSY",
  authDomain: "mern-book-inventory-7df0f.firebaseapp.com",
  projectId: "mern-book-inventory-7df0f",
  storageBucket: "mern-book-inventory-7df0f.appspot.com",
  messagingSenderId: "999557412324",
  appId: "1:999557412324:web:a3f78745f763eec75f43f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;