//Mabrouk
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { RadioButton, TextInput } from 'react-native-paper';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  getQuestion,
  addQuestion,
  deleteQuestion,
  subscribe,
  setQuestion
} from '../../firebase/questions'
import { useState } from "react";
import { getUserUId } from "../../firebase/Auth";
import { getUserById } from "../../firebase/User";
let countAns = 0;
export default function Question2({ navigation }) {
  let counter = 0;
  const ans1 = "second";
  const ans2 = "third";
  const ans3 = "third";
  const ans4 = "first";
  const ans5 = "first";
  const [userId, setUserId] = useState("");
  let [questions, setQuestions] = React.useState([]);
  // -------------------------------------------------//
  const [value, setValue] = React.useState('');
  // --------------------------------------------------//

  const [q, setQ] = React.useState("");
  const [c1, setQC1] = React.useState("");
  const [c2, setQC2] = React.useState("");
  const [c3, setQC3] = React.useState("");

  // const [q2, setQ2] = React.useState("");
  // const [q2c1, setQ2C1] = React.useState("");
  // const [q2c2, setQ2C2] = React.useState("");
  // const [q2c3, setQ2C3] = React.useState("");

  // const [q3, setQ3] = React.useState("");
  // const [q3c1, setQ3C1] = React.useState("");
  // const [q3c2, setQ3C2] = React.useState("");
  // const [q3c3, setQ3C3] = React.useState("");

  const getQuestionList = async () => {
    const questionList = await getQuestion();
    setQuestions(questionList);
    console.log("Addrees from database", questionList);
  }

  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getUserById(id).then(() => {
        setUserId(id);
      });
    });
  }, []);

  //useEffect Of getQuestionList
  React.useEffect(() => {
    getQuestionList();
  }, []);

  //on Press sHandler
  // const onPressQuestionHandler = () => {
  //   if (value1 == ans1) { countAns++; }
  //   if (value2 == ans2) { countAns++; }
  //   if (value3 == ans3) { countAns++; }
  //   if (value4 == ans4) { countAns++; }
  //   if (value5 == ans5) { countAns++; }
  //   console.log(countAns);
  //   // questions.map((q) => { console.log("Questions from useState", q.question, "c1 ", q.c1); })
  //   console.log("Questions from useState", questions,"and value from radio is :", value);
  //   navigation.navigate('Question3', { buons: countAns });
  // }


  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <View style={styles.header}>
          <Image source={require("../../assets/undraw_Questions_re_1fy7.png")}
            style={{ width: 180, height: 180, borderRadius: 100 }} />
        </View>

        {
          userId == "L31hcVXWGwbVRhGiqZfHXJO6RC83" ?
            questions.map((q) => (
              <View key={counter++}>

                <View style={styles.first} >
                  <Text style={styles.textstyl}>{q.question}</Text>
                  <TextInput placeholder="set new question" onChangeText={(val) => { setQ(val) }} />
                  <View>
                    <Button title="set Question" onPress={()=>{console.log(q)}} />
                  </View>
                </View>


                <RadioButton.Group onValueChange={val => setValue(val)} value={value} >
                  <RadioButton.Item
                    label={q.c1}
                    value="first"
                  />
                  <RadioButton.Item
                    label={q.c2}
                    value="second" />
                  <RadioButton.Item
                    label={q.c3}
                    value="third" />
                </RadioButton.Group>
              </View>
            ))

            : null
        }


        <View style={{ padding: 50 }}>
          <View style={styles.button}>
            {/* <Button title={"submit"} color='white' onPress={onPressQuestionHandler} /> */}
          </View>
        </View>
        <StatusBar style="auto"></StatusBar>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    marginLeft: 90,
    marginTop: 50
  },
  textstyl: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: "gray",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  first: {
    paddingTop: 50, padding: 10
  },
  button: {
    height: 40,
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: '#004D25',
    marginBottom: 20

  },
})