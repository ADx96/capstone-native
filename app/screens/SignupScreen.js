import { Button } from "native-base";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Platform,
} from "react-native";
import authStore from "../stores/authStore";
import { Avatar, Card, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Signup = () => {
  const [image, setImage] = useState(null);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phonenumber: "",
    civilId: "",
    username: "",
    password: "",
    image: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signUp(user);
  };
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
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setUser({ ...user, image: { uri: localUri, name: filename, type } });
    }
  };
  return (
    <ImageBackground style={styles.bgImage} source={require("../assets/c.gif")}>
      <View style={{ flex: 1, width: "100%", marginTop: "20%" }}>
        <Avatar.Image
          source={{ uri: image }}
          style={{
            marginLeft: "35%",
          }}
          size={100}
        />
        <Icon
          name="cloud-upload-alt"
          style={{
            fontSize: 22,
            width: 30,
            color: "white",
            marginLeft: 210,
            marginTop: 75,
            position: "absolute",
          }}
          onPress={pickImage}
        />
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(lastName) => setUser({ ...user, lastName })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={(phonenumber) => setUser({ ...user, phonenumber })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Civil ID"
            onChangeText={(civilId) => setUser({ ...user, civilId })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Card>

        <Button
          warning
          block
          onPress={handleSubmit}
          style={{
            borderRadius: 10,
            width: 180,
            marginLeft: 110,
            marginTop: 30,
            backgroundColor: "#1f59b2",
          }}
        >
          <Icon
            style={{
              fontSize: 17,
              width: 29,
              color: "white",
              marginLeft: -10,
            }}
            name="clipboard-check"
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>SignUp</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "rgba(0,0,0,0.0)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: 250,
    marginTop: 8,
    height: 50,
    marginLeft: 10,
  },

  card: {
    opacity: 0.8,
    marginTop: 20,
    marginLeft: 60,
    width: 270,
    height: 57,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
export default observer(Signup);
