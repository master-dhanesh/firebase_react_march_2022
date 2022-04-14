import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";

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
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL, listAll, deleteObject };
