import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Signup from "./app/screens/SignupScreen";

//Auth
import authStore from "./app/stores/authStore";
import { observer } from "mobx-react";
import MainTapScreen from "./app/components/TabNavigator";

//ui kiiten
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import DrawerContent from "./app/components/DrawerContent";
import Profile from "./app/screens/ProfileScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar />
      {authStore.isLoading === true ? (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainTapScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default observer(App);
