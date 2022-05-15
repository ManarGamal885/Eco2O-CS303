import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Button
  } from "react-native";
  import * as React from "react";
  import { AuthContext } from "./Utils";
  import { logout } from "../firebase/Auth";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { render } from "react-dom/cjs/react-dom.production.min";
  export default function Map({ navigation }) {
      return(
          <ScrollView>
        <View style={{padding:100}}>
            <Text style={{paddingTop:50}}>1- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>2- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>3- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>4- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>5- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>6- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>7- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>8- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>9- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>10- elgiza st: ahmed maher</Text>
            <Text style={{paddingTop:50}}>11- elgiza st: ahmed maher</Text>
        </View>
        <View style={{paddingBottom:40}}>
        <Button title={"go to map"} color='#004D25' onPress={() => navigation.navigate('Map2')}/>
        </View>
        </ScrollView>
      )}
  const styles = StyleSheet.create({})