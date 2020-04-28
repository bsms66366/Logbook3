import React from "react";
import { ScrollView, Text, View, Picker, Button, Border } from "react-native";
import firebase from "firebase";
import "@firebase/firestore";

export default function Form ({ docRef }) {
  const [firstOption, setFirstOption] = React.useState("");
  const [secondOption, setsecondOption] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const submit = () => {
    console.log({ firstOption, secondOption });
    if (!submitted) setSubmitted(true);
    if (firstOption === "" || secondOption === "") return;

    const newChoices = { firstOption, secondOption, time: new Date() };

    firebase
      .firestore()
      .runTransaction((transaction) => {
        return transaction.get(docRef).then((doc) => {
          if (!doc.exists) {
            transaction.set(docRef, { choices: [newChoices] });
          } else {
            const previousChoices = doc.data()?.choices || [];
            transaction.update(docRef, {
              choices: [newChoices, ...previousChoices],
            });
          }
        });
      })
      .then(() => setMessage(`Submitted ${firstOption} and ${secondOption} :)`))
      .catch((err) => setMessage(`Failed due to ${err} :(`));
  };

  return (
     
    <View 
      style={{
        flex: 5,
        backgroundColor: "#FFFFF",
        padding: 20,
        width: 350,
        height:40,
        justifyContent: "space-around",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold"}}></Text>

      <Text style={{ color: "red" }}>
        {submitted && firstOption === "" && "You must select a firstOption."}
      </Text>
      <Picker
        selectedValue={firstOption}
        onValueChange={(value) => setFirstOption(value)}
      >
        <Picker.Item label="First Option" value="" />
        <Picker.Item label="Module 101" value="1" />
        <Picker.Item label="first Option 102" value="2" />
        <Picker.Item label="first Option 103" value="3" />
        <Picker.Item label="first Option 104" value="4" />
        <Picker.Item label="first Option 201" value="5" />
        <Picker.Item label="first Option 202" value="6" />
        <Picker.Item label="firstOption 203" value="7" />
        <Picker.Item label="firstOption 204" value="8" />

      </Picker>

      <Text style={{ color: "red" }}>
        {submitted && secondOption === "" && "You must select a Second Option."}
      </Text>

      <Picker
        selectedValue={secondOption}
        onValueChange={(value) => setsecondOption(value)}
      >
        <Picker.Item label="Second Option" value="" />

        <Picker.Item label="Choice A" value="a" />
        <Picker.Item label="Choice B" value="b" />
        <Picker.Item label="Choice C" value="c" />
      </Picker>

      <Button title="Submit" onPress={submit}/>
      <Text> {message} </Text>
    </View>
  );
}
