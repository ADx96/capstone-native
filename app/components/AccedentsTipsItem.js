import React from "react";
import GradientButton from "react-native-gradient-buttons";

import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const AccedentsTipsItem = ({ tip2 }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.baseText}>{tip2.name}</Text>

        <Image style={styles.tinyLogo} source={{ uri: tip2.image }} />
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
        onPressAction={() => navigation.navigate("AccedentsDetails", { tip2 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 45,
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

export default observer(AccedentsTipsItem);
