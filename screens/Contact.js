import React from "react";
import { View, Text, StyleSheet, Linking,Image} from "react-native";
import Menu from "../navigation/Menu";

export default function Chat() {
  const handleEmailLink = () => {
    const email = "oberoinikhilswag@example.com";
    const url = `mailto:${email}`;
    Linking.openURL(url);
  };

  const handlePressCall = () => {
    const call = "tel:+98580125658";
    Linking.openURL(call);
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Contact Us for Any Query
          </Text>
           <Image
          source={require("../assets/icons/chat.png")}/>

          <Text
            style={{ fontSize: 20, fontWeight: "bold" }}
            onPress={handleEmailLink}
          >
            Email here
          </Text>
          <Image
          />
           <Image
          source={require("../assets/icons/chat.png")}/>
          <Text
            style={{ fontSize: 20, fontWeight: "bold" }}
            onPress={handlePressCall}
          >
            
            Call us
          </Text>
        </View>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={styles.lineStyle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lineStyle: {
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    marginTop: 480,
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo:{
    
  }
});
