import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";
import { render } from "react-dom/cjs/react-dom.production.min";

export default class Firstimg extends Component {
    static navigationoption={
        header:null
    }
  componatwillmount() {
    setTimeout(() => {
      this.props.navigation.navigate("SignIn");
    }, 4000);
    console.log("her the first app")
  }

  render() {
    return (
      <Image source={require("../assets/wellcome.png")} style={styles.logo} />
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    height: "100%",
    width: "100%",
  },
});
