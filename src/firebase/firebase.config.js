// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_20BQ7Z9Q6Sua-LW-tKPxtN31Wxv-_4Y",
  authDomain: "book-library2.firebaseapp.com",
  projectId: "book-library2",
  storageBucket: "book-library2.appspot.com",
  messagingSenderId: "82180187221",
  appId: "1:82180187221:web:d7b8931064da4b0a8ca0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth