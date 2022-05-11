//Manar
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native-web';
export default function News() {
  return (
    <View style={styles.con}>
      <View style={styles.con1}>
        <Image style={styles.imH} source={require('../assets/h.png')} />
        <View style={styles.textcon}>
          <Text style={styles.H1}>News </Text>
          <Text style={styles.H2} >It's Only One Click To Keep</Text>
          <Text style={styles.H2} >Track With The World</Text>
        </View>
      </View>


      <View style={styles.con2}>
        <Text style={styles.options}>For You</Text>
        <View style={styles.newsCon}>
          <View style={styles.news}>

            <TouchableOpacity style={styles.touch1}>
              <Image style={styles.Im} source={require('../assets/earth.jpg')} />
              <Text style={styles.txt}>Earth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2}>
              <Image style={styles.Im} source={require('../assets/air.jpg')} />
              <Text style={styles.txt}>Air</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.news}>

            <TouchableOpacity style={styles.touch1}>
              <Image style={styles.Im} source={require('../assets/forest.jpg')} />
              <Text style={styles.txt}>Forest Fires</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2}>
              <Image style={styles.Im} source={require('../assets/global.jpg')} />
              <Text style={styles.txt}>Global Warming</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.news}>

            <TouchableOpacity style={styles.touch1}>
              <Image style={styles.Im} source={require('../assets/ocean.jpg')} />
              <Text style={styles.txt}>Oceans</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2}>
              <Image style={styles.Im} source={require('../assets/pla.jpg')} />
              <Text style={styles.txt}>Plastic</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
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
    position: 'absolute',
    top: 0,
  },
  con2: {
   
    backgroundColor: '#F9F9F9',
    position: 'absolute',
    bottom: 0,
  },
  news: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imH: {
    width: 171,
    height: 124,
  },
  textcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  H1: {
    fontSize: 30,
    fontWeight: '700',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  H2: {
    fontSize: 15,
    color: '#999999'
  },
  options: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    margin: 20,
  },
  Im: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  touch1: {
    width: 125,
    height: 125,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touch2: {
    width: 125,
    height: 125,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  txt: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

})