import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import * as React from "react";
import { AuthContext } from "./Utils";
import { logout } from "../firebase/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { render } from "react-dom/cjs/react-dom.production.min";
import ProfileBackground from "../assets/c2b37edc71d4943cc2c51f202a5e41dd.jpg";
export default function Map({ navigation }) {
  return (
    <ImageBackground
      style={styles.ProfileBackground}
      source={ProfileBackground}
    >
      <ScrollView>
        <View style={{ marginTop: 100, paddingLeft: 50 }}>
          <Text style={styles.text}>1- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>2- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>3- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>4- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>5- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>6- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>7- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>8- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>9- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>10- elgiza st: ahmed maher</Text>
          <Text style={styles.text}>11- elgiza st: ahmed maher</Text>
        </View>
        <View style={{ paddingBottom: 40,paddingTop:40 }}>
          <Button
            title={"go to map"}
            color="#004D25"
            onPress={() => navigation.navigate("Map2")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ProfileBackground: {
    width: 414,
    height: 904,
    flex: 1,
  },
  text: {
    paddingTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
});
