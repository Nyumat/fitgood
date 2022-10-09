import 'react-native-gesture-handler'
import {useState} from 'react'
import {StatusBar} from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NativeBaseProvider, Box, extendTheme} from 'native-base'
import {registerRootComponent} from 'expo'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import TabNavigator from './client/components/TabNavigator'
import AnimatedSplash from 'react-native-animated-splash-screen'
import Register from './client/screens/auth/Register'
import Login from './client/screens/auth/Login'
import CustomCamera from './client/components/Camera'
import MyClothes from './client/screens/MyClothes'
import Gallery from './client/components/Gallery'
import Loader from './client/components/Loader'

const newColorTheme = {
	brand: {
		900: '#8287af',
		800: '#7c83db',
		700: '#b3bef6'
	}
}
const theme = extendTheme({colors: newColorTheme})

export default function App() {
	const [loading, setLoading] = useState(false)

	setTimeout(() => {
		setLoading(true)
	}, 5000)

	const [loggedIn, setIsLoggedIn] = useState(false)

	if (loggedIn) {
		return (
			<AnimatedSplash
				translucent={true}
				isLoaded={loading}
				logoImage={require('./assets/fitGood.png')}
				backgroundColor={'#41A798'}
				logoHeight={250}
				logoWidth={250}
				component={<Loader></Loader>}>
				<NativeBaseProvider theme={theme}>
					<NavigationContainer>
						<TabNavigator />
					</NavigationContainer>
					<StatusBar style='auto' />
				</NativeBaseProvider>
			</AnimatedSplash>
		)
	} else {
		return (
			<AnimatedSplash
				translucent={true}
				isLoaded={loading}
				logoImage={require('./assets/fitGood.png')}
				backgroundColor={'#41A798'}
				logoHeight={250}
				logoWidth={250}
				component={<Loader></Loader>}>
				<NativeBaseProvider theme={theme}>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName='Login'
							screenOptions={{
								headerShown: false
							}}>
							<Stack.Screen
								name='TabNavigator'
								component={TabNavigator}
							/>
							<Stack.Screen name='Login' component={Login} />
							<Stack.Screen
								name='Register'
								component={Register}
							/>
							<Stack.Screen
								name='Camera'
								component={CustomCamera}
							/>
							<Stack.Screen
								name='MyClothes'
								component={MyClothes}
							/>
							<Stack.Screen name='Gallery' component={Gallery} />
						</Stack.Navigator>
					</NavigationContainer>
					<StatusBar style='auto' />
				</NativeBaseProvider>
			</AnimatedSplash>
		)
	}
}

registerRootComponent(App)
