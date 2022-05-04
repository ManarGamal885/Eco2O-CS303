import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import News from './pages/news';
import Scan from './pages/scancode';
import Suggestion from './pages/suggestionBox';
import Contact from './pages/contactUs';
export default function App() {
  return (
    <View style={styles.container}>
      <Contact />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
