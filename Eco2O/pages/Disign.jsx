import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useState ,useEffect  } from "react";
import * as React from "react";
import { subscribe ,deleteUser,getUsers } from "../firebase/User";
import { addBouns } from '../firebase/Bouns';
export default function Disign({email,name,id,bons }) {

  let [inc , setinc] =useState(bons);
const x =bons;
 const [userdel , setuserdel] =useState("");

  function setnumberincr() { 
    setinc(inc++);
  }

  function setnumberdecr() {
    if (inc >= 0)
      setinc(inc--);
  }


  const getuserList = async () => {
    const userdel = await getUsers();
    setuserdel(userdel);
    console.log("Addrees from database", userdel);

  }

  React.useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
   
      if (change.type === "removed") {
        console.log("Removed Adress: ", change.doc.data());
        getuserList();
      }

    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View  style={{
      flexDirection: "column",
      
      alignItems:"center",
      paddingBottom: 10,
    }}>
      <Text style={{fontSize:20}} >the email is :{email}</Text>
      <Text style={{fontSize:20}}>the name is :{name}</Text>
      
      <View>
        <Text style={{fontSize:20}}>the number of bons</Text>
        <View style={{ paddingTop: 70, paddingLeft: 90, flexDirection: "row" }}>
          <View >
            <Button title={"+"}  onPress={setnumberincr} />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 24 }}> {inc} </Text>
          </View>
          <View >
            <Button title={"-"}  onPress={setnumberdecr} />
          </View>
        </View>
        <Button title={"cleck here to chang"}   />
        <TouchableOpacity
                   style={
                     {width:100,
                      height:50,
                       backgroundColor:"#004D25",
                        padding:20,
                      }
                    } 
                   onPress={()=>deleteUser(id)}>
                    <Text style={{justifyContent:"center", alignItems:"center", color:'white'}} >Delete</Text>
                  </TouchableOpacity>
      </View>
      <Text>__________________________________</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({})
