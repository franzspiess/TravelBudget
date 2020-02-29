import { StyleSheet, View } from "react-native"
import { vh,vw } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
  container: {
    marginTop: vh(7),
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  itemBox: {
    height: vh(11),
    width: vh(8),
    justifyContent:'space-evenly',
    alignItems:'center',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginLeft: vh(2)
  },
  buttonRound:{
    alignSelf: 'center',
    borderRadius:100,
    backgroundColor: 'gray'
  }
});
