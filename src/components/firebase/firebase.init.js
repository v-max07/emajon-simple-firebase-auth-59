// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NpvX02HUcd5-vvxxTOQXFdwKD1qdi6o",
    authDomain: "ema-john-simple-auth-fcafb.firebaseapp.com",
    projectId: "ema-john-simple-auth-fcafb",
    storageBucket: "ema-john-simple-auth-fcafb.appspot.com",
    messagingSenderId: "528678994832",
    appId: "1:528678994832:web:cea1a39c811de50f806915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;