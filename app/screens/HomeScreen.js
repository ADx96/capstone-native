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
          headerLeft: () => (
            <Ionicons.Button
              name="menu"
              size={29}
              backgroundColor="white"
              onPress={() => navigation.openDrawer()}
              color="#000"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
