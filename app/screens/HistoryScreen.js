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
    </HistoryStack.Navigator>
  );
};

export default observer(HistoryStackScreen);
