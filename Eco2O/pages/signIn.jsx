//Rahma
import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {useEffect, useState,useContext}  from 'react';

import * as React from "react";
import { 
  ImageBackground,
  Image, TouchableOpacity
} from 'react-native';
import packground2 from '../assets/packground2.png';
import {login, getUserToken} from "../firebase/Auth";
import {AuthContext} from "./Utils";


export default function SignIn({navigation}) {

  const {signIn} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signInUser() {
      // console.log(" sayed",email," 351c5zxv1zx",password)
      // login('mohamed@gmail.com', "123456789").then(()=>console.log("okkey")).catch((e)=>{
      //   console.log(e.message);
      // })
        login(email, password).then(() => {
          console.log('here sign in*****')
            signIn({email, password, token : getUserToken()});
            navigation.navigate('Home1');
        }).catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
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
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={setPassword}
            secureTextEntry={true}
            
          />
        </View>

        <View style={styles.buttonsStyle}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button1}  onPress={signInUser} >
              
              <Text style={styles.buttonText}>Sign in</Text>
              
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textOR}>Or</Text>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
                
          <View style={styles.forgetpassLineStyle}>
            <Text style={styles.forgetpassLine} onPress={() => navigation.navigate('Forget')}>forget Password</Text>
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