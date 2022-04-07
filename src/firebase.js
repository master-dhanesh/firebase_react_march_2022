import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALfzdAKqlk65sHVxQCGO1ZxVD2vTPetPs",
  authDomain: "react6-firebase.firebaseapp.com",
  projectId: "react6-firebase",
  storageBucket: "react6-firebase.appspot.com",
  messagingSenderId: "461875159236",
  appId: "1:461875159236:web:5c947f927d65054ee12991",
  measurementId: "G-D2P5LX24WR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};