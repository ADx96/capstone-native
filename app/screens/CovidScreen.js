import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";
import ImageSwiper from "../components/ImageSiper";

const { height, width } = Dimensions.get("window");

const Explore = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageSwiper />
      <View>
        <ScrollView scrollEventThrottle={19}>
          <View style={{ backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20,
              }}
            >
              Avoid Getting infected
            </Text>

            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category name="Home" />
                <Category name="Experiences" />
                <Category name="Resturant" />
                <Category name="Resturant" />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Covid 19</Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                Stay Safe For Any Urgent Cases Hit our panic Button
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#dddddd",
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
