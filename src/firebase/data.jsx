// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuqI7ESGn7ziEcUPxfh8aFYE3Jlx7vrs",
  authDomain: "kick-shubreact.firebaseapp.com",
  projectId: "kick-shubreact",
  storageBucket: "kick-shubreact.appspot.com",
  messagingSenderId: "857582363036",
  appId: "1:857582363036:web:8c0ca726d91695fef66859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);