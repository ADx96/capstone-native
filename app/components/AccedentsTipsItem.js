import React from "react";
import GradientButton from "react-native-gradient-buttons";

import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";

const AccedentsTipsItem = ({ tip2, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.baseText}>{tip2.name}</Text>

        <Image style={styles.tinyLogo} source={{ uri: tip2.image }} />
      </View>
      <TouchableOpacity />
      <GradientButton
        style={{ marginVertical: 8 }}
        text="Details"
        textStyle={{ fontSize: 13 }}
        height={25}
        width={80}
        radius={15}
        blueMarine
        impact
        impactStyle="Light"
        style={{ marginTop: 100, position: "absolute", marginLeft: 250 }}
        onPress={() => navigation.navigate("AccedentsDetails", { tip2 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 50,
    display: "flex",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    marginRight: "50%",
  },

  baseText: {
    fontWeight: "bold",
    marginLeft: "25%",
    paddingTop: 10,
    position: "absolute",
  },
  innerText: {
    color: "red",
  },
});

export default observer(AccedentsTipsItem);
