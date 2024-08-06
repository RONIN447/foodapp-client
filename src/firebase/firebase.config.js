// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuyrkAHuawjxnOhgqvmnnyh_DKLgqHnXc",
  authDomain: "foodapp-bf188.firebaseapp.com",
  projectId: "foodapp-bf188",
  storageBucket: "foodapp-bf188.appspot.com",
  messagingSenderId: "543168401045",
  appId: "1:543168401045:web:fdc46e518c9e9a8f68159c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;