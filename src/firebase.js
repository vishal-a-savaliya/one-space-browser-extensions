import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTQTzO8MMiG7ruULepj4GjkcTpRfcCsZc",
  authDomain: "one-space-store.firebaseapp.com",
  databaseURL: "https://one-space-store-default-rtdb.firebaseio.com",
  projectId: "one-space-store",
  storageBucket: "one-space-store.appspot.com",
  messagingSenderId: "860818350032",
  appId: "1:860818350032:web:9d56cbd67c7962ddfbe3d5",
  measurementId: "G-046HNE6Y4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
