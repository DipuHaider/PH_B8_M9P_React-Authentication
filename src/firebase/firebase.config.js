// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vU5FzU49umo2TUu7c0bu0YNqk26qSwM",
  authDomain: "m9p-react-autentication.firebaseapp.com",
  projectId: "m9p-react-autentication",
  storageBucket: "m9p-react-autentication.appspot.com",
  messagingSenderId: "236171296650",
  appId: "1:236171296650:web:56a104656813daa2e65273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
