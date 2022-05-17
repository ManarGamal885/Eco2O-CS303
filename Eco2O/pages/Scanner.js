import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { addBarcod } from "../firebase/Scan";
import { getparcodByUserId } from "../firebase/Scan";
import { getUserUId } from "../firebase/Auth";
import { addBouns } from '../firebase/Bouns';
import { getBounsByUserId } from "../firebase/Bouns";

export default function Scanner2({ navigation, route  }) {

  let { numberofbottle } = route.params;
  console.log("the number of the score", numberofbottle);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [parcode1, setparcode1] = useState("");


  // دي المفروض بتجيب البونص من الداتابيز و بتزود عليه عدد الازايز فيه مش كلة مش عارف ايه هي لسه 
  //بحاول اكتشف ده 
  function addBounsAndCheck() {
    if (numberofbottle === 0) {
      alert("There is no bouns :( !!");
      navigation.navigate('Home');
    } else {
      getUserUId().then((id) => {
        getBounsByUserId(id).then((data) => {
          let obj = {};
          console.log("data =" ,data)

          if(data.length===0){
            console.log("object is null")
            obj={id:id,finalbouns:0}
          }
          else{
            obj={id:id,finalbouns:data[0].finalbouns}
          }
        //   console.log("ther is the vale of val", val)
        //   console.log("ther is the number of data in data base", val[0].finalbouns)
        //   console.log("the bounsfrom data ", val[0].finalbouns, "the bouns here =", buons)
          // finalbouns = val[0].finalbouns + buons;
          console.log("the numberofbottle here =", numberofbottle,"the final bouns" , obj.finalbouns)
          addBouns({ id: id, finalbouns:(numberofbottle + obj.finalbouns) });
          console.log(id);
          navigation.navigate('Home');
        })
      });

    }
  }

  function AddFinalBouttles() {
    getUserUId().then((id) => {
      getparcodByUserId(id).then((data) => {
        let obj = {};
        console.log("data =" ,data)

        if(data.length===0){
          console.log("object is null")
          obj={id:id,finalbottles:0}
        }
        else{
          obj={id:id,finalbottles:data[0].finalbottles}
        }
      //   console.log("ther is the number of data in data base scaner =", val[0].finalbottles)
      //   console.log("the parcode from data ", val[0].finalbottles, "the bouns here =", numberofbottle)
      // finalbottles = val[0].finalbottles + numberofbottle;
     
      addBarcod({ id: id, parcode1, finalbottles:(numberofbottle + obj.finalbottles),numberofbottle });
      console.log(id);
      setScanned(false);
      })
      
    }); 
  }
  function double (){
    AddFinalBouttles();
    addBounsAndCheck();
    navigation.navigate('Scancode');
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

      {scanned && <Button title={"Tap to scan again"} onPress={double} />}
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
