import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from './pages/SignIn'

export default function signIn() {
  return (
    <View style={styles.contaner}>
      <SignIn/>
    </View>
  )
}

const styles = StyleSheet.create({
  contaner: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
