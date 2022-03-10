import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhhb2pP2uJLY_3iCTVjxuub6kIo9bijy0",
  authDomain: "test2-81cab.firebaseapp.com",
  projectId: "test2-81cab",
  storageBucket: "test2-81cab.appspot.com",
  messagingSenderId: "1052041093269",
  appId: "1:1052041093269:web:96dce4f800971cc966fb9c",
  measurementId: "G-Y6TLE09MKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Intitialize Authentication
export const auth = getAuth();
export const Googleprovider = new GoogleAuthProvider();

// Intialize Cloud FireBase
export const db = getFirestore();

