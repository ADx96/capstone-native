import { observer } from "mobx-react";
import { Button, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";
import { TextInput, Card, Text } from "react-native-paper";
import authStore from "../stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome5";

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
    <ImageBackground style={styles.bgImage} source={require("../assets/c.gif")}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={{ flex: 1, width: "100%", marginTop: "60%" }}>
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
          style={{
            borderRadius: 10,
            width: 180,
            marginLeft: 110,
            marginTop: 30,
            backgroundColor: "#1f59b2",
          }}
          block
          onPress={handleSubmit}
        >
          <Icon
            name="sign-in-alt"
            style={{
              fontSize: 17,
              width: 30,
              color: "white",
              marginLeft: -10,
            }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>SignIn</Text>
        </Button>
        <Button
          style={{
            borderRadius: 10,
            width: 180,
            marginLeft: 110,
            marginTop: 30,
            backgroundColor: "#1f59b2",
          }}
          block
          onPress={() => navigation.navigate("Signup")}
        >
          <Icon
            style={{
              fontSize: 17,
              width: 29,
              color: "white",
              marginLeft: -10,
            }}
            name="user-plus"
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>SignUp</Text>
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
    width: 300,
    height: 100,
    position: "absolute",
    top: 100,
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
    marginTop: 20,
    marginLeft: 70,
    width: 250,
    opacity: 0.8,
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
