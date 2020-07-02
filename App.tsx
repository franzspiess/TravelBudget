import React from 'react';
import { View, Button } from 'react-native';
import styles from './src/styles'


import TravelItemContainer from './src/interface/Components/TravelItemContainer'
import { myTrips } from './src/infrastructure/Models/mockData';
import { Trip } from './src/infrastructure/Models/Models';

export default function App() {
  return (
    <View style={styles.container}>
      <TravelItemContainer
        trips={splitTrips(DateTypes.PRESENT, myTrips)} />
      <TravelItemContainer
        trips={splitTrips(DateTypes.FUTURE, myTrips)}
      />
      <TravelItemContainer
        trips={splitTrips(DateTypes.PAST, myTrips)}
      />
      <Button
        title='+'
        onPress={() => {/*** */ }}
      />
    </View>
  );
}

function splitTrips(type: DateTypes, trips: Trip[]) {
  switch (type) {
    case DateTypes.PAST:
      return trips.filter((trip) => trip.endDate < Date.now())
    case DateTypes.PRESENT:
      return trips.filter((trip) => (trip.endDate > Date.now() && trip.startDate > Date.now()))
    case DateTypes.FUTURE:
      return trips.filter((trip) => trip.startDate > Date.now())
  }
}

enum DateTypes {
  PAST,
  PRESENT,
  FUTURE
}
