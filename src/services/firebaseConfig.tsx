
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA5vzDXZ5y-P74lQYbjVXfBTnFl4HihB8",
  authDomain: "rusheats-a310d.firebaseapp.com",
  projectId: "rusheats-a310d",
  storageBucket: "rusheats-a310d.appspot.com",
  messagingSenderId: "789604450419",
  appId: "1:789604450419:web:407531988bb605fe03aa06"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);