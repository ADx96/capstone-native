import React from "react";
import { Text, Image, StyleSheet, View, ImageBackground } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";

const EmergencyTipsDetails = ({ route }) => {
  const { tip1 } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", flex: 1 }}
        source={{ uri: tip1.image }}
      >
        <Card
          style={{
            width: 410,
            height: 373,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 5.41,
            shadowRadius: 9.11,
            opacity: 0.7,
            elevation: 14,
            marginTop: "108%",
            marginLeft: 1,
            opacity: 0.8,
            zIndex: 1,
          }}
        >
          <Card.Content>
            <View style={styles.container}></View>
            <Text style={styles.baseText}>{tip1.name}</Text>
            <Text style={styles.baseText2}>{tip1.Details}</Text>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  tinyLogo: {
    width: 420,
    height: 820,
  },
  baseText: {
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "-5%",
    fontSize: 40,
  },
  baseText2: {
    fontWeight: "bold",
    marginLeft: "37%",
    marginTop: 15,
  },
  baseText3: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  baseText4: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  innerText: {
    color: "red",
  },
});

export default observer(EmergencyTipsDetails);
