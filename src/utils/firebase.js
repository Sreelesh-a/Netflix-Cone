// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK5m_DAIQ-fSU5xkIrvW_6PiLIoehGxPs",
  authDomain: "netflix-cloned-by-sreelesh.firebaseapp.com",
  projectId: "netflix-cloned-by-sreelesh",
  storageBucket: "netflix-cloned-by-sreelesh.appspot.com",
  messagingSenderId: "910930175201",
  appId: "1:910930175201:web:9cf3699f48b3dfdbe1c3a0",
  measurementId: "G-T0G4D874HC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
