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
import { updateUser } from "../firebase/User";

const routeName = "Profile";

export { routeName };

export default function UpdateInfo({ navigation, route }) {
  const { ID, Name, UserName, City, State, Gender, Age } = route.params;

  // const EmailText = (vale, fieldName) => {
  //   setEmail(fieldName);
  //   setEmail(vale);
  // };
  // const PassText = (vale, fieldName) => {
  //   setPassword(fieldName);
  //   setPassword(vale);
  // };
  const NameText = (vale, fieldName) => {
    setname(fieldName);
    setname(vale);
  };
  const UserNameText = (vale, fieldName) => {
    setusername(fieldName);
    setusername(vale);
  };
  const CityText = (vale, fieldName) => {
    setcity(fieldName);
    setcity(vale);
  };
  const StateText = (vale, fieldName) => {
    setstate(fieldName);
    setstate(vale);
  };
  const GenderText = (vale, fieldName) => {
    setgender(fieldName);
    setgender(vale);
  };
  const AgeText = (vale, fieldName) => {
    setage(fieldName);
    setage(vale);
  };
  // const PhonText = (vale, fieldName) => {
  //   setphone(fieldName);
  //   setphone(vale);
  // };

  let [userId, setID] = useState(ID);
  // let [email, setEmail] = useState(Email);
  // let [password, setPassword] = useState(PassWord);
  let [name, setname] = useState(Name);
  let [usename, setusername] = useState(UserName);
  let [city, setcity] = useState(City);
  let [state, setstate] = useState(State);
  let [gender, setgender] = useState(Gender);
  let [age, setage] = useState(Age);
  // let [phone, setphone] = useState(PhonNum);

  // setEmail(Email);

  // console.log(route);

  const { signOut } = React.useContext(AuthContext);
  function signOutUser() {
    signOut();
    logout();
  }
  function signout() {
    signOutUser();
    navigation.navigate("SignIn");
  }

  function Finish() {
    if (
      name === "" ||
      usename === "" ||
      city === "" ||
      state === "" ||
      gender === "" ||
      age === ""
    ) {
      alert("email or password is empty!");
    } else {
      // setEmail(email);
      // setPassword(password);
      setname(name);
      setusername(usename);
      setcity(city);
      setstate(state);
      setgender(gender);
      setage(age);
      // setphone(phone);
      updateUser({ id: userId, name, usename, city, state, gender, age });
      // console.log("email = ", email);
    }
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
        {/* <TextInput
          style={styles.textIn}
          value={email}
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={(value) => EmailText(value, "email")}
        />
        <TextInput
          style={styles.textIn}
          value={password}
          placeholder="Password"
          placeholderTextColor="gray"
          onChangeText={(value) => PassText(value, "PassWord")}
        /> */}
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>Change Nam</Text>
          <TextInput
            style={styles.textIn}
            value={name}
            placeholder="Name"
            placeholderTextColor="gray"
            onChangeText={(value) => NameText(value, "Name")}
          />
        </View>
        <View style={{ padding: 15, flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>Change Usr</Text>
          <TextInput
            style={styles.textIn}
            value={usename}
            placeholder="Username"
            placeholderTextColor="gray"
            onChangeText={(value) => UserNameText(value, "UserName")}
          />
        </View>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 20,  }}>Change Cit</Text>
          <TextInput
            style={styles.textIn}
            value={city}
            placeholder="City"
            placeholderTextColor="gray"
            onChangeText={(value) => CityText(value, "City")}
          />
        </View>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 20,  }}>Change Sta</Text>
          <TextInput
            style={styles.textIn}
            value={state}
            placeholder="State"
            placeholderTextColor="gray"
            onChangeText={(value) => StateText(value, "State")}
          />
        </View>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 20,  }}>Change Gen</Text>
          <TextInput
            style={styles.textIn}
            value={gender}
            placeholder="Gender"
            placeholderTextColor="gray"
            onChangeText={(value) => GenderText(value, "Gender")}
          />
        </View>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 20,  }}>Change Age</Text>
          <TextInput
            style={styles.textIn}
            value={age}
            placeholder="Age"
            placeholderTextColor="gray"
            onChangeText={(value) => AgeText(value, "Age")}
          />
        </View>
        {/* <TextInput
          style={styles.textIn}
          value={phone}
          placeholder="Phon Number"
          placeholderTextColor="gray"
          onChangeText={(value) => PhonText(value, "PhonNum")}
        /> */}
      </View>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={Finish}>
          <Image
            source={require("../assets/icons/icons8-settings-64.png")}
            resizeMode="contain"
            style={styles.FooterIcons}
          />
        </TouchableOpacity>
      </View>
      {/* <Text>{Email}</Text> */}

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
    paddingBottom: 2,
    paddingTop: 2,
  },
});
