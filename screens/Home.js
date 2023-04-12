import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Menu from "../navigation/Menu";

export default Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImg}
          resizeMode="contain"
          source={require("../assets/icons/AD.jpg")}
        />
        <Text style={styles.headerText}>Mr.Ajit Kumar Doval</Text>
        <Text
          style={[
            styles.headerText,
            {
              fontSize: 20,
              marginTop: 10,
              color: "#4c5dab",
            },
          ]}
        >
          (NSA of India)
        </Text>
        <Text style={styles.des}>
          अजीत कुमार डोभाल, आई.पी.एस., भारत के राष्ट्रीय सुरक्षा सलाहकार हैं। वे
          30 मई 2014 से इस पद पर हैं। डोभाल भारत के पांचवे राष्ट्रीय सुरक्षा
          सलाहकार हैं। इससे पहले शिवशंकर मेनन भारत के राष्ट्रीय सुरक्षा सलाहकार
          थे
        </Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={styles.lineStyle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#ffff",
    textAlign: "center",
  },
  headerImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#344055",
    textTransform: "uppercase",
  },
  des: {
    marginTop: 30,
    color: "#7d7d7d",
    fontSize: 18,
    paddingBottom: 18,
    lineHeight: 26,
  },
  lineStyle:{
    marginBottom:8,
    borderWidth:0.5,
    borderColor:"gray"
  }
});
