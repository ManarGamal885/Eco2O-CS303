//Manar
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native-web'


export default function ContactUs() {
  return (
    <View style={styles.home}>
      <View style={styles.cont2}>
        <Image
          style={styles.image}
          source={require('../assets/contact.png')}
        />
        <Text style={styles.text}>CONTACT US</Text>
      </View>
      <View style={styles.cont1}>
        <View style={styles.v}>
          <Image
          style={styles.call}
          source={require('../assets/icons/phone.png')}
          />
          <Text style={styles.textCont}>011******4</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.face}
          source={require('../assets/icons/face.png')}
          />
          <Text style={styles.textCont}>Eco2O</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.msg}
          source={require('../assets/icons/message.png')}
          />
          <Text style={styles.textCont}>Eco2O@</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.ins}
          source={require('../assets/icons/instagram.png')}
          />
          <Text style={styles.textCont}>Eco2O_E</Text>
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont1: {
    backgroundColor: '#F9F9F9',
    height: 500,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cont2: {
    backgroundColor: 'white',
    height: 500,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  text: {
    fontSize: 35,
    marginTop: 10,
    marginBottom: 130,
    fontWeight: '800',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  v: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textCont:{
    fontSize:20,
    fontWeight:'500',
    marginTop:30,
    marginBottom:50,
    marginLeft:100,
  },
  call:{
    width:25,
    height:25,
    marginBottom:15,
    marginLeft:20
  },
  face:{
    width:30,
    height:30,
    marginBottom:15,
  },
  msg:{
    width:30,
    height:30,
    marginLeft:20
  },
  ins:{
    width:35,
    height:35,
    marginBottom:15,
    marginLeft:20
  },
})