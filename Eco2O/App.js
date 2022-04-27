import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from "./pages/Questions/question1"
import Question2 from "./pages/Questions/question2"
import Question3 from "./pages/Questions/question3"

export default function App() {
  return (
    <View style={styles.container}>
   
   
         <Question3/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  }
});
