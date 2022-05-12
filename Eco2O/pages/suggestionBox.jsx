//Manar
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native-web';
import { addSug } from "../firebase/Sugge"
import { getUserUId } from "../firebase/Auth";
export default function SuggestionBox({ navigation }) {
  const [text, settext] = React.useState('');
  function Suggestion() {
    getUserUId().then((id) => {
      if (text === "") {
        alert("There is no bouns :( !!");
        navigation.navigate('Home');
      }
      else {
        addSug({ id: id, text });
        console.log(id);
        navigation.navigate('Home');
      }
    });



  }
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Image
          style={styles.imageH}
          source={require('../assets/help.png')}
        />
        <Text style={styles.H}>Suggestions</Text>
        <Text style={styles.T}>Help Us To Improve The Environmen</Text>
      </View>
      <View style={styles.inputANDbut}>
        <TextInput style={styles.textIn} placeholder='Enter Your Suggestion' onChangeText={settext} />
        <TouchableOpacity style={styles.button} onPress={Suggestion}>
          <Text style={styles.textBu} >Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Image
          style={styles.imageF}
          source={require('../assets/check.png')}
        />
        <Text style={styles.textI}> Thank You </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputANDbut: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: '#9DB6A9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  footer: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textIn: {
    width: 294,
    height: 92,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  button: {
    width: 188,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#004D25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBu: {
    fontSize: 30,
    color: 'white',
  },
  imageH: {
    width: 286,
    height: 167,
    position: 'absolute',
    top: 0,
    marginTop: '8%',
  },
  H: {
    marginTop: '45%',
    fontSize: 35,
    fontWeight: '800',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  T: {
    marginTop: '2.5%',
    fontSize: 15,
    color: '#9F9F9F',
  },
  imageF: {
    width: 150,
    height: 150,
  },
  textI: {
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: '#B7B7B7',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
})
//rnsf