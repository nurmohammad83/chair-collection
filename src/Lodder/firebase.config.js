// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwlQYIax3SDlpYVsyy8jllXg5QVuHw0Mg",
  authDomain: "chair-auth.firebaseapp.com",
  projectId: "chair-auth",
  storageBucket: "chair-auth.appspot.com",
  messagingSenderId: "113540557508",
  appId: "1:113540557508:web:9ceb20f24d1e1873ed7791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;