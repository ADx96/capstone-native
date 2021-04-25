import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import AccedentsList from "../components/AccedentsList";

export default function AccedentScreen() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <AccedentsList />
    </View>
  );
}
