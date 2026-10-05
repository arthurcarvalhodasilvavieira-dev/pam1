import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbc_RdKCzZqq9IIMFIh4dd3gRFHCgZPZs",
  authDomain: "appacdc-97d63.firebaseapp.com",
  projectId: "appacdc-97d63",
  storageBucket: "appacdc-97d63.firebasestorage.app",
  messagingSenderId: "599159194233",
  appId: "1:599159194233:web:768dcd48a86be6bf99caa8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);