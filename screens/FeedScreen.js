import React, { useState } from 'react'
import * as Yup from 'yup'
import { StyleSheet, Image, ScrollView, View, Text } from 'react-native'


 export default function FeedPet(){
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.logo} source={require('../assets/form.png')} />
                <Text style = {styles.textStyle}> Hello, @user! 
                </Text>
                
            </ScrollView>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
      width: 400,
      height: 300,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    textStyle: {
        fontSize: 15,
        marginLeft: 150,
      },
    scrollView: {
        marginHorizontal: 5,
      },
  });



