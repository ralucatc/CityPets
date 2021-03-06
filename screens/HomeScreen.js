import React from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import { DrawerActions } from '@react-navigation/native';

export default function HomeScreen() {
    return (
    <ScrollView style={styles.scrollView}> 
       <ImageBackground 
       style={styles.background}
       source={require("../assets/background.png")}>
           <View style={styles.buttonsContainer}></View>
       </ImageBackground>
       </ScrollView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        height: 900,
    },

    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    scrollView: {
        marginHorizontal: 5,
      },
    
})
