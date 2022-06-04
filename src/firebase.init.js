// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQgIPQJzo1xcx4-2PuqZGsPplZgkeN6HY",
    authDomain: "simple-firebase-d476f.firebaseapp.com",
    projectId: "simple-firebase-d476f",
    storageBucket: "simple-firebase-d476f.appspot.com",
    messagingSenderId: "208938388143",
    appId: "1:208938388143:web:e8856b2eceabd1bc1ae25a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
