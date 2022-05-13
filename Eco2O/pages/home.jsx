//Manar
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import * as React from "react";
import {AuthContext} from "./Utils";
import { isSignedIn, logout } from "../firebase/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  function signOutUser() {
    signOut();
    logout();
    // no need explicitly to redirect for the sign-in screen
    // navigation.navigate('SignIn');
  }



function signout(){
  signOutUser();

  navigation.navigate("SignIn")
}
  return (
    <View>
      <View style={styles.con1}>
        <Image style={styles.imH} source={require("../assets/h.jpeg")} />
        <View style={styles.textcon}>
          <Text style={styles.H1}>Welcome in Your Home </Text>
          <Text style={styles.H2}>Choose Your Feature Now</Text>
        </View>
        <Text style={styles.options}>Options for You</Text>
      </View>

      <View>
        <ScrollView style={styles.ScrollStyle}>
          <View style={styles.optionsCon}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Scan")}
            >
              <Image style={styles.Im} source={require("../assets/scan.jpg")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("News")}
            >
              <Image
                style={styles.Im}
                source={require("../assets/news.webp")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Suggestion")}
            >
              <Image
                style={styles.Im}
                source={require("../assets/questions.webp")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Question1")}
            >
              <Image style={styles.Im} source={require("../assets/sug.jpg")} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.FooterStyle}>
        {/* For footer navigation buttons */}
        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/user.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/home1.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/phone.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Contact")}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Contact us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FooterIcons}>
          <Image
            style={styles.FooterImage}
            source={require("../assets/icons/logOut.png")}
          />

          <TouchableOpacity
            onPress={signout}
            style={styles.FooterButton}
          >
            <Text style={styles.FooterButtonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  con1: {
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1,
    width: 414,
    height: 198,
    paddingTop: 10,
    paddingBottom: 10,
  },
  con2: {
    width: 414,
    height: 758,
    backgroundColor: "#F9F9F9",

    bottom: 0,
  },
  imH: {
    width: 171,
    height: 124,
  },
  H1: {
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  H2: {
    fontSize: 15,
    color: "#999999",
  },
  textcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    margin: 20,
  },
  optionsCon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  touch: {
    width: 313,
    height: 199,
    borderRadius: 20,
    marginBottom: 20,
  },
  Im: {
    width: 313,
    height: 199,
    borderRadius: 20,
    opacity: 90,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  FooterStyle: {
    width: 414,
    height: 70,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
    padding: 10,
  },
  ScrollStyle: {
    height: 550,
    alignContent: "center",
    padding: 10,
  },
});
