import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCzqGC0JbbTy5F-Xl9f6EkzezWqcgTlm2k",
  authDomain: "travel-agency-8cda0.firebaseapp.com",
  projectId: "travel-agency-8cda0",
  storageBucket: "travel-agency-8cda0.appspot.com",
  messagingSenderId: "1085041474836",
  appId: "1:1085041474836:web:998b8276dbc6594c3c1601",
  measurementId: "G-TL5CPWZ8N3"
});

export const auth = getAuth(firebaseApp);



