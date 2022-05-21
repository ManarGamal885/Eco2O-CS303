import * as React from 'react';
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
  TouchableOpacity,
  NavigationActions
} from "react-native";
import Home from "./pages/home";
import News from "./pages/news";
import Suggestion from "./pages/suggestionBox";
import Contact from "./pages/contactUs";
import Start from "./pages/start";
import SignIn from "./pages/signIn";
import Register from "./pages/register";
import Forget from "./pages/forgetPass";
import Question1 from './pages/Questions/question1';
import Question2 from './pages/Questions/question2';
import Question3 from './pages/Questions/question3';
import Scancode from './pages/scancode';
import Scanner2 from './pages/Scanner';
import Profile from './pages/profile';
import Home1 from './pages/home1';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthContext} from "./pages/Utils";
import Map from './pages/map';
import Map2 from './pages/Map2';
import Firstimg from './pages/firstimg';
import Settings from './pages/Settings';
import bounsalluser from "./pages/bounsalluser";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function LogoTitle() {
    return (
        <TouchableOpacity >
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/user.png')}
      />
      </TouchableOpacity>
    );
  }
export default function App() {


  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
        switch (action.type) {
            case 'RESTORE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'SIGN_IN':
                return {
                    ...prevState,
                    isSignout: false,
                    userToken: action.token,
                };
            case 'SIGN_OUT':
                return {
                    ...prevState,
                    isSignout: true,
                    userToken: null,
                };
        }
    },
    {
        isLoading: true,
        isSignout: true,
        userToken: null,
    }
);

React.useEffect(() => {
    const bootstrapAsync = async () => {
        dispatch({type: 'RESTORE_TOKEN', token: null});
    };
    bootstrapAsync();
}, []);

const authContext = React.useMemo(
    () => ({
        signIn: async (data) => {
            console.log('from useMemo: ', data)
            dispatch({ type: 'SIGN_IN', token: data.token });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' }),
        // signUp: async (data) => {
        //     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        // },
    }),
    []
);

// const MainStackNavigator = () => {
//   return (
//     <NavigationContainer>
        
//       <Stack.Navigator initialRouteName="SignIn">
//         <Stack.Screen name="Home" component={Home} options={{
//             headerTitle: (props) => <LogoTitle {...props} />
            
//           }} />
//         <Stack.Screen name="News" component={News} />
       
//         <Stack.Screen name="Suggestion" component={Suggestion} />
//         <Stack.Screen name="Contact" component={Contact} />
//         <Stack.Screen name="Start" component={Start} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Forget" component={Forget} />
//         <Stack.Screen name="Question1" component={Question1} />
//         <Stack.Screen name="Question2" component={Question2} />
//         <Stack.Screen name="Question3" component={Question3} />
//         <Stack.Screen name="Scancode" component={Scancode} />
//         <Stack.Screen name="Scanner2" component={Scanner2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}  />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Suggestion" component={Suggestion} />
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn}   options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Scancode" component={Scancode} />
        <Stack.Screen name="Scanner2" component={Scanner2} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Map2" component={Map2} />
        <Stack.Screen name="Firstimg" component={Firstimg} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="bounsalluser" component={bounsalluser} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
