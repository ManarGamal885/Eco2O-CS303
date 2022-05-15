import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getUsers } from "../firebase/User";
import { getUserUId } from "../firebase/Auth";
import { getUserById } from "../firebase/User";
import { useState } from "react";
import * as React from "react";
import { AuthContext } from "./Utils";
import { logout } from "../firebase/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileBackground from "../assets/c2b37edc71d4943cc2c51f202a5e41dd.jpg";


export default function Settings({ navigation }) {
  

  return (
    <ImageBackground
    style={styles.ProfileBackground}
    source={ProfileBackground}
  >
    <View>
      <Text>mohamed mabrouk</Text>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ProfileBackground: {
    width: 414,
    height: 904,
    flex: 1,
  },
});
