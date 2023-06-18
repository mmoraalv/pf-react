import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-tecnologia-28144.firebaseapp.com",
  projectId: "tienda-tecnologia-28144",
  storageBucket: "tienda-tecnologia-28144.appspot.com",
  messagingSenderId: "890836197176",
  appId: "1:890836197176:web:153f42e3b2c2600e74abcd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);