import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import PanikRequest from "../components/PanikRequest";

export default function CovidScreen() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <PanikRequest />
    </View>
  );
}
