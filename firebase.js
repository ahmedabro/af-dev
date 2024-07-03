// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "my-portfolio-e5edc.firebaseapp.com",
  projectId: "my-portfolio-e5edc",
  storageBucket: "my-portfolio-e5edc.appspot.com",
  messagingSenderId: "468691544251",
  appId: "1:468691544251:web:42af5b6dfb0e86e55f619e",
  measurementId: "G-7HV3MBZY3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export { app, storage }