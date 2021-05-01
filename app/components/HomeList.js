import { View, StyleSheet, ImageBackground } from "react-native";

import * as React from "react";

import { observer } from "mobx-react";

import typeStore from "../stores/emergencyTypeStore";
import HomeItem from "../components/HomeComponent";
import { Title } from "react-native-paper";
import { Spinner } from "@ui-kitten/components";

function HomeList({ navigation }) {
  if (typeStore.loading) return <Spinner />;
  const data = typeStore.types;
  const homeList = data.map((data, key) => (
    <HomeItem key={key} type={data} navigation={navigation} />
  ));

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/test1.jpg")}
    >
      <View>
        <Title style={styles.Title}>Whats Your Emergency?</Title>
        {homeList}
      </View>
    </ImageBackground>
  );
}

export default observer(HomeList);

const styles = StyleSheet.create({
  Title: {
    marginLeft: 90,
    marginTop: 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  bgImage: {
    flex: 1,
  },
});
