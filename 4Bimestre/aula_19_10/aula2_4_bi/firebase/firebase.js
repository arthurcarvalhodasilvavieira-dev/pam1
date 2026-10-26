import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBwxYlYeLqoV4ZEKKgM0AbwYR-I90M0m4",
  authDomain: "queen-90e60.firebaseapp.com",
  projectId: "queen-90e60",
  storageBucket: "queen-90e60.firebasestorage.app",
  messagingSenderId: "748958651455",
  appId: "1:748958651455:web:4ce609c5174cad7dac948a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);