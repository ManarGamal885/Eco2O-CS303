//Manar
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";
import { addSug } from "../firebase/Sugge";
import { getUserUId } from "../firebase/Auth";
export default function SuggestionBox({ navigation }) {
  const [text, settext] = React.useState("");
  function Suggestion() {
    getUserUId().then((id) => {
      if (text === "") {
        alert("There is no suggestion :( !!");
        navigation.navigate("Home");
      } else {
        addSug({ id: id, text });
        console.log(id);
        navigation.navigate("Home");
      }
    });
  }
  return (
    <View style={styles.home}>
      {/* header */}
      <View style={styles.header}>
        <Image style={styles.imageH} source={require("../assets/help.png")} />
        <Text style={styles.H}>Suggestions</Text>
        <Text style={styles.T}>Help Us To Improve The Environmen</Text>
      </View>

      <View style={styles.inputANDbut}>
        <TextInput
          style={styles.textIn}
          placeholder="        Enter Your Suggestion"
          onChangeText={settext}
          placeholderTextColor="gray" 
          
        />
        <TouchableOpacity style={styles.button} onPress={Suggestion}>
          <Text style={styles.textBu}>Send</Text>
        </TouchableOpacity>
      </View>
      
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.FooterImageStyle}>
          <Image
            style={styles.imageF}
            source={require("../assets/check.png")}
          />
        </View>
        {/* <Text> rahma</Text> */}
        <View style={styles.FooterTextStyle}>
          <Text style={styles.textI}> Thank You </Text>
        </View>
      </View>
      {/* <Text>rrrr</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    backgroundColor: "white",
  },
  inputANDbut: {
    width: 414,
    height: 250,
    backgroundColor: "#9DB6A9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85
  },
  header: {
    width: 414,
    height: 250,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // paddingBottom: 25,
    position: "absolute",
    top: 0,
  },
  footer: {
    width: 414,
    height: 200,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    position: "absolute",
    bottom: 0,
    // paddingRight: 200
  },
  textIn: {
    width: 294,
    height: 92,
    borderRadius: 50,
    backgroundColor: "white",
    marginBottom: 50,
  },
  button: {
    width: 188,
    height: 72,
    borderRadius: 50,
    backgroundColor: "#004D25",
    justifyContent: "center",
    alignItems: "center",
  },
  textBu: {
    fontSize: 30,
    color: "white",
  },
  imageH: {
    width: 250,
    height: 100,
    position: "absolute",
    top: 0,
    marginTop: "8%",
  },
  H: {
    marginTop: "45%",
    fontSize: 35,
    fontWeight: "800",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  T: {
    marginTop: "2.5%",
    fontSize: 15,
    color: "#9F9F9F",
  },
  imageF: {
    width: 103,
    height: 100,
    borderRadius: 100,
    // position: "absolute",
    // top: 0,
  },
  textI: {
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "#B7B7B7",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
    // backgroundColor: "black",
  },
  FooterTextStyle: {
    // paddingRight: 100
    // position: 'absolute',
    // top: 0
  }
});
//rnsf
