<<<<<<< HEAD
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage"
=======
import * as firebase from 'firebase';
>>>>>>> origin/master

var firebaseConfig = {
  apiKey: "AIzaSyBVwrcl0YFwbSzW8CIcW1_amI6vtzu6Rus",
  authDomain: "pets-friendly-cities.firebaseapp.com",
  databaseURL: "https://pets-friendly-cities-default-rtdb.firebaseio.com",
  projectId: "pets-friendly-cities",
  storageBucket: "pets-friendly-cities.appspot.com",
  messagingSenderId: "871709221126",
  appId: "1:871709221126:web:b5fcd36b1b1876b7a2be87",
  measurementId: "G-85XBB4KVXR"
};

<<<<<<< HEAD
=======

>>>>>>> origin/master
firebase.initializeApp(firebaseConfig);
 
export default firebase;