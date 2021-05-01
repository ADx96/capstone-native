import { View } from "react-native";
import * as React from "react";

import HistoryList from "../components/HistoryList";

export default function History() {
  return (
    <View style={{ flex: 1 }}>
      <HistoryList />
    </View>
  );
}
