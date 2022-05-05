//Rahma
import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image,
  TouchableOpacity, TextInput
} from 'react-native';


export default function App({navigation}) {

  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerStyle}>
          <View style={styles.signUpStyle}>
            <Text style={styles.signUpText}>
              Sign up
            </Text>
          </View>

          <View style={styles.imageStyle}>
            <Image
              source={require('../assets/undraw_connected_world_wuay.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>

      {/* Inputs */}
      <View style={styles.inputs}>
        <View style={styles.rectangle}>
          <View style={styles.rectangleContant}>
            <View style={styles.name_username}>
              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='Name'
                  onChange={changeHandler}
                />
              </View>

              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='Username'
                  onChange={changeHandler}
                />
              </View>
            </View>

            <View style={styles.EPC}>
              <TextInput
                style={styles.fullText}
                placeholder='Email'
                onChange={changeHandler}
              />

              <TextInput
                style={styles.fullText}
                placeholder='Password'
                onChange={changeHandler}
              />

              <TextInput
                style={styles.fullText}
                placeholder='Confirm password'
                onChange={changeHandler}
              />
            </View>

            <View style={styles.name_username}>
              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='City'
                  onChange={changeHandler}
                />
              </View>

              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='State'
                  onChange={changeHandler}
                />
              </View>
            </View>

            <View style={styles.name_username}>
              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='Gender'
                  onChange={changeHandler}
                />
              </View>

              <View style={styles.Space}>
                <TextInput
                  style={styles.halfText}
                  placeholder='Age'
                  onChange={changeHandler}
                />
              </View>
            </View>

            <View style={styles.EPC}>
              <TextInput
                style={styles.fullText}
                placeholder='Phone number'
                onChange={changeHandler}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 260
  },
  headerStyle:{
    flexDirection: 'row',
  },
  signUpStyle: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText:{
    width: 164,
    height: 64,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#B7B7B7',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 6,
    justifyContent: 'flex-start',
  },
  imageStyle: {
    paddingLeft: 10
  },
  image: {
    width: 196,
    height: 118
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    
  },
  rectangle: {
    backgroundColor: '#F9F9F9',
    width: 414,
    height: 788,
    borderRadius: 50,
    paddingTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleContant: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: 350
  },
  name_username: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    paddingBottom: 5,
    paddingTop: 5
  },
  Space: {
    paddingLeft: 2,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  halfText:{
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#9C8A8A',
    width: 143,
    justifyContent: 'space-between',
    
    
  },
  EPC: {
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  fullText: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#9C8A8A',
    width: 300,
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  buttonStyle: {
      alignContent: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#004D25',
      borderRadius: 50,
      width: 300,
      height: 72,
      justifyContent: 'space-between',
      // shadowColor: 'black',
      // shadowOffset: {width: 0, height: 4},
      // shadowRadius: 100,
  },
  buttonText: {
      paddingTop: 8,
      color: 'white',
      textShadowColor: '#5B5959',
      textShadowOffset: {width: 0, height: 4},
      textShadowRadius: 6,
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      // paddingTop: 10
  }
});