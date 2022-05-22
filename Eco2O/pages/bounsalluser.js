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
import { getUserUId } from "../firebase/Auth";
import { getUserById, getUsers ,getUserswithbouns} from "../firebase/User";
import { getBounsByUserId, getBouns } from "../firebase/Bouns";
import { useState ,useEffect } from "react";
import * as React from "react";
import ProfileBackground from "../assets/c2b37edc71d4943cc2c51f202a5e41dd.jpg";
const routeName = "Profile";
export { routeName };
import { AuthContext } from "./Utils";
import { addBouns } from "../firebase/Bouns";
import Disign from "./Disign";
export default function Bounsalluser({ navigation }) {

  let [bouns, setbouns] = useState("");
  let [allbouns, setallbouns] = useState("");
  let [user, setuser] = useState([]);
  React.useEffect(() => {
    getUserUId().then((id) => {
        getBounsByUserId(id).then((user) => {
          setbouns(user[0].finalbouns);
        });
    });
  }, []);


  
    const getUserLest = async () => {
     
      getUserswithbouns().then((data)=>{console.log("**************data",data),setuser(data)});
    console.log("after fanction",user)
      
    };
  
    useEffect(() => {
        getUserLest();
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
      {/* Header */}
      <View style={styles.Header}>
        <View style={styles.TextStyle}>
          <Text style={styles.txtStyle}>Profile updat bouns</Text>
          {/* <Text style={styles.txtStyle}>Information:</Text> */}
        </View>
      </View>
        {/* the part of user ******************************************************************************/}
        <ScrollView>
          {
            user.map((elm,i)=>(
              <Disign email={elm.email} name={elm.name} bouns={elm.finalbouns} id={elm.id} bons={elm.finalbouns} key={i} />
            ))
           
          }
      </ScrollView>
 
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
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 414,
    height: 200,
    backgroundColor: "#004D25",
    marginBottom: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  ProfileStyle: {
    backgroundColor: "#EEEDED",
    width: 283,
    height: 488,
    paddingTop: 20,
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
