import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function App() {
  const [module, setModule] = React.useState("");
  const [practice, setPractice] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const submit = () => {
    console.log({ module, practice });
    if (!submitted) setSubmitted(true);

    if ((module !== "") & (practice !== "")) {
      alert("sent!");



const firebaseConfig = {ZzG2RkcXoNilpp1SwhEv}  // apiKey, authDomain, etc. (see above)

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

dbh.collection("registrations").doc("users").set({
  users: "userId",
})

// Set the configuration for your app
  // TODO: Replace with your project's config object
  /*var config = {
    apiKey: "",
    authDomain: "logbook-ae991.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
*/
/*// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);*/
      
      //   firebase
      // .firestore()
      // .collection("registrations")
      //     .doc(`user-${userId}`)

      // firebase.store().collection("username").set({
      //   selection: dropdownSelection,
      //   loc: location,
      //   selection: dropdownSelection,
      // }).then(() =>
      // alert(`Submitted ${module} and ${practice} :)`);
      // ).catch((err) =>
      // alert(`Failed due to ${err} :(`);
      // )
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>
        {submitted && module === "" && "You must select a Module."}
      </Text>
      <Picker
        selectedValue={module}
        onValueChange={(value) => setModule(value)}
      >
        <Picker.Item label="Module" value="" />
        <Picker.Item label="Module 1" value="module1" />
        <Picker.Item label="module 2" value="module2" />
        <Picker.Item label="module 3" value="module3" />
      </Picker>

      <Text style={{ color: "red" }}>
        {submitted && practice === "" && "You must select a Gp Practice."}
      </Text>

      <Picker
        selectedValue={practice}
        onValueChange={(value) => setPractice(value)}
      >
        <Picker.Item label="GP Practice" value="" />

        <Picker.Item label="practice 1" value="practice1" />
        <Picker.Item label="practice 2" value="practice2" />
        <Picker.Item label="practice 3" value="practice3" />
      </Picker>

      <Button title="Submit" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: 15,
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: 45,
  },
});

