import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import * as React from "react";
import { AuthContext } from "./Utils";
import { logout } from "../firebase/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Home1({ navigation }) {
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
    <View>
      <View style={styles.header}>
        <Image
          source={require("../assets/h.jpeg")}
          style={{ width: 110, height: 110 }}
        />
        <View>
          <Text
            style={{
              marginLeft: 60,
              marginTop: 30,
              fontSize: 20,
              textShadowColor: "#B7B7B7",
              textShadowOffset: { width: 0, height: 2 },
            }}
          >
            Welcome in Your Home
          </Text>
          <Text style={{ marginLeft: 70, marginTop: 0, opacity: 0.6 }}>
            Choose Your Feature Now
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.options}>Options for You</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: "#FFF", alignContent: "center", padding: 10, flex: 1 }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <View>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Scancode")}
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
              <Image style={styles.Im} source={require("../assets/quiz.jpg")} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
      <View>
        <View style={styles.FooterStyle}>
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

            <TouchableOpacity onPress={signout} style={styles.FooterButton}>
              <Text style={styles.FooterButtonText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
  },

  options: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    margin: 20,
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
  FooterStyle: {
    width: 414,
    height: 350,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
});
