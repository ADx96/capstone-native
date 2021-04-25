import { Button, Icon, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image, Text } from "react-native";
import authStore from "../stores/authStore";
import { TextInput } from "react-native-paper";
import { observer } from "mobx-react";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phonenumber: "",
    civilId: "",
    username: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signUp(user);
  };

  return (
    <ImageBackground style={styles.bgImage} source={require("../assets/1.jpg")}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Item floatingLabel>
        <Label>Enter your first name</Label>
        <Input onChangeText={(firstName) => setUser({ ...user, firstName })} />
      </Item>
      <Item floatingLabel>
        <Label>Last name</Label>
        <Input onChangeText={(lastName) => setUser({ ...user, lastName })} />
      </Item>
      <Item floatingLabel>
        <Label>Phobe number</Label>
        <Input
          onChangeText={(phonenumber) => setUser({ ...user, phonenumber })}
        />
      </Item>
      <Item floatingLabel>
        <Label>National ID</Label>
        <Input onChangeText={(civilId) => setUser({ ...user, civilId })} />
      </Item>
      <Item floatingLabel>
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
      <Button warning block onPress={handleSubmit}>
        <Icon name="pulse" />
        <Text>Welcome</Text>
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
export default observer(Signup);
