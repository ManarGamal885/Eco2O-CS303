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
import ProfileBackground from "../assets/ProfileBackgound.jpg";

const routeName = "Profile";

export { routeName };

export default function Profile({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const [usename, setusername] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
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
        setId(user[0].id);
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

  return (
    <ImageBackground
      style={styles.ProfileBackground}
      source={ProfileBackground}
    >
      <View style={styles.Header}>
        {/* Pic at the top */}
        {/* <View style={styles.headerImageStyle}> */}
        {/* <Image
            source={require("../assets/undraw_Profile_data_re_v81r.png")}
            style={styles.headerImage}
          /> */}
        {/* </View> */}

        <View style={styles.TextStyle}>
          <Text style={styles.txtStyle}>Profile Information</Text>
          {/* <Text style={styles.txtStyle}>Information:</Text> */}
        </View>
      </View>

      {/* Contant Veiw */}
      <View style={styles.ContantStyle}>
        <ScrollView style={styles.ScrollStyle}>
          {/* Email info */}
          <View style={styles.InsideScroll}>
            <View style={styles.Contant}>
              <Image
                source={require("../assets/icons/icons8-circled-envelope-50.png")}
                style={styles.Icons}
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
                source={require("../assets/icons/user.png")}
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
            {/* Gender info */}
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
        </ScrollView>
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
  Header: {
    flexDirection: "row",
  },
  ProfileStyle: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#EEEDED",
    width: 283,
    height: 488,
    paddingTop: 20,
  },
  // headerImageStyle: {
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center",
  //   paddingBottom: 20,
  //   // paddingTop: 20
  //   // position: "absolute",
  //   borderRadius: 60,
  // },
  // headerImage: {
  //   width: 117,
  //   height: 117,
  //   borderRadius: 50,
  //   // position: 'relative'
  // },
  TextStyle: {
    paddingTop: 40,
    paddingLeft: 20,
    // paddingLeft: 3,
    // paddingBottom: 10,
    paddingRight: 105,
  },
  txtStyle: {
    fontSize: 30,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  ContantStyle: {
    // width: 283,
    // height: 488,
    paddingLeft: 20,
  },
  ScrollStyle: {
    // width: 283,
    // height: 400,
    paddingRight: 10,
  },
  InsideScroll: {
    width: 283,
    height: 488,
  },
  Contant: {
    flexDirection: "row",
    // width: 283,
    // height: 488,
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    paddingRight: 10,
  },
  Icons: {
    width: 50,
    height: 50,
    paddingTop: 3,
  },
  iconText: {
    fontSize: 15,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingLeft: 10,
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
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
