import React from "react";
import { StyleSheet, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MapView, { Marker } from "react-native-maps";

import { TabBar, Tab, Layout, Text, Icon } from "@ui-kitten/components";
import EmergencyScreen from "../screens/EmergencyScreen";
import AccedentScreen from "../screens/AccedentScreen";
import CovidScreen from "../screens/CovidScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

//thiis is the map code

// const CovidScreen = () => (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <MapView
//       style={styles.map}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     >
//       <Marker
//         title="sdsd"
//         description="sfefd"
//         coordinate={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//         }}
//       />
//     </MapView>
//   </View>
// );

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
