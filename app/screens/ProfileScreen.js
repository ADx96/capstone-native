import { View, StyleSheet } from "react-native";

import { Avatar, Card, Title } from "react-native-paper";
import * as React from "react";
import authStore from "../stores/authStore";
import { Button, Spinner } from "@ui-kitten/components";

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);

export default function Profile({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, marginTop: 150, marginLeft: 160, width: 100 }}>
        <Avatar.Image size={80} source={{ uri: authStore.user.image }} />
      </View>
      <View
        style={{
          marginTop: "-90%",
          marginLeft: 80,
          flex: 1,
          width: 500,
        }}
      >
        <Card
          style={{
            marginTop: 20,
            width: "50%",
            height: 50,
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
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 75 }}>
              {authStore.user.firstName}
            </Title>
          </Card.Content>
        </Card>

        <Card
          style={{
            marginTop: 20,
            width: "50%",
            height: 50,
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
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: 10, marginLeft: 75 }}>
              {" "}
              {authStore.user.lastName}
            </Title>
          </Card.Content>
        </Card>
        <Card
          style={{
            marginTop: 20,
            width: "50%",
            height: 50,
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
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 60 }}>
              {" "}
              {authStore.user.civilId}
            </Title>
          </Card.Content>
        </Card>

        <Card
          style={{
            marginTop: 20,
            width: "50%",
            height: 50,
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
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 69 }}>
              {authStore.user.phonenumber}
            </Title>
          </Card.Content>
        </Card>
        <Button
          style={styles.button}
          appearance="outline"
          accessoryLeft={LoadingIndicator}
          onPress={() => navigation.goBack()}
        >
          Go Back
        </Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    marginTop: 15,
    marginLeft: 35,
    width: 150,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
