import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBe2Mn6fDJEhu4tMP101QW6AoLvMlq4Hyk",
    authDomain: "mi-tienda-reactiva.firebaseapp.com",
    projectId: "mi-tienda-reactiva",
    storageBucket: "mi-tienda-reactiva.appspot.com",
    messagingSenderId: "440797652720",
    appId: "1:440797652720:web:2cece4859c36e64b66c435"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)