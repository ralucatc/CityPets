import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       style={styles.background}
       source ={require('C:\Users\ADMIN\Desktop\CityPets\app\assets\background.png')}></ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgorund: {
        flex: 1
    }
})

export default WelcomeScreen;