//Rahma
import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ImageBackground,
  Image, TextInput, TouchableOpacity
} from 'react-native';
import packground2 from '../assets/packground2.png';

export default function App() {

  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <ImageBackground style={styles.background} source={packground2}>
      {/* Background */}

      <View style={styles.logoStyle}>
        {/* Logo */}
        <View style={styles.rectangle}>
          <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
          />
        </View>
      </View>

      <View style={styles.textLineStyle}>
        {/* Text Lines */}
        <View style={styles.text}>
          <Text style={styles.text1}>
              Bulding Zero Waste
          </Text>
          <Text style={styles.text2}>
              Communities
          </Text>
        </View>
      </View>

      <View style={styles.EmailPassword}>
        {/* Email and password */}
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChange={changeHandler}
          />

          <TextInput
            style={styles.input}
            placeholder='Password'
            onChange={changeHandler}
          />
        </View>

        <View style={styles.buttonsStyle}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textOR}>Or</Text>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
                
          <View style={styles.forgetpassLineStyle}>
            <Text style={styles.forgetpassLine}>forget Password</Text>
          </View>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    width: 414,
    height: 904,
  },
  logoStyle: {
    paddingTop: 20
  },
  rectangle: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 414,
  height: 120,
  backgroundColor: '#ffffff',
},
logo:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width:277,
  height: 120,
},
textLineStyle:{
  paddingTop: 20,
},
text: {
  width: 294,
  height: 78
},
text1: {
  textAlign: 'center',
  color: '#357142',
  fontSize: 25,
  fontWeight: 'bold',
  textShadowColor: '#B7B7B7',
  textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 6,
},
text2: {
  textAlign: 'center',
  color: '#357142',
  fontSize: 25,
  fontWeight: 'bold',
  textShadowColor: '#B7B7B7',
  textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 6,
},
EmailPassword: {},
inputStyle: {
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 10,
  paddingBottom: 25,
},
  input: {
  marginBottom: 10,
  borderBottomWidth: 1,
  borderColor: '#9C8A8A',
  width: 250,
},
buttonsStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
button: {},
button1: {
  alignContent: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#004D25',
  borderRadius: 50,
  width: 250,
  height: 72,
  justifyContent: 'space-between',
},
button2: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#598B71',
  borderRadius: 50,
  width: 250,
  height: 72,
  justifyContent: 'space-between',
},
buttonText: {
  color: 'white',
  textShadowColor: '#424242',
  textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 6,
  textAlign: 'center',
  fontSize: 30,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: 10
},
textOR:{
  color: 'gray',
  fontSize: 20,
  textAlign: 'center',
  paddingTop: 3,
  paddingBottom: 3
},
forgetpassLineStyle: {
  justifyContent: 'space-between',
  alignContent: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10
},
forgetpassLine: {
  color: '#3366B4',
  fontSize: 20,
  width: 193,
  height: 31,
  textAlign: 'center',
},
});