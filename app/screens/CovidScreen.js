import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
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
    <ScrollView>
      <View style={{ width: "100%" }}>
        <ImageSwiper />

        <ScrollView scrollEventThrottle={19}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20,
                marginTop: 30,
              }}
            >
              Avoid Getting infected
            </Text>

            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category name="Keep Clean" />
                <Category name="Socail Distance" />
                <Category name="Stay Home" />
                <Category name="Eat Healthy" />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Covid 19</Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                Stay Safe For Any Urgent Cases Hit our panic Button
              </Text>
              <View
                style={{
                  width: width - 40,
                  height: 250,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../assets/banner5.jpg")}
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
              <View
                style={{
                  width: width - 40,
                  height: 55,
                  marginTop: 20,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
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
