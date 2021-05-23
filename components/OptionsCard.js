import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'

export default function OptionsCard (props){
    return (
        <View style = {styles.ocard}>
            <View style={styles.ocardContent}>
                {
                    props.children
                }
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    ocard:{
      borderRadius: 60,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 4 },
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginHorizontal: 8,
      marginVertical: 135,
      height: 38,
      width: 77,
    }, 
    ocardContent: {
      marginHorizontal: 16,
      marginVertical: 10,
    }
});