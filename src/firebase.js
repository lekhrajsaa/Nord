// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfl03PUo92yX6aB_EHSNc5RmqLr8IWAWc",
    authDomain: "redpositive-task.firebaseapp.com",
    projectId: "redpositive-task",
    storageBucket: "redpositive-task.appspot.com",
    messagingSenderId: "1019667893964",
    appId: "1:1019667893964:web:d8b9033f2e134a6b4dbc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }