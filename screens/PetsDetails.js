import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PetCard from '../components/PetCard.js'

export default function PetsDetails({ navigation }) {
    return (
      <View style={styles.container}>
        <PetCard>
          <Text style={styles.titleText}>
            { navigation.getParam('title') }
          </Text>
          <Text>{ navigation.getParam('body') }</Text>
          <Text>{ navigation.getParam('rating') }</Text>
        </PetCard>
      </View>
    );
  }
  