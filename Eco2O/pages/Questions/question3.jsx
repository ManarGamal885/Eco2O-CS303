//Mabrouk
import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { getUserUId } from "../../firebase/Auth";
import { getBounsByUserId } from "../../firebase/Bouns";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { addBouns } from '../../firebase/Bouns';

export default function Question3({ navigation, route }) {
  let { buons } = route.params;
  console.log("the number of the score", buons);
  // let finalbouns;
  function addBounsAndCheck() {
    if (buons === 0) {
      alert("There is no bouns :( !!");
      navigation.navigate('Home');
    } else {
      getUserUId().then((id) => {
        getBounsByUserId(id).then((data) => {
          let obj = {};
          console.log("data =" ,data)

          if(data.length===0){
            console.log("object is null")
            obj={id:id,finalbouns:0}
          }
          else{
            obj={id:id,finalbouns:data[0].finalbouns}
          }
          console.log("the bouns here =", buons,"the final bouns" , obj.finalbouns)
          addBouns({ id: id, finalbouns:(buons + obj.finalbouns) });
          console.log(id);
          navigation.navigate('Home');
        })
      });

    }
  }

  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <View style={styles.header}>
          <Image source={require("../../assets/undraw_Questions_re_1fy7.png")}
            style={{ width: 120, height: 120,borderRadius:100 }} />

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 25, paddingTop: 10, paddingRight: 100 }}>Your Final Scor</Text>
          <View style={styles.styletext}>
            <Text></Text>
            <Text style={styles.text} >{buons}</Text>
            <Text></Text>
          </View>
        </View>
        <Text></Text>
        <View style={styles.mid}>
          <Text></Text>
          <Text style={{ fontSize: 20 }} >you will get three questions</Text>
          <Text style={{ fontSize: 20 }}>one point for each correct</Text>
          <Text style={{ fontSize: 20 }}>answer</Text>
          <Text></Text>
          <Image source={require("../../assets/undraw_Order_confirmed_re_g0if.png")}
            style={styles.image} />
          <Text></Text>
        </View >

        <View style={{ padding: 50 }}>
          <View style={styles.button}>
            <Button title={"Back to home"} color='white' onPress={addBounsAndCheck} />

          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {

    flexDirection: 'column',
    marginLeft: 120,
    marginTop: 50
  },
  mid: {
    marginTop: 140,
    borderRadius: 20,
    margin: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AFC6BA"
  },
  button: {
    height: 40,
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: '#004D25',
  },
  styletext: {
    borderRadius: 50,
    backgroundColor: '#004D25',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 50,
    height: 20,
    fontSize: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 17
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 50
  }

})