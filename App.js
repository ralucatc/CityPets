import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase"
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
// Your web app's Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function App() {
  return <WelcomeScreen />;
}


