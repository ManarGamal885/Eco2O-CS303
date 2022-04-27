import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from "./pages/Questions/question1"
import Question2 from "./pages/Questions/question2"
export default function App() {
  return (
    <View style={styles.container}>
   
   
         <Question2/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  }
});
