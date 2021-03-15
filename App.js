import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase"
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
firebase.analytics();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is going to be the first page of our app.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
