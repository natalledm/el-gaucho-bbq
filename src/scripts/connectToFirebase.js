// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// hosting here

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmb8WK8P18n263-amACN_ZHUCNpKAp1BI",
  authDomain: "el-gaucho-bbq.firebaseapp.com",
  projectId: "el-gaucho-bbq",
  storageBucket: "el-gaucho-bbq.appspot.com",
  messagingSenderId: "122689561624",
  appId: "1:122689561624:web:72efca4e37ed229dbccf6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStoreDB = getFirestore(app);
