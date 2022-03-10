import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDm5LgM30u1LnvGcb5k9DZ7FqR1X3qboas",
  authDomain: "twitter-clone-42fb0.firebaseapp.com",
  projectId: "twitter-clone-42fb0",
  storageBucket: "twitter-clone-42fb0.appspot.com",
  messagingSenderId: "657833307553",
  appId: "1:657833307553:web:a5a60a7255b52b721eafe0",
  measurementId: "G-M1T3EDVEY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Intitialize Authentication
export const auth = getAuth();
export const Googleprovider = new GoogleAuthProvider();

// Intialize Cloud FireBase
export const db = getFirestore();

