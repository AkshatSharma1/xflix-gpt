// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoke7c1x_OfYrwSAr4YCvDmKmzhVlx1ng",
  authDomain: "xflix-gpt.firebaseapp.com",
  projectId: "xflix-gpt",
  storageBucket: "xflix-gpt.appspot.com",
  messagingSenderId: "357582758244",
  appId: "1:357582758244:web:b8d3193317112dae205a71",
  measurementId: "G-K89XPZPZB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()