import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './pages/Register';

export default function register() {
  return (
    <View style={styles.Container}>
      <Register/>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});
