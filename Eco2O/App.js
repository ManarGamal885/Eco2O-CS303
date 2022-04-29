import React from 'react';
import { 
  StyleSheet, Text, View, ImageBackground
} from 'react-native';
import packground2 from './assets/packground2.png';
import Logo from './Components/Logo';
import TextLines from './Components/TextLines';
import EmailandPassword from './Components/EmailandPassword';

export default function App() {
  return (
    <ImageBackground style={styles.container} source={packground2}>
      {/* Background */}

      <View>
        {/* Logo */}
        <Logo/>
      </View>

      <View style={styles.textLine}>
        {/* Text Lines */}
        <TextLines/>
      </View>

      <View style={styles.EmailPassword}>
        {/* Email and password */}
        <EmailandPassword/>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: null,
    // height: null,
  },
  textLine: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  EmailPassword: {
    paddingTop: 5,
    paddingBottom: 5,
  }
});
