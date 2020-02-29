import React from 'react';
import { View, Button } from 'react-native';
import styles from './src/styles'

import TravelItemContainer from './src/interface/Components/TravelItemContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <TravelItemContainer />
      <TravelItemContainer />
      <TravelItemContainer />
      <Button
        title='+'
        onPress={()=> {/*** */}}
      />
    </View>
  );
}

