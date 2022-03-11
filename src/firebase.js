import firebase from "firebase";
// authentication
import "firebase/auth";
// firestore database
import "firebase/firestore";
// real time database
import "firebase/database";
// storage
import "firebase/storage";
// function
// import 'firebase/functions'
// hosting

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACqMkjz3s8m55fBsBfuK4Fs1RxkyJc-uI",
  authDomain: "spotify-clone-9cfbf.firebaseapp.com",
  projectId: "spotify-clone-9cfbf",
  storageBucket: "spotify-clone-9cfbf.appspot.com",
  messagingSenderId: "402332403619",
  appId: "1:402332403619:web:761019c8e093d10c353c16",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
