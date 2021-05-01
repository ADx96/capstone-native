import { observer } from "mobx-react";
import { Spinner, View, Text } from "native-base";

import React from "react";
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import authStore from "../stores/authStore";
import emergencyStore from "../stores/EmergencyStore";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  if (emergencyStore.loading) return <Spinner />;

  const historyList = emergencyStore.emergencies
    .filter((emergency) => {
      return emergency.Requester.id === authStore.user.id;
    })
    .map((emergency) => (
      <HistoryItem emergency={emergency} key={emergency.id} />
    ));

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/test1.jpg")}
    >
      <ScrollView>
        <Text style={styles.Text}>Your Panic Requests History</Text>
        {historyList}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    marginLeft: 56,

    marginTop: 120,
    fontSize: 23,
    color: "white",
  },
  bgImage: {
    flex: 1,
  },
});
export default observer(HistoryList);
