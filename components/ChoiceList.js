import React, { useEffect } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import "@firebase/firestore";

export default function ChoiceList({ docRef }) {
  const [choices, setChoices] = React.useState([]);

  useEffect(
    () => docRef.onSnapshot((doc) => setChoices(doc.data()?.choices || [])),

    //console.log (doc)
    //}),

    []
  );

  return (
    //<ScrollView>
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFF",
        padding: 30,
        width: "100%",
      }}
    >
      <View>
        {/*<Image source={require('../assets/images/bsmsLogo[blu].png')} style={{width: 200, height: 40 }} />*/}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#026666",
            //marginTop: 15,
            marginLeft: 45
          }}
        >
          Attendance Record
        </Text>
      </View>
      {choices.map((choice, key) => (
        <Text key={key}>
          {`${choice.Time.toDate().toString().slice(4, 21)} - First Option: ${
            choice.firstOption
          }, Second Option: ${choice.secondOption}`}
        </Text>
      ))}
    </View>
    //</ScrollView>
  );
}
