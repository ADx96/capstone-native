import { View } from "react-native";

import * as React from "react";

import { observer } from "mobx-react";
import { tips2 } from "./TipsData";
import AccedentsTipsItem from "./AccedentsTipsItem";

function AccedentsList({ navigation }) {
  const tip2List = tips2.map((tip2) => (
    <AccedentsTipsItem tip2={tip2} key={tip2.id} navigation={navigation} />
  ));

  return <View style={{ flex: 1 }}>{tip2List}</View>;
}
export default observer(AccedentsList);
