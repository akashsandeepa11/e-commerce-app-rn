// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbFe86d36rtkCD6uLZefBvEeBaeccJ1M",
  authDomain: "e-commerce-86a05.firebaseapp.com",
  projectId: "e-commerce-86a05",
  storageBucket: "e-commerce-86a05.appspot.com",
  messagingSenderId: "187110875482",
  appId: "1:187110875482:web:dcd9602628bb4747465363",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };

export default db;
