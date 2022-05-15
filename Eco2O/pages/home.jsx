//Manar
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import * as React from "react";
import { AuthContext } from "./Utils";
import { logout } from "../firebase/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ImageBackground } from "react-native-web";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
  // const DrawerNavigator = () => {
  //   return (
  //     <DrawerNavigator>
  //       <Drawer.Screen component={Profile} name="Profile" />
  //     </DrawerNavigator>
  //   );
  // };

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
    <View style={styles.Container}>
      {/* Header */}
      <View style={styles.HeaderStyle}>
        {/* Header Image */}
        <View style={styles.HeaderImageStyle}>
        <Image
          style={styles.HeaderImage}
          source={require("../assets/h.jpeg")}
        />
        </View>

        <View style={styles.HeaderText}>
          {/* Header Texts */}
          <Text style={styles.Text1}>Welcome in Your Home </Text>
          <Text style={styles.Text2}>Choose Your Feature Now</Text>
        </View>
      </View>
      {/* Header Ending*/}

      {/* Contant after header */}
      <View style={styles.ScrolledItems}>
        {/* Text under header bar */}
        <Text style={styles.optionsText}>Options for You</Text>

        {/* Scroll Items */}
        <ScrollView style={styles.ScrollStyle}>
          {/* Buttons icons to navigat into pages */}
          <View style={styles.optionsCon}>
            {/* Scan code button */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Scancode")}
            >
              <ImageBackground
                style={styles.Im}
                source={require("../assets/maxresdefault.jpg")}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.TextInsideImageStyle}>
                  <Text style={styles.bigText}>Scan Code</Text>
                  <Text style={styles.smallText}>Scan your code and</Text>
                  <Text style={styles.smallText}>take more points</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        //this is the map part
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Map")}
            >
              <ImageBackground
                style={styles.Im}
                source={require("../assets/map.png")}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.TextInsideImageStyle}>
                  <Text style={styles.bigText}>Go to Map</Text>
                
                </View>
              </ImageBackground>
            </TouchableOpacity>


            {/* News button */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("News")}
            >
              <ImageBackground
                style={styles.Im}
                source={require("../assets/news.webp")}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.TextInsideImageStyle}>
                  <Text style={styles.bigText}>New</Text>
                  <Text style={styles.smallText}>Earth news in one</Text>
                  <Text style={styles.smallText}>place</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Suggestion box button */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Suggestion")}
            >
              <ImageBackground
                style={styles.Im}
                source={require("../assets/questions.webp")}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.TextInsideImageStyle}>
                  <Text style={styles.bigText}>Suggestion</Text>
                  <Text style={styles.bigText}>Box</Text>
                  <Text style={styles.smallText}>suggest any solution</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Questions button */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Question1")}
            >
              <ImageBackground
                style={styles.Im}
                source={require("../assets/questionsPic.jpg")}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.TextInsideImageStyle}>
                  <Text style={styles.bigText}>Questions</Text>
                  <Text style={styles.smallText}>Answer questions</Text>
                  <Text style={styles.smallText}>and take bouns</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Scroll ending */}

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
            onPress={() => navigation.navigate("Settings")}
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
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEDED",
    flexDirection: "column",
  },
  HeaderStyle: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: 425,
    height: 138,
    backgroundColor: "white",
    // paddingTop: 40,
    // paddingBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // paddingBottom: 15,
    position: 'absolute',
    top: 0,
    borderRadius: 30
  },
  HeaderImageStyle: {
    padding: 10,
  },
  HeaderImage: {
    width: 95,
    height: 95,
    // paddingBottom: 15,
  },
  HeaderText: {
    justifyContent: "center",
    alignItems: "center",
  },
  Text1: {
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    paddingBottom: 10,
  },
  Text2: {
    fontSize: 15,
    color: "#999999",
    paddingBottom: 10,
  },
  optionsText: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    margin: 20,
  },
  ScrolledItems: {
    // flex: 1,
    width: 350,
    height: 540,
    // backgroundColor: "#EEEDED",
    paddingTop: 20,
    // paddingBottom: 15,
    borderRadius: 20
  },
  ScrollStyle: {
    width: 350,
    height: 400,
    alignContent: "center",
    // paddingBottom: 0,
    borderRadius: 20,
    backgroundColor: "#EEEDED",
    // padding: 20,
  },
  optionsCon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEDED",
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
    // borderRadius: 20,
  },
  TextInsideImageStyle: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  bigText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  smallText: {
    color: "white",
    fontSize: 15,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  con2: {
    width: 414,
    height: 758,
    backgroundColor: "#F9F9F9",
    bottom: 0,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
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
    // paddingTop: 40,
    position: "absolute",
    bottom: 0,
    // zIndex: 1,
  },
  FooterImage: {
    width: 35,
    height: 35,
    // position: 'absolute',
    // bottom:0,
  },
  FooterButtonText: {
    fontSize: 15,
    color: "gray",
  },
  FooterIcons: {
    padding: 13,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
