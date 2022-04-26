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

const Scancode = () => {
  return (
    <ImageBackground
      source={require("../assets/packground2.png")}
      style={styles.background}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text} >Building Zero Wast Communities</Text>
      <ScrollView style={{ padding: 30 }}>
        <View style={{ padding: 10 }}>
          <Text>Email</Text>
        </View>

        <View style={{ paddingLeft: 0 }}>
          <TextInput placeholder={"example@gmail.com"}></TextInput>
        </View>
        <StatusBar style="auto"></StatusBar>
      </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  background: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    margin: 20
  },
  logo: {
    height: 150,
    width: 300,
    marginTop: 40
  },

});

export default Scancode;