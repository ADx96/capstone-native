import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },

  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },

  image: {
    width,
    flex: 1,
  },
};

export default function ImageSwiper() {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} height={100} horizontal={false} autoplay>
        <View style={styles.slide1}>
          <Text style={styles.text}>Stay</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Safe</Text>
        </View>
      </Swiper>

      <Swiper
        style={styles.wrapper}
        height={240}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#000",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: null,
          right: 10,
        }}
        loop
      >
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require("../assets/banner1.jpg")}
          />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require("../assets/banner2.jpg")}
          />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require("../assets/banner3.jpg")}
          />
        </View>
      </Swiper>
    </View>
  );
}
