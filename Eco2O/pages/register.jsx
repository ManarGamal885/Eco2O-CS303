//Rahma

import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image,
  TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView
} from 'react-native';
import { register, getUserUId } from "../firebase/Auth";
import { addUser, getUserById } from "../firebase/User";
import { useHeaderHeight } from "@react-navigation/elements";
export default function Register({ navigation }) {

  const [text, setText] = useState('');
  const [name, setname] = useState('');
  const [usename, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [city, setcity] = useState('');
  const [email, setEmail] = useState('');
  const [state, setstate] = useState('');
  const [gender, setgender] = useState('');
  const [age, setage] = useState('');
  const [phone, setphone] = useState('');


  function registerUser() {
    console.log('this is email ', email);
    if (email === '' || password === '' || name === '' ||
      usename === '' || confirmpassword === '' || city === ''
      || state === '' || gender === '' || age === '' || phone === '') {
      alert("email or password is empty!");
    } else {
      register(email, password).then(() => {

        console.log(getUserUId());
        getUserUId().then((id) => {
          // console.log(id);
          addUser({ id: id, email, password, name, usename, confirmpassword, city, state, gender, age, phone });
        });
        navigation.navigate('SignIn');
      }).catch((e) => {
        console.log(e.message);
      });
    }
  }
  const headerHeight = useHeaderHeight();
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


          <ScrollView>
            <View style={styles.name_username}>
            
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='Name'
                      onChangeText={setname}
                      placeholderTextColor="gray"
                    />
                  </View>
            
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='Username'
                      onChangeText={setusername}
                      placeholderTextColor="gray"
                    />
                  </View>
              
            </View>
          
                <View style={styles.EPC}>
                  <TextInput
                    style={styles.fullText}
                    placeholder='Email'
                    onChangeText={setEmail}
                    placeholderTextColor="gray"
                  />

                  <TextInput
                    style={styles.fullText}
                    placeholder='Password'
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor="gray"


                  />

                  <TextInput
                    style={styles.fullText}
                    placeholder='Confirm password'
                    onChangeText={setconfirmPassword}
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                  />
                </View>
           
            <View style={styles.name_username}>
            
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='City'
                      onChangeText={setcity}
                      placeholderTextColor="gray"
                    />
                  </View>
               
             
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='State'
                      onChangeText={setstate}
                      placeholderTextColor="gray"
                    />
                  </View>
                
            </View>

            <View style={styles.name_username}>
              
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='Gender'
                      onChangeText={setgender}
                      placeholderTextColor="gray"
                    />
                  </View>
               
          
                  <View style={styles.Space}>
                    <TextInput
                      style={styles.halfText}
                      placeholder='Age'
                      onChangeText={setage}
                      placeholderTextColor="gray"
                    />
                  </View>
              
            </View>
          
                <View style={styles.EPC}>
                  <TextInput
                    style={styles.fullText}
                    placeholder='Phone number'
                    onChangeText={setphone}
                    placeholderTextColor="gray"
                  />
                </View>
           
            </ScrollView>
            <View style={styles.button}>
              <TouchableOpacity style={styles.buttonStyle} onPress={registerUser}>
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
  container1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  headerStyle: {
    flexDirection: 'row',
  },
  signUpStyle: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    width: 164,
    height: 64,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 4 },
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
    paddingTop: 0,

  },
  rectangle: {
    backgroundColor: '#F9F9F9',
    width: 414,
    height: 700,
    borderRadius: 50,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleContant: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: 100
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
  halfText: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#9C8A8A',
    width: 143,
    justifyContent: 'space-between',
  },
  EPC: {
    justifyContent: 'center',
    paddingBottom: 20,
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
  },
  buttonText: {
    paddingTop: 8,
    color: 'white',
    textShadowColor: '#5B5959',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
});