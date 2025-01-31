import React from "react";
import GradientButton from "react-native-gradient-buttons";
import { useNavigation } from "@react-navigation/native";

import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";

const EmergencyTipsItem = ({ tip1 }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.baseText}>{tip1.name}</Text>

        <Image style={styles.tinyLogo} source={{ uri: tip1.image }} />
      </View>
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
        onPressAction={() => navigation.navigate("Details", { tip1 })}
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
    width: 90,
    height: 90,
    marginRight: "50%",
    borderRadius: 15,
  },

  baseText: {
    fontWeight: "bold",
    marginLeft: "30%",
    paddingTop: 10,
    position: "absolute",
  },
  innerText: {
    color: "red",
  },
});

export default observer(EmergencyTipsItem);
