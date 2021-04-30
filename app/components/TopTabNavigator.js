import React from "react";
import { StyleSheet, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TabBar, Tab, Layout, Text } from "@ui-kitten/components";
import EmergencyScreen from "../screens/EmergencyScreen";
import AccedentScreen from "../screens/AccedentScreen";
import CovidScreen from "../screens/CovidScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const PersonIcon = () => <Icon size={20} name="fire-alt" />;

const BellIcon = () => <Icon size={20} name="car-crash" />;

const EmailIcon = () => <Icon size={20} name="virus" />;

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab icon={PersonIcon} title="Fire Emergancy" />
    <Tab icon={BellIcon} title="Accedents " />
    <Tab icon={EmailIcon} title="Covid 19" />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="Emergency" component={EmergencyScreen} />
    <Screen name="Accedent" component={AccedentScreen} />
    <Screen name="Covid" component={CovidScreen} />
  </Navigator>
);

export const AppNavigator = () => <TabNavigator />;
