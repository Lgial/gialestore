// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApU7-WOnLVoKbMRBP5SyvW6O4jVrHEFK8",
  authDomain: "giale-de-app.firebaseapp.com",
  projectId: "giale-de-app",
  storageBucket: "giale-de-app.appspot.com",
  messagingSenderId: "130933440590",
  appId: "1:130933440590:web:f1d5d29f95a4ead7a1831f",
  measurementId: "G-BGJQ7QMQQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);