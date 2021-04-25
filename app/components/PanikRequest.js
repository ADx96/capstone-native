import React from "react";
import { ListItem } from "native-base";
import { Text, Image, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { Card, Title } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import authStore from "../stores/authStore";

const PanikRequest = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ margin: 50, justifyContent: "center", alignItems: "center" }}
      >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            title="sdsd"
            description="sfefd"
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>
      </View>
      <View style={{ marginTop: 50, marginLeft: 85 }}>
        <Card style={styles.Card}>
          <Text style={styles.Text}>{authStore.user.firstName}</Text>
        </Card>
        <Card style={styles.Card}>
          <Text style={styles.Text}>{authStore.user.phonenumber}</Text>
        </Card>
        <Card style={styles.Card}>
          <Text style={styles.Text}>Name</Text>
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
  Text: {
    fontWeight: "bold",
    marginLeft: 90,
    marginTop: 15,
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
  Card: {
    width: 220,
    marginTop: 30,
    height: 50,
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
  map: {
    position: "absolute",
    width: 200,
    height: 100,
  },
});

export default observer(PanikRequest);
