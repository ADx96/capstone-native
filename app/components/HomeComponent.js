import { View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";

import * as React from "react";
import { Spinner, Text } from "native-base";
import { Card } from "react-native-paper";
import { observer } from "mobx-react-lite";
import typeStore from "../stores/emergencyTypeStore";
import { appendApi } from "../stores/instance";

const HomeItem = ({ type, navigation }) => {
  if (typeStore.loading)
    return (
      <Spinner
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PanikRequest", { type })}
    >
      <View style={{ marginTop: 10, marginLeft: 40 }}>
        <Card style={styles.Card}>
          <Text style={styles.Text}>{type.type}</Text>
          <Image
            style={styles.coverImage}
            source={{ uri: appendApi(type.image) }}
          ></Image>
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
    zIndex: 1,
    color: "white",
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
  coverImage: {
    width: 320,
    marginTop: -82,
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
  },
});

export default observer(HomeItem);
