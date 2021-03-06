//Mabrouk
import { useState, useEffect } from 'react'
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

export default function Scancode({ navigation }) {
  let [number, setnumber] = useState(0);
  function setnumberincr() {
    setnumber(number++);
  }

  function setnumberdecr() {
    if (number >= 0)
      setnumber(number--);
  }

  return (
    <ScrollView style={{ padding: 50, paddingLeft: 20 }}>
      <View>
        <View style={styles.header}>
          <Image source={require("../../Eco2O/assets/qrcode.png")}
            style={{ width: 100, height: 100, paddingTop: 20 }} />
          <View>
            <Text style={{ marginLeft: 45, marginTop: 30, fontSize: 30 }}>Scan your code</Text>
            <Text style={{ marginLeft: 50, marginTop: 0, opacity: 0.6 }}>Scan Your Code Now And we</Text>
            <Text style={{ marginLeft: 70, marginTop: 0, fontSize: 15, opacity: 0.6 }}>And take Your bouns</Text>
          </View >
        </View >
        <View style={{ marginTop: 170, marginLeft: 125, }}>
          <Image source={require("../../Eco2O/assets/iconecamera.png")}
            style={{ width: 110, height: 110 }} />
        </View>
        <View>
          <Text style={{ marginLeft: 81, marginTop: 30, fontSize: 30 }}>Scan your code</Text>
        </View>
        <View style={{paddingLeft:20}}>
        <View style={{ paddingTop: 70, paddingLeft: 90, flexDirection: "row" }}>
          <View style={{
            height: 40, overflow: 'hidden', width: 40,
            borderRadius: "50", backgroundColor: '#004D25'
          }}>
            <Button title={"+"} color='white' onPress={setnumberincr} />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 24 }}> {number} </Text>
          </View>
          <View style={{
            height: 40, overflow: 'hidden', width: 40,
            borderRadius: "50", backgroundColor: '#004D25'
          }}>
            <Button title={"-"} color='white' onPress={setnumberdecr} />
          </View>
        </View>
        
        <View style={{ padding: 50 }}>
          <View style={{height: 40, overflow: 'hidden',borderRadius: "50", backgroundColor: '#004D25',}}>
            <Button title={"scan"} color='white' onPress={() => navigation.navigate('Scanner2', { numberofbottle: number })} />
          </View>
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
  mid: {
    marginTop: 210,
    borderRadius: 20,
    margin: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AFC6BA"
  }

});

