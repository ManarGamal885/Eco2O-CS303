//Manar
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
import { Dimensions } from "react-native-web";

export default function ContactUs({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  function signOutUser() {
    signOut();
    logout();
  }
  function signout() {
    signOutUser();
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.home}>
      {/* Header Image */}
      <View style={styles.HeaderImageStyle}>
        <Image style={styles.image} source={require("../assets/contact.png")} />
      </View>

      {/* Text after header */}
      <View style={styles.textStyle}>
        <Text style={styles.text}>CONTACT US</Text>
      </View>

      {/* Contant */}
      <View style={styles.ContantStyle}>
        {/* Phone number */}
        <View style={styles.contantIcons}>
          <Image
            style={styles.call}
            source={require("../assets/icons/phone.png")}
          />
          <Text style={styles.textCont}>011******4</Text>
        </View>

        {/* Email */}
        <View style={styles.contantIcons}>
          <Image
            style={styles.msg}
            source={require("../assets/icons/message.png")}
          />
          <Text style={styles.textCont}>Eco2O@gmail.com</Text>
        </View>

        {/* FaceBook */}
        <View style={styles.contantIcons}>
          <Image
            style={styles.face}
            source={require("../assets/icons/face.png")}
          />
          <Text style={styles.textCont}>Eco2O</Text>
        </View>

        {/* Instegram */}
        <View style={styles.contantIcons}>
          <Image
            style={styles.ins}
            source={require("../assets/icons/instagram.png")}
          />
          <Text style={styles.textCont}>Eco2O_E</Text>
        </View>
      </View>
      {/* <View style={styles.cont2}>
        <Image
          style={styles.image}
          source={require('../assets/contact.png')}
        />
        <Text style={styles.text}>CONTACT US</Text>
      </View>
      <View style={styles.cont1}>
        <View style={styles.v}>
          <Image
          style={styles.call}
          source={require('../assets/icons/phone.png')}
          />
          <Text style={styles.textCont}>011******4</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.face}
          source={require('../assets/icons/face.png')}
          />
          <Text style={styles.textCont}>Eco2O</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.msg}
          source={require('../assets/icons/message.png')}
          />
          <Text style={styles.textCont}>Eco2O@</Text>
        </View>
        <View style={styles.v}>
        <Image
          style={styles.ins}
          source={require('../assets/icons/instagram.png')}
          />
          <Text style={styles.textCont}>Eco2O_E</Text>
        </View>
      </View> */}

      {/* Footer bar */}
      <View style={styles.FooterStyle}>
        {/* For footer navigation buttons */}

        {/* Profile button */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/icons8-verified-account-64.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Home button */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/icons8-home-50.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Home</Text>
          </TouchableOpacity>
        </View>

        {/* Contact us button */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/icons8-contact-us-64.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Contact")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Contact us</Text>
          </TouchableOpacity>
        </View>

       

        {/* Logout button */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/icons8-log-out-64.png")}
          />

          <TouchableOpacity onPress={signout} style={styles.FooterButton}>
            <Text style={styles.FooterButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer bar ending */}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
  HeaderImageStyle: {
    width: 414,
    height: 200,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 414,
    height: 240,
  },
  textStyle: {
    paddingTop: 25,
    paddingBottom: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  ContantStyle: {
    width: 414,
    height: 500,
    borderRadius: 50,
    backgroundColor: "#F9F9F9",
    paddingTop: 35,
    paddingLeft: 60
  },
  contantIcons: {
    flexDirection: "row",
    paddingTop: 25
  },
  textCont: {
    fontSize: 22,
    fontWeight: "500",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    paddingLeft: 50
  },
  call: {
    width: 40,
    height: 55,
    paddingRight: 50
  },
  msg: {
    width: 50,
    height: 50,
  },
  face: {
    width: 50,
    height: 50,
  },
  ins: {
    width: 55,
    height: 55,
  },
  FooterStyle: {
    width: 420,
    height: 70,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
  FooterImage: {
    width: 35,
    height: 35,
  },
  FooterButtonText: {
    fontSize: 15,
    color: "gray",
  },
  FooterIcons: {
    padding: 13,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
