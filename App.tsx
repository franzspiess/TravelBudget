import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (


    <View style={styles.container}>
      <Text>NEW TRIP</Text>
      <Button
        title='+'
        onPress={()=> {/*** */}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonRound:{
    borderRadius:10
  }
});
