import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import * as React from "react";
import emergencyStore from "../stores/emergencyTypeStore";
import { Text } from "native-base";
import { Card } from "react-native-paper";

const Home = () => {
  return (
    <>
      <View>
        <Title style={styles.Title}>Whats Your Emergemcy?</Title>
      </View>
      <View style={styles.container}>
        <View style={{ marginTop: 12, marginLeft: 10 }}>
          <Card style={styles.Card}>
            <Text style={styles.Text}>{}</Text>
          </Card>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontWeight: "bold",
    marginLeft: 90,
    marginTop: 15,
  },
  Title: {
    marginLeft: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  Card: {
    width: 320,
    marginTop: 30,
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

export default Home;
