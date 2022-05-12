import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
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
    <ScrollView style={{ padding: 30 }}>
      <View style={{ padding: 10 }}>
        <Text>email</Text>
        <Text>{email}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>password</Text>
        <Text>{password}</Text>
      </View>
      
      <View style={{ padding: 10 }}>
        <Text>name</Text>
        <Text>{name}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>usename</Text>
        <Text>{usename}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>city</Text>
        <Text>{city}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>state</Text>
        <Text>{state}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>gender</Text>
        <Text>{gender}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>age</Text>
        <Text>{age}</Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text>id</Text>
        <Text>{id}</Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
