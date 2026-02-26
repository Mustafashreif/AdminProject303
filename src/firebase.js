import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "حط هنا",
  authDomain: "حط هنا",
  projectId: "حط هنا",
  storageBucket: "حط هنا",
  messagingSenderId: "حط هنا",
  appId: "حط هنا"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);