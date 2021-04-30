import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import pic from "../assets/drawer.jpg";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appendApi } from "../stores/instance";
import { color } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const DrawerContent = ({ progress, navigation }) => {
  if (authStore.loading) return <Spinner />;
  const handleSubmit = async () => {
    await authStore.signout();
  };
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <ImageBackground
      style={{ width: "100%", flex: 1 }}
      source={require("../assets/drawer2.jpg")}
    >
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView>
          <Animated.View style={{ transform: [{ translateX }] }}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Avatar.Image
                    source={{ uri: appendApi(authStore.user.image) }}
                    size={60}
                  />
                  <View style={{ marginLeft: 15, flexDirection: "column" }}>
                    <Title style={styles.title}>
                      {authStore.user.firstName}
                    </Title>
                    <Caption style={styles.caption}>
                      Civil ID: {authStore.user.civilId}
                    </Caption>
                  </View>
                </View>
              </View>
              <Drawer.Section style={styles.drawerSection}>
                <View>
                  <Image style={styles.logo} source={pic} />
                </View>
              </Drawer.Section>
              <Drawer.Section>
                <DrawerItem
                  icon={() => (
                    <Icon name="house-user" color={"white"} size={25} />
                  )}
                  label="Profile"
                  onPress={() => {
                    navigation.navigate("Profile");
                  }}
                  activeTintColor="blue"
                  inactiveTintColor="white"
                />
                <DrawerItem
                  icon={() => (
                    <Icon name="house-user" color={"white"} size={25} />
                  )}
                  label="Settings"
                  onPress={() => {
                    navigation.navigate("Settings");
                  }}
                  activeTintColor="blue"
                  inactiveTintColor="white"
                />
              </Drawer.Section>
            </View>
          </Animated.View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={() => <Icon name="sign-out-alt" color={"white"} size={25} />}
            label="Sign Out"
            onPress={handleSubmit}
            activeTintColor="blue"
            fontWeight="bold"
            inactiveTintColor="white"
          />
        </Drawer.Section>
      </View>
    </ImageBackground>
  );
};

export default observer(DrawerContent);

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "bold",
    color: "white",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    color: "black",
  },
  drawerSection: {
    marginTop: 35,
    marginRight: 100,
  },

  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  logo: {
    width: 330,
    height: 140.5,
    padding: 60,
  },
});
