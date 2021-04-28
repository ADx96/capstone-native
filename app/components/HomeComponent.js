import { StyleSheet, TouchableOpacity } from "react-native";

import * as React from "react";
import { Spinner, Text } from "native-base";
import { Card } from "react-native-paper";
import { observer } from "mobx-react-lite";
import typeStore from "../stores/emergencyTypeStore";
import { appendApi } from "../stores/instance";

const HomeItem = ({ type, navigation }) => {
  if (typeStore.loading) return <Spinner />;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("PanikRequest", { type })}
    >
      <Card>
        <Card.Cover
          source={{ uri: appendApi(type.image) }}
          style={styles.coverImage}
        />
        <Text style={styles.Text}>{type.type}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  Text: {
    fontWeight: "bold",
    marginLeft: 8,
    marginTop: 60,
  },
  Title: {
    marginLeft: 80,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  coverImage: {
    position: "absolute",
    alignContent: "center",
    flex: 1,
    minWidth: 250,
    maxWidth: 300,
    minHeight: 50,
    maxHeight: 100,
  },
});

export default observer(HomeItem);
