//Mabrouk
import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { RadioButton } from 'react-native-paper';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,

} from "react-native";

export default function question2() {

  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <View style={styles.header}>
          <Image source={require("../../assets/undraw_Questions_re_1fy7.png")}
            style={{ width: 180, height: 180 }} />

        </View>
        <View style={{ paddingTop: 50, paddingLeft: 120 }} >
          <Text style={{ fontSize: 25 }}>Question 1</Text>
        </View>
        <RadioButton.Group onValueChange={value1 => setValue1(value1)} value={value1}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="third item" value="third" />
        </RadioButton.Group>
        <View style={{ paddingTop: 50, paddingLeft: 120 }} >
          <Text style={{ fontSize: 25 }}>Question 2</Text>
        </View>
        <RadioButton.Group onValueChange={value2 => setValue2(value2)} value={value2}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="third item" value="third" />
        </RadioButton.Group>
        <View style={{ paddingTop: 50, paddingLeft: 120 }} >
          <Text style={{ fontSize: 25 }}>Question 3</Text>
        </View>
        <RadioButton.Group onValueChange={value3 => setValue3(value3)} value={value3}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="third item" value="third" />
        </RadioButton.Group>
        <View style={{ paddingTop: 50, paddingLeft: 120 }} >
          <Text style={{ fontSize: 25 }}>Question 4</Text>
        </View>
        <RadioButton.Group onValueChange={value4 => setValue4(value4)} value={value4}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="third item" value="third" />
        </RadioButton.Group>
        <View style={{ paddingTop: 50, paddingLeft: 120 }} >
          <Text style={{ fontSize: 25 }}>Question 5</Text>
        </View>
        <RadioButton.Group onValueChange={value5 => setValue5(value5)} value={value5}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="third item" value="third" />
        </RadioButton.Group>
        <Text></Text>
        <Text></Text>
        <View style={{padding:50}}>
      <View  style={{ height:40, overflow:'hidden', 
       borderRadius:50, backgroundColor: '#004D25' }}>
      <Button title={"sumite"}  color= '#ffff' />
      </View>
      </View>
        <Text></Text>
        <Text></Text>
        <StatusBar style="auto"></StatusBar>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {

    flexDirection: 'column',
    marginLeft: 90,
    marginTop: 50

  },
})