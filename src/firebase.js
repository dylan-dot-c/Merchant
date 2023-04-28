// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9wy1wlAh7OBXsAnIqcEbSOMONMza6fFM",
  authDomain: "sw-api-deck-builder.firebaseapp.com",
  projectId: "sw-api-deck-builder",
  storageBucket: "sw-api-deck-builder.appspot.com",
  messagingSenderId: "766203018260",
  appId: "1:766203018260:web:b744e619f29e455a00bb01",
  measurementId: "G-9MJVX6TQRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app)