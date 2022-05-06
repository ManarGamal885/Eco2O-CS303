//Manar
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native-web';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function home({ navigation }) {
  return (
    <ScrollView>

      <View>
    
      <View style={styles.con1}>
        <Image style={styles.imH} source={require('../assets/h.jpeg')} />
        <View style={styles.textcon}>
          <Text style={styles.H1}>Welcome in Your Home </Text>
          <Text style={styles.H2} >Choose Your Feature Now</Text>
        </View>
      </View>

      <View style={styles.con}>
      <View style={styles.con2}>
        <Text style={styles.options}>Options for You</Text>
        <View style={styles.optionsCon}>
          
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Scan')}>
              <Image style={styles.Im} source={require('../assets/scan.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('News')}>
              <Image style={styles.Im} source={require('../assets/news.webp')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Suggestion')}>
              <Image style={styles.Im} source={require('../assets/questions.webp')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Q1')}>
              <Image style={styles.Im} source={require('../assets/sug.jpg')} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  con1: {
    
    flexDirection: 'row',
    backgroundColor: 'white',
    
    top: 0,
  },
  con2: {
   
    backgroundColor: '#F9F9F9',
    
    bottom: 0,
  },
  imH: {
    width: 171,
    height: 124,
  },
  H1: {
    fontSize: 20,
    fontWeight: '700',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  H2: {
    fontSize: 15,
    color: '#999999'
  },
  textcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  options: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    margin: 20,
  },
  optionsCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9'
  },
  touch: {
    width: 313,
    height: 199,
    borderRadius: 20,
    marginBottom: 20,
  },
  Im: {
    width: 313,
    height: 199,
    borderRadius: 20,
    opacity: 90
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',

  },
})