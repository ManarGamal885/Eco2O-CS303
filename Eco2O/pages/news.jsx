//Manar
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Button } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native-web';
import { Constants } from 'expo';


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

            <TouchableOpacity style={styles.touch1} onPress={() => {
              Linking.openURL("https://www.nasa.gov/content/nasa-earth-science-news")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
              <Image style={styles.Im} source={require('../assets/earth.jpg')}   />
              <Text style={styles.txt}>Earth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2} onPress={() => {
              Linking.openURL("https://earthdata.nasa.gov/earth-observation-data/near-real-time/hazards-and-disasters/air-quality?fbclid=IwAR1LUgtJqhKJTMTyE-Azq7Xqio7um1tMA4C0sNo9mJuPsbK1b-k8-MRP8WY")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
              <Image style={styles.Im} source={require('../assets/air.jpg')} />
              <Text style={styles.txt}>Air pollution</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.news}>

            <TouchableOpacity style={styles.touch1} onPress={() => {
              Linking.openURL("https://www.euronews.com/tag/forest-fires?fbclid=IwAR2tZQylS_RksI1zMoWbP1v3KuGVmqQ41jx3iBJptSSAPzu2TrOFYDdIu7U")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
              <Image style={styles.Im} source={require('../assets/forest.jpg')} />
              <Text style={styles.txt}>Forest Fires</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2} onPress={() => {
              Linking.openURL("https://climate.nasa.gov/?fbclid=IwAR3__rxOBcjmpReS-Ti-JEtqcxDXhdotOEINBPFZNn4wz1cfxd1UjyYBl6w")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
              <Image style={styles.Im} source={require('../assets/global.jpg')} />
              <Text style={styles.txt}>Global Warming</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.news}>

            <TouchableOpacity style={styles.touch1} onPress={() => {
              Linking.openURL("https://l.facebook.com/l.php?u=https%3A%2F%2Fsealevel.nasa.gov%2Fnews-features%2F%3Ffbclid%3DIwAR2wDFbReIUwgj5Mgfm7lDJpOzda8zPdf5NWaeCvbgxxVOtWxWAAGVwoU5o%23%3A~%3Atext%3DSea%2520Level%2520to%2520Rise%2520up%2Cby%25202050%252C%2520Interagency%2520Report%2520Finds%26text%3DInteragency%2520Report%2520Finds-%2CNASA%252C%2520NOAA%252C%2520USGS%252C%2520and%2520other%2520U.S.%2520government%2520agencies%2520project%2Cover%2520the%2520past%2520100%2520years&h=AT2bCpeiGFPXn8U5Iadqd6bOEIt6kRbkM1pkZQ19RG4RaxYYmIm5cETb71DK55cyRy0AjQIlM6VWIcRjfT9elhHu7liZPwhvQ0vyPfYY7tWlcuGQDcILPYzBF8PwBPpniwVTXueY-mRpOYg")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
              <Image style={styles.Im} source={require('../assets/ocean.jpg')} />
              <Text style={styles.txt}>Oceans</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch2} onPress={() => {
              Linking.openURL("https://earthdata.nasa.gov/learn/articles/ocean-plastic?fbclid=IwAR1C0f3qAVx0qchwqormgFn9VVVi1ml9fj0SVoNhemZCzm3q67gAKBRxwiw")
                .catch(err => {
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
            }}>
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