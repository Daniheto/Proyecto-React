import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmxY1UTsSbnqTCNuGkOTkGfptX3CMe4sI",
  authDomain: "primer-proyecto-react-1e53b.firebaseapp.com",
  projectId: "primer-proyecto-react-1e53b",
  storageBucket: "primer-proyecto-react-1e53b.appspot.com",
  messagingSenderId: "686680591585",
  appId: "1:686680591585:web:b5cc940a6f9279d82c3ba0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
