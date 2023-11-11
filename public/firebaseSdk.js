// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6b9jB0_wB2IWr5wF1UrvVCPTA6SI3NS8",
  authDomain: "toshokan-6efd1.firebaseapp.com",
  projectId: "toshokan-6efd1",
  storageBucket: "toshokan-6efd1.appspot.com",
  messagingSenderId: "448072931271",
  appId: "1:448072931271:web:43bd890f4dfeaa85916be2",
  measurementId: "G-ZRXLFRZ2NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Firebase Authentication
const auth = getAuth(app)


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
 



    function logIn(){
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //done signing in
      alert('login successful!')
      const user = userCredential.user
      navigate('./home')
    })
    .catch ((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message; 
    
    }
    )
    }

    function signUp(event){
     event.preventDefault()
     createUserWithEmailAndPassword(auth,email,password)
     .then((userCredential) =>{
      //signed up
      alert('signed up successfully! ')
      const user = userCredential.user
     })
     .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Fill in the required info correctly')
     }

     )
     
      }