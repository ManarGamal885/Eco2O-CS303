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
  TouchableOpacity
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
import Question1 from './pages/Questions/question1';
import Question2 from './pages/Questions/question2';
import Question3 from './pages/Questions/question3';
import Scanner from './pages/scancode';
import Profile from './pages/profile';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthContext} from "./pages/Utils";

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

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} options={{
            headerTitle: (props) => <LogoTitle {...props} />
            
          }} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Suggestion" component={Suggestion} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
