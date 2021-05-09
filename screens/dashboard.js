import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, } from 'react-native';
import firebase from '../database/firebase';

export default class Dashboard extends Component { 
  
constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Image style={styles.logo} source={require('../assets/form.png')} />

            <Text style = {styles.textStyle}>
              Hello, {this.state.displayName}
            </Text>

            <Button style={styles.logout}  
              title="Logout"
              onPress={() => this.signOut()}
           />       
        </ScrollView>
        
        
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 100
  }, 
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logout: {
    color: "#3740FE" 
  },
  scrollView: {
      marginVertical: 5,
    }, 
});