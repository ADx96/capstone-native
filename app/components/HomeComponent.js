import { View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";

import * as React from "react";
import { Spinner, Text } from "native-base";
import { Card } from "react-native-paper";
import { observer } from "mobx-react-lite";
import typeStore from "../stores/emergencyTypeStore";

const HomeItem = ({ type, navigation }) => {
  if (typeStore.loading) return <Spinner />;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PanikRequest", { type })}
    >
      <View style={{ marginTop: 30, marginLeft: 40 }}>
        <Image source={{ uri: type.image }}></Image>
        <Card style={styles.Card}>
          <Text style={styles.Text}>{type.type}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  Card: {
    width: 320,
    marginTop: 10,
    height: 87,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});

export default observer(HomeItem);
