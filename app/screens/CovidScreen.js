import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";

export default function CovidScreen() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Title style={{ marginBottom: 20, marginLeft: 80 }}>
        Whats Your Emergemcy?
      </Title>
    </View>
  );
}
