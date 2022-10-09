import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NativeBaseProvider, Box, extendTheme } from 'native-base'
import { registerRootComponent } from 'expo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import TabNavigator from './client/components/TabNavigator'

import Register from './client/screens/auth/Register'
import Login from './client/screens/auth/Login'
import { useState } from 'react'

const Tab = createMaterialBottomTabNavigator()
const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
}
const theme = extendTheme({ colors: newColorTheme })

export default function App() {
    const [loggedIn, setIsLoggedIn] = useState(false)

    if (loggedIn) {
        return (
            <NativeBaseProvider theme={theme}>
                <NavigationContainer independent={true}>
                    <TabNavigator />
                </NavigationContainer>
              <StatusBar style="auto" />
            </NativeBaseProvider>
        )
    } else {
        return (
            <NativeBaseProvider theme={theme}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator
                        initialRouteName="Login"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="TabNavigator" component={TabNavigator} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </Stack.Navigator>
                </NavigationContainer>
              <StatusBar style="auto" />
            </NativeBaseProvider>
        )
    }
}

registerRootComponent(App)
