import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './src/styles'

import TravelItemContainer from './src/Components/TravelItemContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <TravelItemContainer />
      <TravelItemContainer />
      <TravelItemContainer />
      <Text>NEW TRIP</Text>
      <Button
        title='+'
        onPress={()=> {/*** */}}
      />
    </View>
  );
}

