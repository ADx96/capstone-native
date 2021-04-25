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
      <Item fixedLabel>
        <Label>Username</Label>
        <Input onChangeText={(username) => setUser({ ...user, username })} />
      </Item>
      <Item fixedLabel last>
        <Label>Password</Label>
        <Input
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </Item>
      <Button danger block onPress={handleSubmit}>
        <Icon name="medkit" />
        <Text>SignIn</Text>
      </Button>
      <Button warning block onPress={() => navigation.navigate("Signup")}>
        <Icon name="person" />
        <Text>SignUp</Text>
      </Button>
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
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
});
export default observer(WelcomeScreen);
