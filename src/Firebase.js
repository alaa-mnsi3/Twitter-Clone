import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAz9PgHz2OnoroHN-fNzdnDTd-I2w0F2MY",
  authDomain: "twitter-clone-2-efdef.firebaseapp.com",
  projectId: "twitter-clone-2-efdef",
  storageBucket: "twitter-clone-2-efdef.appspot.com",
  messagingSenderId: "856312114698",
  appId: "1:856312114698:web:c7ea16bed3d9a7a75bf9f3",
  measurementId: "G-SQEF6D4DX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Intitialize Authentication
export const auth = getAuth();
export const Googleprovider = new GoogleAuthProvider();

// Intialize Cloud FireBase
export const db = getFirestore();

