import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import Home from "./pages/home";
import News from "./pages/news";
import Scan from "./pages/scancode";
import Suggestion from "./pages/suggestionBox";
import Contact from "./pages/contactUs";
import Start from "./pages/start";
import SignIn from "./pages/signIn";
import Register from "./pages/register";
import Forget from "./pages/forgetPass";
import Q1 from "./pages/Questions/question1";
import Q2 from "./pages/Questions/question2";
import Q3 from "./pages/Questions/question3";
import Question1 from "./pages/Questions/question1";
import question2 from "./pages/Questions/question2";
import question3 from "./pages/Questions/question3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Suggestion" component={Suggestion} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Q1" component={Q1} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="Q3" component={Q3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
