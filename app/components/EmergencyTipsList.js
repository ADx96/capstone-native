import { View } from "react-native";

import * as React from "react";

import EmergencyTipsItem from "./EmergencyTipsItem";
import { observer } from "mobx-react";
import { tips1 } from "./TipsData";

function EmergencyTipsList({ navigation }) {
  const tip1List = tips1.map((tip1) => (
    <EmergencyTipsItem tip1={tip1} key={tip1.id} navigation={navigation} />
  ));

  return <View style={{ flex: 1 }}>{tip1List}</View>;
}
export default observer(EmergencyTipsList);
