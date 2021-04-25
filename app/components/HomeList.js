import { View, StyleSheet } from "react-native";

import * as React from "react";

import { observer } from "mobx-react";
import { tips2 } from "./TipsData";
import AccedentsTipsItem from "./AccedentsTipsItem";
import typeStore from "../stores/emergencyTypeStore";
import HomeItem from "../components/HomeComponent";
import { Title } from "react-native-paper";

function HomeList({ navigation }) {
  if (typeStore.loading) return <Spinner />;

  const homeList = typeStore.types.map((type) => (
    <HomeItem type={type} key={type.id} navigation={navigation} />
  ));

  return (
    <View>
      <Title style={styles.Title}>Whats Your Emergency?</Title>
      {homeList}
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginLeft: 90,
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default observer(HomeList);
