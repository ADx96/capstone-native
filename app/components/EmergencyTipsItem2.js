import { styles } from "expo-ui-kit";
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import EmergencyTipsItem from "./EmergencyTipsItem";
import { tips1 } from "./TipsData";
import OnboardingItem from "../components/OnboardingItem";

export default function EmergencyTipsItem2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThresHold: 50 }).current;

  return (
    <View style={styles1.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={tips1}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          // ref={tips1Ref}
        />
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
