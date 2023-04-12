import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Setting from "./screens/Setting";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="About"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
          component={About}
        />
        <Stack.Screen
          name="Contact"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
          component={Contact}
        />
        <Stack.Screen
          name="Setting"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
