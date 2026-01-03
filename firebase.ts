// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3RU7HTLJ6GDTJl7ljnaGFgi21mY5DkU",
  authDomain: "realtimechat-694bf.firebaseapp.com",
  projectId: "realtimechat-694bf",
  storageBucket: "realtimechat-694bf.firebasestorage.app",
  messagingSenderId: "497117505510",
  appId: "1:497117505510:web:c6d4583069276bdea79827",
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
