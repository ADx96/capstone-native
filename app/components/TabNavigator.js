import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import Icon from "react-native-vector-icons/FontAwesome5";

//Screens
import HomeStackScreen from "../screens/HomeScreen";
import TipStackScreen from "../screens/TipScreen";
import HistoryStackScreen from "../screens/HistoryScreen";

const Tab = AnimatedTabBarNavigator();
export const MainTapScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Emergency"
      labeled=""
      floating="true"
      component="HomeStackScreen"
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        activeBackgroundColor: "#003385",
        tabStyle: {
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          opacity: 0.8,
          marginLeft: 60,
          height: 55,
          width: "70%",
        },
      }}
      appearance={{
        floating: true,
      }}
    >
      <Tab.Screen
        name="Info"
        component={TipStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book-medical" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="radiation-alt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTapScreen;
