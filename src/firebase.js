import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEQsb3Fc1LYomj5h5k6xxBl0il2Jkxj64",
    authDomain: "car-marketplace-7c717.firebaseapp.com",
    projectId: "car-marketplace-7c717",
    storageBucket: "car-marketplace-7c717.firebasestorage.app",
    messagingSenderId: "489279685538",
    appId: "1:489279685538:web:0941725dcdb08bc2f4e8fb"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
