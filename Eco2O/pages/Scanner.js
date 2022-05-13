import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { addBouns } from "../firebase/Scan";
import { getUserUId } from "../firebase/Auth";
import { getparcodByUserId } from "../firebase/Scan";


export default function Scanner2({ navigation, route  }) {

  let { numberofbottle } = route.params;
  console.log("the number of the score", numberofbottle);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let [bouttlesinndatabase, setbottlesondatabase] = useState(0);
  let finalbottles;
  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getparcodByUserId(id).then((user) => {
        setbottlesondatabase(user[0].numberofbottle);
      });
    });
  }, []);
  
  const [parcode1, setparcode1] = useState("");
 
  function AddFinalBouttles() {
    getUserUId().then((id) => {
      finalbottles = bouttlesinndatabase + numberofbottle;
      addBouns({ id: id, parcode1, finalbottles });
      console.log(id);
      setScanned(false);
      navigation.navigate('Home');
    });
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setparcode1(data);
      setScanned(true);   
      alert(`Bar code with type ${type} and data ${data} has been scanned! `);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} /> || */}

      {scanned && <Button title={"Tap to go home"} onPress={AddFinalBouttles} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
