import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ForgetPass from './pages/ForgetPass';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgetPass/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
