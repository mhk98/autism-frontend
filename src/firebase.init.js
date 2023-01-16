// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVaZ5HF005mLgUYltMv2Opb3hWwuAUIrQ",
  authDomain: "autism-care-43c6d.firebaseapp.com",
  projectId: "autism-care-43c6d",
  storageBucket: "autism-care-43c6d.appspot.com",
  messagingSenderId: "373300175418",
  appId: "1:373300175418:web:7970f47be2b61994c44b03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
