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
import UpdateInfo from "./UpdateInfo";

const routeName = "Profile";

export { routeName };

export default function Profile({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [usename, setusername] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");

  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getUserById(id).then((user) => {
        setEmail(user[0].email);
        setPassword(user[0].password);
        setname(user[0].name);
        setusername(user[0].usename);
        setcity(user[0].city);
        setstate(user[0].state);
        setgender(user[0].gender);
        setage(user[0].age);
        setphone(user[0].phone);
      });
    });
  }, []);

  const { signOut } = React.useContext(AuthContext);
  function signOutUser() {
    signOut();
    logout();
  }
  function signout() {
    signOutUser();
    navigation.navigate("SignIn");
  }

  const onPressSetting = () => {
    console.log("UpdateInfoPage");
    navigation.navigate('UpdateInfo', {
      Email: email,
      PassWord: password,
      Name: name,
      UserName: usename,
      City: city,
      State: state,
      Gender:gender,
      Age:age,
      PhoneNum:phone
    });
  };

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
        {/* Contant Veiw */}
        <TouchableOpacity onPress={onPressSetting}>
          <Image
            source={require("../assets/icons/icons8-settings-64.png")}
            resizeMode="contain"
            style={styles.FooterIcons}
          />
        </TouchableOpacity>
        <View style={styles.ContantStyle}>
          {/* <ScrollView style={styles.ScrollStyle}> */}
          {/* Email info */}
          <View style={styles.InsideScroll}>
            <View style={styles.Contant}>
              <Image
                style={styles.FooterImage}
                source={require("../assets/icons/icons8-circled-envelope-50.png")}
              />
              <Text style={styles.iconText}>{email}</Text>
            </View>
            {/* Password info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/password.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{password}</Text>
            </View>
            {/* Name info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-badge-80.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{name}</Text>
            </View>
            {/* Username info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-verified-account-64.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{usename}</Text>
            </View>
            {/* City info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-chicago-50.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{city}</Text>
            </View>
            {/* State info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-bench-50.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{state}</Text>
            </View>
            {/* Gender info*/}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-gender-equality-50.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{gender}</Text>
            </View>
            {/* Age info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-old-age-home-48.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{age}</Text>
            </View>
            {/* phone info */}
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/phone.png")}
                style={styles.Icons}
              />
              <Text style={styles.iconText}>{phone}</Text>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
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
});
