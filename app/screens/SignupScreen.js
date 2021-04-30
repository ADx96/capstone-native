import { Button } from "native-base";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image, Text, View } from "react-native";
import authStore from "../stores/authStore";
import { Avatar, Card, TextInput } from "react-native-paper";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/FontAwesome5";

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
      <View style={{ flex: 1, width: "100%", marginTop: "20%" }}>
        <Avatar.Image style={{ marginLeft: "35%" }} size={100} />
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
