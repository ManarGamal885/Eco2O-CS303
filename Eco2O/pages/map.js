import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import * as React from "react";
import { getUserUId } from "../firebase/Auth";
import { getUserById } from "../firebase/User";
import { useState } from "react";
import { addAddress, getAddressByUserId } from "../firebase/Address";
import { getAddress } from '../firebase/Address';

import ProfileBackground from "../assets/c2b37edc71d4943cc2c51f202a5e41dd.jpg";
export default function Map({ navigation }) {
  const [userId, setUserId] = useState("");
  const [newcity, setnewcity] = useState("");
  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getUserById(id).then(() => {
        setUserId(id);
      });
    });
  }, []);

  function addAddressAndCheck() {
    if (newcity === null) {
      alert("There is no city  :( !!");
     
    } else {
      getUserUId().then((id) => {
      getAddressByUserId(id).then((data) => {
          let obj = {};
          console.log("data =" ,data)
          if(data.length===0){
            console.log("object is null")
            obj={id:id,city:"empty"}
          }
          else{
            obj={id:id,City:data[0].city}
          }
        
          addAddress({ id: id, city:newcity });
          console.log(id);
          
        })
      });

    }
  }
  
  return (
    <ImageBackground
      style={styles.ProfileBackground}
      source={ProfileBackground}
    >
      <ScrollView>
        <View style={{ marginTop: 10, paddingLeft: 50 }}>
          <Text style={styles.text}>1- Giza : ahmed maher</Text>
          <Text style={styles.text}>2- Giza : Elmarotya</Text>
          <Text style={styles.text}>3- Giza : cairo mall</Text>
          <Text style={styles.text}>4- Ciro : El bassatine</Text>
          <Text style={styles.text}>5- Ciro : El helmia</Text>
          <Text style={styles.text}>6- Ciro : Naser city</Text>
          <Text style={styles.text}>7- Ciro : El shrouk city</Text>
          <Text style={styles.text}>8- Ciro: Down town</Text>
          <Text style={styles.text}>9- Ciro: Doki</Text>
          <Text style={styles.text}>10-Ciro: El Saida Aisa</Text>
          <Text style={styles.text}>11-Ciro: El Sida Zainab</Text>
          <Text style={styles.text}>{newcity}</Text>
          {userId == "FE4p2azjSDTlYy8FRL8DSyMx1vs1" ? 
          <View style={{paddingTop:20,justifyContent:"center" ,alignItems:"center" }}> 
            <TextInput placeholder="enter your city" onChangeText={(val)=>{setnewcity(val)}}/>
            <View  style={{paddingTop:20}}>
              <Button title="add new city" onPress={addAddressAndCheck}/>
            </View>
          </View>
          
          : null}
        </View>
        <View style={{ paddingBottom: 40, paddingTop: 40 }}>
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
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  buttonStyle: {
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004D25",
    borderRadius: 50,
    width: 300,
    height: 72,
    justifyContent: "space-between",
    buttonText: {
      color: "white",
      textShadowColor: "#424242",
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 6,
      textAlign: "center",
      fontSize: 30,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 10,
    },
  },
});
