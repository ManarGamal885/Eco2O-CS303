//Rahma
import React from 'react';
import { 
  StyleSheet, Text, View, Image,
} from 'react-native';
import Header from './Components/Header';
import InputFile from './Components/InputFile';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Header */}
        <View style={styles.headerStyle}>
          <View style={styles.signUp}>
            <Text>Sign up</Text>
          </View>

          <View>
            <Image
              source={require('../assets/undraw_connected_world_wuay.png')}
              style={styles.image}
            />
          </View>
        </View>
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle:{
    flexDirection: 'row',
  },
  signUp: {},
  width: 164,
  height: 64,
  fontSize: 40,
  fontWeight: 'bold',
  color: '#000000',
  textShadowColor: '#B7B7B7',
  textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 6,
  justifyContent: 'flex-start',
  image: {

  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',

  }
});