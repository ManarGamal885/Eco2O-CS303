//Mabrouk
import React, { useState } from 'react'
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

export default function question2() {

  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <View style={styles.header}>
          <Image source={require("../../assets/undraw_Questions_re_1fy7.png")}
            style={{ width: 180, height: 180 }} />
              
        </View>
        <View style={{ paddingTop:50 ,paddingLeft:100}} >
        <Text > this is the first task</Text>
     
        </View>
        <StatusBar style="auto"></StatusBar>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {

    flexDirection: 'column',
    marginLeft: 90,
    marginTop: 50

  },
})