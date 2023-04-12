import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Menu from "../navigation/Menu";

const About = () => {
  return (
    <View>
      <View style={styles.aboutContainer}>
        <Text style={styles.name}>Nikhil Oberoi</Text>
        <Text style={styles.des}>React-native Developer</Text>
        <View>
          <Image
            source={require("../assets/icons/me.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150, borderRadius: 100 }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About me</Text>
          <Text style={styles.aboutContent}>
           Hi,as a starting i had created this project using React-native.I am a 
           developer in RyientSoft.I had Completed my Diploma in 2022 in Computer
           Science and Engginering from Government College.I know HTML5,CSS3,JavaScript
           with ES6 (Concepts),Reactjs and React-native.
          </Text>
        </View>
        <Text style={styles.mainHeader}>Follow me on Social Media</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL("https://www.instagram.com/")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/rishu-oberoi-1b2701217/"
              )
            }
          >
            <Image
              style={styles.iconStyle}
              source={require("../assets/icons/linkedin.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL("https://github.com/Nikhil5997/blog-though-vue-3")
            }
          >
            <Image
              style={styles.iconStyle}
              resizeMode="contain"
              source={require("../assets/icons/github.png")}
            />
          </TouchableOpacity>
        </View>
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
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    marginTop: 80,
    textTransform: "uppercase",
    lineHeight: 30,
    fontWeight:"bold"
  },
  des: {
    fontSize: 15,
    color: "gray",
    paddingBottom: 30,
  },
  aboutLayout: {
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 28,
    marginBottom: 10,
    lineHeight: 30,
    marginLeft: 100,
    fontWeight:"bold",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  mainHeader: {
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 20,
  },
  lineStyle: {
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    marginTop: 50,
  },
  aboutContent:{
   fontSize:15,
   lineHeight:20,
   fontWeight:"400"
  }
});

export default About;
