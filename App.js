import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DailyFit from './client/screens/DailyFit';
import FitFactory from './client/screens/FitFactory';
import MyClothes from './client/screens/MyClothes';
import MyFits from './client/screens/MyFits';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={false}>
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
                        transform: [{ scale: 0.1 }],
                        transform: [{ translateY: -10 }],
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
        <Tab.Screen name="FitFactory" component={FitFactory} />
        <Tab.Screen name="MyFits" component={MyFits} />
        <Tab.Screen name="MyClothes" component={MyClothes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}