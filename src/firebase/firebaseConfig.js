import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7lu6EA_Ga3QXHocEXkiXMEEN0DxS30o8",
  authDomain: "e-commers-e84e2.firebaseapp.com",
  projectId: "e-commers-e84e2",
  storageBucket: "e-commers-e84e2.appspot.com",
  messagingSenderId: "649868829280",
  appId: "1:649868829280:web:622c8c2be13830acbb5905"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };