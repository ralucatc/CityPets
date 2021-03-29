import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       style={styles.background}
       source={require("../assets/background.png")}>
           <View style={styles.buttonsContainer}>
           <AppButton title="Login"  onPress = {() => props.navigation.navigate('Login')}
           />
           
           <AppButton title="Register" onPress = {() => props.navigation.navigate('Signup')} color = "secondary" 
           />
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        height: 700,
    },

    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    
})
export default WelcomeScreen;