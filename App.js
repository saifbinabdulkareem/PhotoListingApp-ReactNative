import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import CameraExample from './camera'
import Mainfile from './app/mainfile'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainComponent}>
        <Mainfile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // color: 'white',
    // backgroundColor: 'grey'
  },
  mainComponent: {
    flex: 1,
    borderWidth: 1,
    width: '100%',
  },
  h1: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    letterSpacing: 3,
    fontStyle: 'italic',
    fontWeight: '500',
    textShadowColor: 'white',
    textShadowRadius: 25,
  },
});
