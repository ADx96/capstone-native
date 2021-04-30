import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryComponent from "../components/HistoryComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import { observer } from "mobx-react";

const HistoryStack = createStackNavigator();
const HistoryStackScreen = ({ navigation }) => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        component={HistoryComponent}
        options={{
          title: "",
          headerRight: () => (
            <Ionicons.Button
              name="menu"
              size={29}
              onPress={() => navigation.openDrawer()}
              color="white"
              backgroundColor="black"
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
    </HistoryStack.Navigator>
  );
};

export default observer(HistoryStackScreen);
