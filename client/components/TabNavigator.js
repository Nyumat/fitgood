import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { registerRootComponent } from 'expo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DailyFit from '../screens/DailyFit'
import FitFactory from '../screens/FitFactory'
import MyClothes from '../screens/MyClothes'
import MyFits from '../screens/MyFits'
import Categories from '../screens/Categories'

const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                shifting={false}
                barStyle={{ backgroundColor: '#DBDBDB' }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View>
                                    <Image
                                        source={require('../../assets/dailyFit.png')}
                                        resizeMode="contain"
                                        style={[
                                            {
                                                transform: [{ translateY: -15 }, { scale: 0.5 }],
                                            },
                                        ]}
                                    />
                                </View>
                            )
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
                                        source={require('../../assets/fitFactory.png')}
                                        resizeMode="contain"
                                        style={[
                                            {
                                                transform: [{ translateY: -15 }, { scale: 0.5 }],
                                            },
                                        ]}
                                    />
                                </View>
                            )
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
                                        source={require('../../assets/myFits.png')}
                                        resizeMode="contain"
                                        style={[
                                            {
                                                transform: [{ translateY: -15 }, { scale: 0.5 }],
                                            },
                                        ]}
                                    />
                                </View>
                            )
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
                                        source={require('../../assets/myClothes.png')}
                                        resizeMode="contain"
                                        style={[
                                            {
                                                transform: [{ translateY: -15 }, { scale: 0.5 }],
                                            },
                                        ]}
                                    />
                                </View>
                            )
                        },
                    }}
                    name="MyClothes"
                    component={MyClothes}
                />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}
