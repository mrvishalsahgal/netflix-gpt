// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHzkFbmQVm4coJxTbsmhv0w3YEz8VlG5w",
  authDomain: "netflixgpt-3d0bc.firebaseapp.com",
  projectId: "netflixgpt-3d0bc",
  storageBucket: "netflixgpt-3d0bc.firebasestorage.app",
  messagingSenderId: "73113270686",
  appId: "1:73113270686:web:f98691c7bc895383ccbe8f",
  measurementId: "G-MWS54ECC3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
