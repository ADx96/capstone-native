import { View } from "react-native";

import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import * as React from "react";
import authStore from "../stores/authStore";

export default function Profile() {
  return (
    <>
      <View style={{ flex: 1, marginLeft: 100, width: 100 }}>
        <Avatar.Image size={80} source={{ uri: authStore.user.image }} />
      </View>
      <View style={{ width: 500 }}>
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {authStore.user.firstName}
            </Title>
          </Card.Content>
        </Card>

        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {" "}
              {authStore.user.lastName}
            </Title>
          </Card.Content>
        </Card>
        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {" "}
              {authStore.user.civilId}
            </Title>
          </Card.Content>
        </Card>

        <Card
          style={{
            width: "50%",
            height: 50,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Card.Content>
            <Title style={{ marginTop: -7, marginLeft: 50 }}>
              {authStore.user.phonenumber}
            </Title>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
