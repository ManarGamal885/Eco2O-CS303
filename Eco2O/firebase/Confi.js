import { initializeApp }  from "firebase/app";

const config = {
    apiKey: "AIzaSyDKofTHDSBe0yAk4W4Q3SqecO6KbyBIN6I",
    authDomain: "cs303-2022-8c3c0.firebaseapp.com",
    databaseURL: "https://cs303-2022-8c3c0-default-rtdb.firebaseio.com",
    projectId: "cs303-2022-8c3c0",
    storageBucket: "cs303-2022-8c3c0.appspot.com",
    messagingSenderId: "675632741153",
    appId: "1:675632741153:web:78ac136059a3ba1f41dc60",
    measurementId: "G-D67YF988HV"
  };


  
 export const app = initializeApp(config);

