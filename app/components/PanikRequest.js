import React from "react";
import { ListItem } from "native-base";
import { Text, Image, StyleSheet, View, ImageBackground } from "react-native";
import { observer } from "mobx-react";
import { Card, Title } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import authStore from "../stores/authStore";
import locationStore from "../stores/LocationStore";
import { Spinner } from "@ui-kitten/components";

const PanikRequest = ({ route }) => {
  const { type } = route.params;
  if (!locationStore.location) return <Spinner />;
  console.log(locationStore.location);
  return (
    <ImageBackground style={styles.bgImage} source={require("../assets/c.gif")}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title style={styles.Title}>{type.type}</Title>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: locationStore.location.lat,
              longitude: locationStore.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              title={authStore.user.firstName}
              description="sfefd"
              coordinate={{
                latitude: locationStore.location.lat,
                longitude: locationStore.location.lng,
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
            <Text style={styles.Text}>{authStore.user.civilId}</Text>
          </Card>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
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
  Title: {
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: -20,
    marginTop: 50,
    color: "white",
    paddingTop: 20,
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
    marginTop: 50,
    width: 300,
    height: 200,
  },
});

export default observer(PanikRequest);
