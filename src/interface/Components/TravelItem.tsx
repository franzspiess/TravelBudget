import React from 'react'
import { View, Text } from 'react-native';
import styles from '../../styles'
import { Trip } from '../../infrastructure/Models/Models';

export default function TravelItem ({trip}: {trip:Trip}) {
  return (
    <View style={styles.itemBox}>
      <Text>{trip.totalBudget}</Text>
    </View>
  )
}

