import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { addBarcod } from "../firebase/Scan";
import { getUserUId } from "../firebase/Auth";
import { getparcodByUserId } from "../firebase/Scan";
import { addBouns } from '../firebase/Bouns';
import { getBounsByUserId } from "../firebase/Bouns";



export default function Scanner2({ navigation, route  }) {

  let { numberofbottle } = route.params;
  console.log("the number of the score", numberofbottle);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [parcode1, setparcode1] = useState("");
  let finalbottles;
  let finalbouns;

  // دي المفروض بتجيب البونص من الداتابيز و بتزود عليه عدد الازايز فيه مش كلة مش عارف ايه هي لسه 
  //بحاول اكتشف ده 
  function addBounsAndCheck() {
      getUserUId().then((id) => {
        getBounsByUserId(id).then((val) => {
          console.log("ther is the number of data in data base", val[0].finalbouns)
          console.log("the bounsfrom data ", val[0].finalbouns, "the bouns here =", buons)
          finalbouns = val[0].finalbouns + numberofbottle;
          addBouns({ id: id, finalbouns });
          console.log(id);
          navigation.navigate('Home');
        })
      });
  }

//و دي بتزود الاسكان في الداتا بيز و شغالة و كل حاجة تمام هنا 
  function AddFinalBouttles() {
    getUserUId().then((id) => {
      getparcodByUserId(id).then((val) => {
        console.log("ther is the number of data in data base scaner =", val[0].finalbottles)
        console.log("the parcode from data ", val[0].finalbottles, "the bouns here =", numberofbottle)
      finalbottles = val[0].finalbottles + numberofbottle;
      addBarcod({ id: id, parcode1, finalbottles,numberofbottle });
      console.log(id);
      setScanned(false);
      })
      
    }); 
  }
// هنا عندانا دي بتستخدم الاتنين الي فوق 
  function double (){
    addBounsAndCheck();
    AddFinalBouttles();
    navigation.navigate('Home');
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

      {scanned && <Button title={"Tap to go home"} onPress={double} />}
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
