import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';

import TravelItem from './TravelItem'

export default function TravelItemContainer() {
  return (


    <View style={styles.itemContainer}>
      <TravelItem />
    </View>
  )
}
