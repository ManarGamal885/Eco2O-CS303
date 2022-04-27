import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question from "./pages/Questions/question1"

export default function App() {
  return (
    <View style={styles.container}>
       <Question/>
     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  }
});
