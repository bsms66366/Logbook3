import React, { useEffect } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import Login from "../components/Login";
import Form from "../components/Form";
import ChoiceList from "../components/ChoiceList";

global.addEventListener = (x) => x;
import * as firebase from "firebase";
import "firebase/firestore";

import Base64 from "Base64";
import { decode, encode } from "Base64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  const [user, setUser] = React.useState(null);
  const [userDoc, setUserDoc] = React.useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBEQMLljlH7XibdTCWnlWKnTOVAp4VI8Uk",
      authDomain: "logbook-ae991.firebaseapp.com",
      databaseURL:
        "https://logbook-ae991.firebaseio.com/registrations/ZzG2RkcXoNilpp1SwhEv",
      projectId: "logbook-ae991",
      storageBucket: "gs://logbook-ae991.appspot.com",
      messagingSenderId: "962584022257",
      appId: "1:962584022257:web:ad3da6458be42b631d6d50",
      measurementId: "229774498",
    };

    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      const userDoc = firebase
        .firestore()
        .collection("users")
        .doc(user.email)
        .collection("Attendance")
        .doc(user.uid);
      setUserDoc(userDoc);
    });
  }, []);

  if (!userDoc)
    return (
      <View style={s.root}>
        <Login />
      </View>
    );

  return (
    <View style={s.root}>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Text style={{ marginRight: 5 }}>{`Logged in as: ${user.email}`}</Text>
        <Button
          title="Sign Out"
          style={{ backgroundColor: "#026666", borderRadius: 15 }}
          onPress={() => firebase.auth().signOut()}
        />
      </View>
      <Form docRef={userDoc} />
      <ChoiceList docRef={userDoc} />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    //alignItems: "center",
  },
});
