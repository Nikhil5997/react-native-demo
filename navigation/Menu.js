import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image} from "react-native";

export default Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
        source={require('../assets/icons/home.png')}
        resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
        source={require('../assets/icons/chat.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
        source={require('../assets/icons/settings.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("About")}
      >
      <Image
        source={require("../assets/icons/information.png")}  
        style={{width:50,height:50}}    
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    btnStyle:{
        textTransform:"uppercase",
        marginBottom:30
    }
   
});
