// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAdnpx0EyqYDDPVqnLaqCmd-i8CxKTsc",
  authDomain: "city-travel-41c05.firebaseapp.com",
  projectId: "city-travel-41c05",
  storageBucket: "city-travel-41c05.appspot.com",
  messagingSenderId: "196558004161",
  appId: "1:196558004161:web:505e53250d220f88009940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;