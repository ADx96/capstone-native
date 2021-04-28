import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import pic from "../assets/drawer.jpg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Spinner } from "native-base";
import { appendApi } from "../stores/instance";

const DrawerContent = ({ navigation }) => {
  if (authStore.loading) return <Spinner />;
  const handleSubmit = async () => {
    await authStore.signout();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{ uri: appendApi(authStore.user.image) }}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{authStore.user.firstName}</Title>
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
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="message" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={handleSubmit}
        />
      </Drawer.Section>
    </View>
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
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "bold",
    color: "black",
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
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    fontSize: 16,
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
