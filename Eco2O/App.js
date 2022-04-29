import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import News from './pages/news'
export default function App() {
  return (
    <View style={styles.container}>
     <News />
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
