// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE7cAgZcHnAig0lifv6fn5ZGDaGMAG3t8",
  authDomain: "genius-car-service-f770e.firebaseapp.com",
  projectId: "genius-car-service-f770e",
  storageBucket: "genius-car-service-f770e.appspot.com",
  messagingSenderId: "397109545494",
  appId: "1:397109545494:web:d54d138eacfff6b35b0337",
  measurementId: "G-Y4LWZNQJ64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;