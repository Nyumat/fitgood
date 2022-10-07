import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { registerRootComponent } from "expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import DailyFit from "./client/screens/DailyFit";
import FitFactory from "./client/screens/FitFactory";
import MyClothes from "./client/screens/MyClothes";
import MyFits from "./client/screens/MyFits";
import Categories from "./client/screens/Categories";

const Tab = createMaterialBottomTabNavigator();
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Tab.Navigator
          shifting={false}
          barStyle={{ backgroundColor: "#DBDBDB" }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("./assets/dailyFit.png")}
                      resizeMode="contain"
                      style={[
                        {
                          transform: [{ translateY: -15 }, { scale: 0.5 }],
                        },
                      ]}
                    />
                  </View>
                );
              },
            }}
            name="DailyFit"
            component={DailyFit}
          />

          <Tab.Screen
            options={{
              tabBarLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("./assets/fitFactory.png")}
                      resizeMode="contain"
                      style={[
                        {
                          transform: [{ translateY: -15 }, { scale: 0.5 }],
                        },
                      ]}
                    />
                  </View>
                );
              },
            }}
            name="FitFactory"
            component={FitFactory}
          />

          <Tab.Screen
            options={{
              tabBarLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("./assets/myFits.png")}
                      resizeMode="contain"
                      style={[
                        {
                          transform: [{ translateY: -15 }, { scale: 0.5 }],
                        },
                      ]}
                    />
                  </View>
                );
              },
            }}
            name="MyFits"
            component={MyFits}
          />
          <Tab.Screen
            options={{
              tabBarLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("./assets/myClothes.png")}
                      resizeMode="contain"
                      style={[
                        {
                          transform: [{ translateY: -15 }, { scale: 0.5 }],
                        },
                      ]}
                    />
                  </View>
                );
              },
            }}
            name="MyClothes"
            component={MyClothes}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

registerRootComponent(App);
