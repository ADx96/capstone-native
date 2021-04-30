import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import EmergencyTipsList from "../components/EmergencyTipsList";

export default function EmergencyScreen() {
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <EmergencyTipsList />
    </View>
  );
}
