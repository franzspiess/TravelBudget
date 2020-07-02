import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';

import TravelItem from './TravelItem'
import { Trip } from '../../infrastructure/Models/Models';


export default function TravelItemContainer({trips}:{trips:Trip[]}) {
  return (
    <View style={styles.itemContainer}>
      {trips.map(trip => (
        <TravelItem trip={trip} />
      ))}
    </View>
  )
}
