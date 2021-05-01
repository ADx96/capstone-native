import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tips from "../components/TipsContent";
import Ionicons from "react-native-vector-icons/Ionicons";

const TipStack = createStackNavigator();
const TipStackScreen = ({ navigation }) => {
  return (
    <TipStack.Navigator>
      <TipStack.Screen
        name="Tips"
        component={Tips}
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
    </TipStack.Navigator>
  );
};

export default TipStackScreen;
