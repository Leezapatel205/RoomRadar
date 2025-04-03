// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyBj9LK29pH2bkYOC5HWJzXuWD2_X5Toizs",
  authDomain: "mern-estate-9c754.firebaseapp.com",
  projectId: "mern-estate-9c754",
  storageBucket: "mern-estate-9c754.firebasestorage.app",
  messagingSenderId: "327978183535",
  appId: "1:327978183535:web:b9d9e834cd79eb09bc969a",
  measurementId: "G-6FSZDD1C5Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);