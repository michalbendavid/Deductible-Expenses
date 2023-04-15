import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig ={
  apiKey: process.env.NEXT_PUBLIC_API_KEY , 
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN , 
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET ,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERS_ID ,
  appId: process.env.NEXT_PUBLIC_API_ID
};
   
console.warn(firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export default app;
export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}; 
