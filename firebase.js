
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyATUiVWM26lxlNwUc1hbwwucWhkjC8UH4A",
  authDomain: "tik-tok---jornada-3d4c1.firebaseapp.com",
  projectId: "tik-tok---jornada-3d4c1",
  storageBucket: "tik-tok---jornada-3d4c1.appspot.com",
  messagingSenderId: "956844019041",
  appId: "1:956844019041:web:88a887793fc085f19e0920"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;