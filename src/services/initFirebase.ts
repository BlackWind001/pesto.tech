import { initializeApp } from 'firebase/app';
import firebaseAppStore from '../stores/firebaseAppStore';

const firebaseConfig = {
  apiKey: "AIzaSyBBWSLL587Nm68kAB6UTCvOpXkNUUiqkCY",
  authDomain: "pesto-tech-c96f6.firebaseapp.com",
  projectId: "pesto-tech-c96f6",
  storageBucket: "pesto-tech-c96f6.appspot.com",
  messagingSenderId: "984362213652",
  appId: "1:984362213652:web:4da2371b6ce74a23c6a201"
};

export default function initFirebase () {
  const app = initializeApp(firebaseConfig);

  firebaseAppStore.setFirebaseApp(app);

  return app;

};

