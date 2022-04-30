//Rahma
//Rahma note that the forgetpass2 page will be updated at the same page of forgetpass
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';
import Email from '../Components/Email';
import Confirm from '../Components/Confirm';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Header */}
        <Header/>
      </View>
      <View style={styles.email}> 
        {/* Email  */}
        <Email/>
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
  header: {
    justifyContent: 'center',
    alignContent: 'center',
    // paddingTop: 200,
  },
  email: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 50
  },
  // confirm:{
  //   paddingTop:20,
  // }
});
