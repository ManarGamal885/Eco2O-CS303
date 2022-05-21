import {
  StyleSheet,
  Text,
  View,
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
import { getAddress, deleteAdress } from '../firebase/Address';
import { subscribe } from '../firebase/Address'
import ProfileBackground from "../assets/c2b37edc71d4943cc2c51f202a5e41dd.jpg";
export default function Map({ navigation }) {
  const [userId, setUserId] = useState("");
  const [newcity, setnewcity] = useState("");
  const [addresses, setAdresses] = useState([]);
  let counter = 0;


  const getAdressList = async () => {
    const address = await getAddress();
    setAdresses(address);
    console.log("Addrees from database", address);

  }

  React.useEffect(() => {
    getAdressList();
  }, []);


  // console.log("Addrees from useState", addresses);

  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getUserById(id).then(() => {
        setUserId(id);
      });
    });
  }, []);
  
  React.useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New Adress: ", change.doc.data());
        getAdressList();
      }
      if (change.type === "modified") {
        console.log("Modified Adress: ", change.doc.data());
        getAdressList();
      }
      if (change.type === "removed") {
        console.log("Removed Adress: ", change.doc.data());
        getAdressList();
      }

    });

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <ImageBackground
      style={styles.ProfileBackground}
      source={ProfileBackground}
    >
      <ScrollView>
        <View style={{ marginTop: 10, paddingLeft: 50 }}>

          {
            userId == "L31hcVXWGwbVRhGiqZfHXJO6RC83" ?
              addresses.map((a) => (
                <View
                  key={a.id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Text style={styles.text} >{a.address}</Text>
                  <TouchableOpacity
                   style={
                     {width:100,
                      height:50,
                       backgroundColor:"#004D25",
                        padding:20,
                      }
                    } 
                   onPress={()=>deleteAdress(a.id)}>
                    <Text style={{justifyContent:"center", alignItems:"center", color:'white'}} >Delete</Text>
                  </TouchableOpacity>
                </View>
              ))
              :
              addresses.map((a) => (
                <Text style={styles.text} key={a.id}>{a.address}</Text>
              ))
          }

          {userId == "L31hcVXWGwbVRhGiqZfHXJO6RC83" ?
            <View style={{ paddingTop: 20, justifyContent: "center", alignItems: "center" }}>
              <TextInput placeholder="enter your city" onChangeText={(val) => { setnewcity(val) }} />
              <View style={{ paddingTop: 20 }}>
                <Button title="Add Adress" onPress={ () =>{
                    addAddress({address: newcity});
                }} />
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
  },
});
