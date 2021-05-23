import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'

export default function PetCard (props){
    return (
        <View style = {styles.card}>
            <View style={styles.cardContent}>
                {
                    props.children
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 4 },
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginHorizontal: 10,
      marginVertical: 9,
      height: 200
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
    }
  });
  