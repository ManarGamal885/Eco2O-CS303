import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import News from './pages/news';
import Scan from './pages/scancode';
import Suggestion from './pages/suggestionBox';
import Contact from './pages/contactUs';
import Start from './pages/start';
import SignIn from './pages/signIn';
import Register from './pages/Register';
export default function App() {
  return (
    <View style={styles.container}>
      <Register />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
