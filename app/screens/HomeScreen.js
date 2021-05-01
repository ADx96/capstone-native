import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

import HomeList from "../components/HomeList";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeList}
        options={{
          title: "",
          headerRight: () => (
            <Ionicons.Button
              name="menu"
              size={29}
              onPress={() => navigation.openDrawer()}
              color="white"
              backgroundColor="transparent"
            />
          ),
          headerShown: true,
          headerTransparent: true,

          //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
