import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";

const HistoryItem = ({ emergency }) => {
  return (
    <View style={{ flex: 1, marginLeft: 40 }}>
      <View>
        <Card
          style={{
            width: 320,
            height: 150,
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
          }}
        >
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </View>
            <Text style={styles.baseText}>Status:{emergency.status}</Text>
            <Text style={styles.baseText2}>
              AMBULANCE{emergency.Types.type}
            </Text>
            <Text style={styles.baseText3}>
              Date and time{emergency.createdAt}
            </Text>
            <Text style={styles.baseText4}>Location:{emergency.location}</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  baseText: {
    fontWeight: "bold",
    marginLeft: "70%",
    marginTop: "-35%",
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

export default HistoryItem;
