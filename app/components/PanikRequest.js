import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { observer } from "mobx-react";
import { Card, Title, Button } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import authStore from "../stores/authStore";
import locationStore from "../stores/LocationStore";
import alert from "../assets/alert.png";
import { Spinner } from "@ui-kitten/components";
import Icon from "react-native-vector-icons//FontAwesome5";
import emergencyStore from "../stores/EmergencyStore";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const showToastWithGravityAndOffset = () => {
  ToastAndroid.showWithGravityAndOffset(
    "A wild toast appeared!",
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    25,
    50
  );
};
const PanikRequest = ({ route }) => {
  const { type } = route.params;
  const navigation = useNavigation();
  if (!locationStore.location) return <Spinner />;

  console.log(locationStore.location);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickMedia = async () => {
    await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);
  };

  const handleSubmit = async () => {
    const Emergency = {
      type: type.type,
      lat: locationStore.location.lat,
      lng: locationStore.location.lng,
      location: locationStore.location,
    };
    await emergencyStore.createEmergency(Emergency);
    console.log("efe", Emergency);
    navigation.navigate("History");
    showToastWithGravityAndOffset();
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/Alert.gif")}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 10,
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
        <View style={{ marginTop: 15, marginLeft: 85 }}>
          <TouchableOpacity onPress={() => pickMedia()}>
            <Icon color={"white"} size={25} name="file-video" />
          </TouchableOpacity>
          <Text style={{ fontSize: 10, color: "white" }}>
            Choose Image/Video
          </Text>

          <Card style={styles.Card}>
            <Text style={styles.Text}>
              <Icon size={25} name="user-injured" />
              {authStore.user.firstName}
            </Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.Text}>
              <Icon size={25} name="phone" /> {authStore.user.phonenumber}
            </Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.Text}>
              <Icon size={25} name="id-card" />
              {authStore.user.civilId}
            </Text>
          </Card>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <View
            style={{
              backgroundColor: "red",
              width: 115,
              height: 115,
              borderRadius: 100,
              marginLeft: 140,
              marginTop: 50,
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                marginLeft: 7,

                marginTop: 9,
                borderColor: "#F5F5F5",

                borderWidth: 1,
              }}
            ></View>
          </View>

          <View
            style={{
              backgroundColor: "#FF1313",
              width: 70,
              height: 70,
              borderRadius: 100,
              marginLeft: 162,
              marginTop: -90,
              shadowOpacity: 5,
              shadowRadius: 11.11,

              elevation: 17,
            }}
          >
            <Image style={styles.tinyLogo2} source={alert}></Image>
          </View>
        </TouchableOpacity>
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
    flex: 1,
  },
  tinyLogo2: {
    width: 70,
    height: 70,
    position: "relative",
    marginTop: -10,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    marginTop: 150,
  },
  Text: {
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 15,
    fontSize: 20,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: -20,
    marginTop: 30,
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
    opacity: 0.8,
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
    marginTop: 30,
    width: 300,
    height: 200,
  },
});

export default observer(PanikRequest);
