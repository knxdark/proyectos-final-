import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBVEN5K5Bi0yn5yQZy4njqwOn1zTxSA2U",
    authDomain: "muro-edf26.firebaseapp.com",
    projectId: "muro-edf26",
    storageBucket: "muro-edf26.appspot.com",
    messagingSenderId: "611545563607",
    appId: "1:611545563607:web:5506b15087f90aa0ab0b92"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);