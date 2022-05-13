//Rahma
//Rahma note that the forgetpass2 page will be updated at the same page of forgetpass
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login, getUserToken } from "../firebase/Auth";

export default function ForgetPass({ navigation }) {
  const [email, setEmail] = useState("");

  function setnewnewpassword() {
    forgetpassword
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Header */}
        <View style={styles.imageStyleHeader}>
          <Image
            source={require("../assets/lock-icon-11.png")}
            style={styles.imageHeader}
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.textStyle}>Forget</Text>

          <Text style={styles.textStyle}>Password</Text>
        </View>
      </View>
      <View style={styles.email}>
        {/* Email  */}
        <View style={styles.imageStyleEmail}>
          <Image
            source={require("../assets/forgetPass.png")}
            style={styles.imageEmail}
          />
        </View>

        <View style={styles.Email}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={setnewnewpassword}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 50,
  },
  imageStyleHeader: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 20,
    // paddingBottom: 10,
  },
  imageHeader: {
    width: 60,
    height: 81,
    // paddingBottom: 5,
  },
  text: {
    width: 349,
    height: 125,
    // paddingTop: 45,
  },
  textStyle: {
    textAlign: "center",
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  email: {
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 50,
  },
  imageStyleEmail: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageEmail: {
    width: 277,
    height: 210,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#9C8A8A",
    width: 300,
  },
  Email: {
    // paddingBottom: 10,
    // paddingTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  buttonStyle: {
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004D25",
    borderRadius: 50,
    width: 250,
    height: 72,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    textAlign: "center",
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
  },
});
