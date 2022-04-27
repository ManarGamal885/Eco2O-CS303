//Mabrouk

import React from 'react'
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from "react-native";
export default function Question() {
  return (
    <ScrollView style={{padding: 30}}>
    <View>
      <View style={styles.header}>
        <Image source={require("../../assets/undraw_Questions_re_1fy7.png")}
          style={{ width: 110, height: 110 }} />
        <View>
          <Text style={{ marginLeft: 80, marginTop: 30, fontSize: 35 }}>Question</Text>
          <Text style={{ marginLeft: 70, marginTop: 0, opacity: 0.6 }}>Take A Quize And</Text>
          <Text style={{ marginLeft: 70, marginTop: 0, fontSize: 15, opacity: 0.6 }}>Increaze you Bouns</Text>
        </View >
      </View >
      <View style={styles.mid}>
        <Text></Text>
      <Text style={{fontSize: 20 }} >you will get three questions</Text>
      <Text style={{fontSize: 20 }}>one point for each correct</Text>
      <Text style={{fontSize: 20 }}>answer</Text>
      <Text></Text>
      <Image source={require("../../assets/undraw_My_answer_re_k4dv.png")}
          style={{ width: 110, height: 110, borderRadius:"63"}} />
          <Text></Text>
      </View >
      <View style={{padding:50}}>
      <View  style={{ height:40, overflow:'hidden', 
       borderRadius:50, backgroundColor: '#004D25' }}>
      <Button title={"take Quiz"}  color= '#ffff' />
      
      </View>
      </View>
      <StatusBar style="auto"></StatusBar>
      
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  header: {

    flexDirection: 'row',
    marginLeft: 7,
    marginTop: 5

  },
  mid:{
    marginTop:210,
    borderRadius:20,
    margin:20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#AFC6BA"

  }


});