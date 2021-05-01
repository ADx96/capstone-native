import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Signup from "./app/screens/SignupScreen";
import AccedentsDetails from "./app/components/AccedentsTipsDetails";

import PanikRequest from "./app/components/PanikRequest";
import EmergencyTipsDetails from "./app/components/EmergencyTipsDetails";
import DrawerContent from "./app/components/DrawerContent";

//Auth
import authStore from "./app/stores/authStore";
import { observer } from "mobx-react";
import MainTapScreen from "./app/components/TabNavigator";

//ui kiiten
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Profile from "./app/screens/Profile";

import React, { useCallback, useEffect, useState, Profiler } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const App = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const [appIsReady, setAppIsReady] = useState(false);

  const SplashPage = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Welcome");
      }, 6000);
    }, []);
    return (
      <ImageBackground
        style={styles.bgImage}
        source={require("./app/assets/SPLASH.gif")}
        onLayout={onLayoutRootView}
      />
    );
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
    }
  }, [appIsReady]);

  if (!appIsReady) {
  }

  return (
    <NavigationContainer style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar />

        {authStore.isLoading === true || !authStore.user ? (
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Signup"
              component={Signup}
            />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}
            overlayColor="#000000bf"
            statusBarAnimation="fade"
            drawerStyle={{
              backgroundColor: "white",
              width: 240,
            }}
            drawerContentOptions={{
              activeTintColor: "#e91e63",
              itemStyle: { marginVertical: 30 },
            }}
          >
            <Drawer.Screen name="Home" component={MainTapScreen} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="PanikRequest" component={PanikRequest} />
            <Drawer.Screen
              name="AccedentsDetails"
              component={AccedentsDetails}
            />
            <Drawer.Screen name="Details" component={EmergencyTipsDetails} />
          </Drawer.Navigator>
        )}
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
  },
});
