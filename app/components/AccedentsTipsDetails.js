import React from "react";

import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";

const AccedentsDetails = ({ route }) => {
  const { tip2 } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: tip2.image }} style={styles.tinyLogo} />
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
          marginTop: "82%",
          marginLeft: 1,
          opacity: 0.8,
        }}
      >
        <Card.Content>
          <Text style={styles.baseText}>{tip2.name}</Text>
          <Text style={styles.baseText2}>{tip2.Details}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  baseText: {
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: "10%",
    fontSize: 20,
    marginTop: 50,
  },
  baseText2: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "10%",
    marginTop: 50,
  },
  baseText3: {
    fontWeight: "bold",
    marginLeft: "17%",
  },
  baseText4: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  innerText: {
    color: "red",
  },
});

export default observer(AccedentsDetails);
