import { observer } from "mobx-react";
import { List, Spinner, View } from "native-base";
import React from "react";
import authStore from "../stores/authStore";
import emergencyStore from "../stores/EmergencyStore";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  if (emergencyStore.loading) return <Spinner />;

  const historyList = emergencyStore.emergencies
    .filter((emergency) => emergency.requesterId === authStore.user.id)
    .map((emergency) => (
      <HistoryItem emergency={emergency} key={emergency.id} />
    ));

  return <View style={{ flex: 1 }}>{historyList}</View>;
};

export default observer(HistoryList);
