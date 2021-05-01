import React from "react";
import { Text, Image, StyleSheet, View, ImageBackground } from "react-native";
import { observer } from "mobx-react";
import { Card } from "react-native-paper";
import { SocialIcon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const EmergencyTipsDetails = ({ route }) => {
  const { tip1 } = route.params;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", flex: 1 }}
        source={{ uri: tip1.image }}
      >
        <Icon
          name="arrow-circle-left"
          style={{
            fontSize: 32,
            width: 40,
            color: "white",
            marginLeft: 28,
            marginTop: 55,
            position: "absolute",
          }}
          onPress={() => navigation.goBack()}
        />
        <Card
          style={{
            width: 410,
            height: 373,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 5.41,
            shadowRadius: 9.11,
            opacity: 0.7,
            elevation: 14,
            marginTop: "108%",
            marginLeft: 1,
            opacity: 0.8,
            zIndex: 1,
          }}
        >
          <Card.Content>
            <View style={styles.container}></View>
            <Text style={styles.baseText}>{tip1.name}</Text>
            <Text style={styles.baseText2}>{tip1.Details}</Text>
            <View style={{ position: "absolute", marginTop: 110 }}>
              <SocialIcon type="twitter" />

              <SocialIcon raised={false} type="instagram" />

              <SocialIcon light type="facebook" />
            </View>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  tinyLogo: {
    width: 420,
    height: 820,
  },
  baseText: {
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "-5%",
    fontSize: 40,
  },
  baseText2: {
    fontWeight: "bold",
    marginLeft: "37%",
    marginTop: 15,
  },
  baseText3: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  baseText4: {
    fontWeight: "bold",
    marginLeft: "37%",
  },
  innerText: {
    color: "red",
  },
});

export default observer(EmergencyTipsDetails);
