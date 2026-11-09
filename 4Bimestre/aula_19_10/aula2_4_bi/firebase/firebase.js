import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxL7OjuphcyK6ZGzCA48dOJuBDoGGm6pg",
  authDomain: "queen-fad85.firebaseapp.com",
  projectId: "queen-fad85",
  storageBucket: "queen-fad85.firebasestorage.app",
  messagingSenderId: "107987106284",
  appId: "1:107987106284:web:ebddbb9ca12bd479e128c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);