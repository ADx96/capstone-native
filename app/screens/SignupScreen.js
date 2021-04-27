import { Button, Icon } from "native-base";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image, Text, View } from "react-native";
import authStore from "../stores/authStore";
import { Card, TextInput } from "react-native-paper";
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
    <ImageBackground style={styles.bgImage} source={require("../assets/c.gif")}>
      <View style={{ flex: 1, width: "100%", marginTop: "10%" }}>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Place your Text"
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Place your Text"
            onChangeText={(lastName) => setUser({ ...user, lastName })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            onChangeText={(phonenumber) => setUser({ ...user, phonenumber })}
          />
        </Card>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Place your Text"
            onChangeText={(civilId) => setUser({ ...user, civilId })}
          />
        </Card>
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
          warning
          block
          onPress={handleSubmit}
          style={{
            borderRadius: 10,
            width: 150,
            marginLeft: 120,
            marginTop: 30,
          }}
        >
          <Icon name="pulse" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SignUp</Text>
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
export default observer(Signup);
