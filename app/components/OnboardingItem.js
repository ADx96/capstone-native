import { Item } from "native-base";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default function OnboardingItem({ Item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={Item.image}
        style={[styles.image, { width, resizeMode: "conrain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{Item.title} </Text>
        <Text style={styles.description}>{Item.description} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
