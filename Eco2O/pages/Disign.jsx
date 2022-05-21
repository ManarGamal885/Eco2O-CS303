import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useState ,useEffect } from "react";

export default function Disign({email,name }) {

 
  let [number, setnumber] = useState(0);
  function setnumberincr() {
    setnumber(number++);
  }

  function setnumberdecr() {
    if (number >= 0)
      setnumber(number--);
  }
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
            <Text style={{ fontSize: 24 }}> 5 </Text>
          </View>
          <View >
            <Button title={"-"}  onPress={setnumberdecr} />
          </View>
        </View>
        <Button title={"cleck here to chang"}  onPress={setnumberdecr} />
      </View>
      <Text>__________________________________</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({})
