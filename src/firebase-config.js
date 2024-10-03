import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAph77mp9OcQgfdcyJH2CL3Oxb_hAz7IME",
  authDomain: "deakinwebsite.firebaseapp.com",
  projectId: "deakinwebsite",
  storageBucket: "deakinwebsite.appspot.com",
  messagingSenderId: "933594552945",
  appId: "1:933594552945:web:d19b9926dbdce9562e99d0",
  measurementId: "G-2Q46ZHTT2N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
