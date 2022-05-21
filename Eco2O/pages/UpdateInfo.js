import { Component } from "react";
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
import { updateEmail } from "firebase/auth";

const routeName = "Profile";

export { routeName };

export default function UpdateInfo({ navigation, route }) {
  const { Email, PassWord, Name, UserName, City, State, Gender, Age, PhonNum } =
    route.params;

  const HandleOnChangeText = (vale, fieldName) => {
    setUserInfo({ ...route, [fieldName]: vale });
  };
  console.log(route);

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
    <ImageBackground
      style={styles.ProfileBackground}
      source={ProfileBackground}
    >
      {/* Header */}
      <View style={styles.Header}>
        <View style={styles.TextStyle}>
          <Text style={styles.txtStyle}>Profile Information</Text>
          {/* <Text style={styles.txtStyle}>Information:</Text> */}
        </View>
      </View>

      <View style={styles.AllItems}>
        <TextInput
          style={styles.textIn}
          value={Email}
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "Email")}
        />
        <TextInput
          style={styles.textIn}
          value={PassWord}
          placeholder="Password"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "PassWord")}
        />
        <TextInput
          style={styles.textIn}
          value={Name}
          placeholder="Name"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "Name")}
        />
        <TextInput
          style={styles.textIn}
          value={UserName}
          placeholder="Username"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "UserName")}
        />
        <TextInput
          style={styles.textIn}
          value={City}
          placeholder="City"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "City")}
        />
        <TextInput
          style={styles.textIn}
          value={State}
          placeholder="State"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "State")}
        />
        <TextInput
          style={styles.textIn}
          value={Gender}
          placeholder="Gender"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "Gender")}
        />
        <TextInput
          style={styles.textIn}
          value={Age}
          placeholder="Age"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "Age")}
        />
        <TextInput
          style={styles.textIn}
          value={PhonNum}
          placeholder="Phon Number"
          placeholderTextColor="gray"
          onChangeText={(value) => HandleOnChangeText(value, "PhonNum")}
        />
      </View>

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

        {/* Settings us button */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/icons8-settings-64.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Contact")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Settings</Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ProfileBackground: {
    width: 414,
    height: 904,
    flex: 1,
  },
  AllItems: {
    // paddingLeft: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    // flexDirection: "row",
    // paddingTop: 50,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 414,
    height: 200,
    backgroundColor: "#004D25",
    marginBottom: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    // textAlign: 'center'
  },
  ProfileStyle: {
    backgroundColor: "#EEEDED",
    width: 283,
    height: 488,
    paddingTop: 20,
  },

  TextStyle: {
    // paddingBottom: 10
  },
  txtStyle: {
    fontSize: 25,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    // paddingBottom: 5,
  },
  ContantStyle: {
    paddingLeft: 20,
  },
  ScrollStyle: {
    paddingRight: 10,
  },
  InsideScroll: {
    width: 283,
    height: 488,
  },
  Contant: {
    flexDirection: "row",
    paddingRight: 10,
    paddingBottom: 5,
  },
  Icons: {
    width: 50,
    height: 50,
    paddingTop: 3,
  },
  iconText: {
    fontSize: 17,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingLeft: 10,
    color: "black",
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
  textIn: {
    borderColor: "#004D25",
    borderWidth: 1,
  },
});
