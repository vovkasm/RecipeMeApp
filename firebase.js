// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVqjeqAkwyQe2JIvBTNcDzj5KM25eslLI",
  authDomain: "recipeme-ca56e.firebaseapp.com",
  projectId: "recipeme-ca56e",
  storageBucket: "recipeme-ca56e.appspot.com",
  messagingSenderId: "283233255559",
  appId: "1:283233255559:web:d46f5bac6933889778f822",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
