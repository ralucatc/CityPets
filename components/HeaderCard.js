import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'

export default function HeaderCard (props){
    return (
        <View style = {styles.hcard}>
            <View style={styles.hcardContent}>
                {
                    props.children
                }
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    hcard:{
        height: 220
    }, 
    hcardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
    }
});