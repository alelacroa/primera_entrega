import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA-7X54AUmXr2KyT5hZLMk43pn7wYk9gM",
  authDomain: "coderhousereact-f91eb.firebaseapp.com",
  projectId: "coderhousereact-f91eb",
  storageBucket: "coderhousereact-f91eb.appspot.com",
  messagingSenderId: "660516282619",
  appId: "1:660516282619:web:3e228ba62691cd89fe105e",
  measurementId: "G-FR6736ZC51"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
