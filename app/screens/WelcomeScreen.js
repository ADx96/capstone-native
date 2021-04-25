import { observer } from "mobx-react";
import { Button, Icon, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";
import { TextInput, Card, Text } from "react-native-paper";
import authStore from "../stores/authStore";

const WelcomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signIn(user);
  };

  return (
    <ImageBackground style={styles.bgImage} source={require("../assets/1.jpg")}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={{ flex: 1, width: "100%", marginTop: "50%" }}>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Place your Text"
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Place your Text"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Card>

        <Button
          style={{
            borderRadius: 10,
            width: 150,
            marginLeft: 120,
            marginTop: 30,
          }}
          block
          onPress={handleSubmit}
        >
          <Icon name="medkit" />
          <Text>SignIn</Text>
        </Button>
        <Button
          style={{
            borderRadius: 10,
            width: 150,
            marginLeft: 120,
            marginTop: 30,
          }}
          block
          onPress={() => navigation.navigate("Signup")}
        >
          <Icon name="person" />
          <Text>SignUp</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    position: "absolute",
    top: 70,
    marginLeft: "-5%",
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
  },

  card: {
    opacity: 1,
    marginTop: 20,
    marginLeft: 70,
    width: 250,
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
export default observer(WelcomeScreen);
