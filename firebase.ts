import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBFwVdNsobwBv92SBtnNfgKuJRzi8fysg",
  authDomain: "chatter-box-7e644.firebaseapp.com",
  projectId: "chatter-box-7e644",
  storageBucket: "chatter-box-7e644.appspot.com",
  messagingSenderId: "22008499521",
  appId: "1:22008499521:web:ee3d10526183fe45fb25c0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
