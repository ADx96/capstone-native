import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import { AppNavigator } from "./TopTabNavigator";

export default function Tips() {
  return (
    <View style={{ marginTop: 100, flex: 1 }}>
      <AppNavigator />
    </View>
  );
}
