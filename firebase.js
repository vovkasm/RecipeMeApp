// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQSrOH-kZFSB0vXIgq-vg-E_4EG6MMysw",
  authDomain: "recipeme-app.firebaseapp.com",
  projectId: "recipeme-app",
  storageBucket: "recipeme-app.appspot.com",
  messagingSenderId: "348222902458",
  appId: "1:348222902458:web:607c72f11383986a1bb283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
