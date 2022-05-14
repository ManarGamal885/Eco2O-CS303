import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import { getUsers } from "../firebase/User";
import { getUserUId } from "../firebase/Auth";
import { getUserById } from "../firebase/User";
import { useState } from "react";
import * as React from "react";

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

  return (
    <View style={styles.Container}>
      <View >
        {/* <ScrollView> */}
          <View style={styles.ProfileStyle}>
            <View style={styles.headerImageStyle}>
              <Image
                source={require("../assets/undraw_Profile_data_re_v81r.png")}
                style={styles.headerImage}
              />
            </View>

            <View style={styles.contant}>
              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-circled-envelope-50.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{email}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/password.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{password}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-badge-80.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{name}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/user.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{usename}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-chicago-50.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{city}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-bench-50.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{state}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-gender-equality-50.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{gender}</Text>
              </View>

              <View style={styles.info}>
                <Image
                  source={require("../assets/icons/icons8-old-age-home-48.png")}
                  style={styles.Icons}
                />
                <Text style={styles.iconText}>{age}</Text>
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  ProfileStyle: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: "white",
  },
  headerImageStyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  headerImage: {
    width: 414,
    height: 200,
  },
  contant: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // paddingTop: 10,
    paddingLeft: 20,
    width: 290,
    height: 490,
    // paddingRight: 10
  },
  info: {
    flexDirection: "row",
    textAlign: "center",
    paddingRight: 10,
  },
  Icons: {
    width: 50,
    height: 50,
    paddingTop: 3,
  },
  iconText: {
    fontSize: 20,
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
});
