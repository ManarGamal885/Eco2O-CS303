import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import InputFile from './Components/InputFile';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <Header/>
      </View>
      <View style={styles.inputs}>
        {/* Inputs */}
        <InputFile/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',

  }
});
