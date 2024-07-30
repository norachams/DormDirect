import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVXzFLxOILMbqkw9_FEXAoz4--lF1tY1M",
  authDomain: "dormdirect.firebaseapp.com",
  projectId: "dormdirect",
  storageBucket: "dormdirect.appspot.com",
  messagingSenderId: "748598867441",
  appId: "1:748598867441:web:c3e38ed726d3ce851d4050",
  measurementId: "G-7M1CQVTLNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };