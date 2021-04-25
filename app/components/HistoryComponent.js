import { View } from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import CameraComponent from "../components/CameraComponent";
import PanikRequest from "../components/PanikRequest";

export default function History() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      {/* <CameraComponent /> */}
      <PanikRequest />
    </View>
  );
}
