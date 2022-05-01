import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from "./pages/Questions/Question1"
import Question2 from "./pages/Questions/Question2"
import Question3 from "./pages/Questions/Question3"

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
