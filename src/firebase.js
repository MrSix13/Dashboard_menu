// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDbt-kwyWnYvKuKiGIOdEAflIPMSfIa_4",
  authDomain: "dashboard-49f3f.firebaseapp.com",
  projectId: "dashboard-49f3f",
  storageBucket: "dashboard-49f3f.appspot.com",
  messagingSenderId: "962972188842",
  appId: "1:962972188842:web:d350f40fd768ce93c6d0d3",
  measurementId: "G-XP7NL94FQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);