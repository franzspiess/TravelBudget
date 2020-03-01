import React from 'react';
import { View, Button } from 'react-native';
import styles from './src/styles'


import TravelItemContainer from './src/interface/Components/TravelItemContainer'
import { myTrip } from './src/infrastructure/Models/mockData';

export default function App() {
  const currentTrip = myTrip
  return (
    <View style={styles.container}>
      <TravelItemContainer trips={[myTrip]} />
      <TravelItemContainer />
      <TravelItemContainer />
      <Button
        title='+'
        onPress={()=> {/*** */}}
      />
    </View>
  );
}

