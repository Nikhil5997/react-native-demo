import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "../navigation/Menu";

export default function Setting() {
  return (
    <View>
      <View>
        <Text>Setting Coming Soon......</Text>
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
    lineStyle:{
        marginBottom:8,
        borderWidth:0.5,
        borderColor:"gray",
        marginTop:650
      }
});
