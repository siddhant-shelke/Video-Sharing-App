import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtMUpfxa-9c3M2qvZetrjnOpzKazbJ2a0",
  authDomain: "video-97d36.firebaseapp.com",
  projectId: "video-97d36",
  storageBucket: "video-97d36.appspot.com",
  messagingSenderId: "999161437271",
  appId: "1:999161437271:web:ac70ba3ee3686799479712",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
