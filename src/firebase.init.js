// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmLQd1BN0l_ZFjgG_nQvlpm9W9ZfpCBAc",
  authDomain: "my-hotel-a8f8f.firebaseapp.com",
  projectId: "my-hotel-a8f8f",
  storageBucket: "my-hotel-a8f8f.appspot.com",
  messagingSenderId: "971242851438",
  appId: "1:971242851438:web:c861c272c49ccaf6d3aa7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
