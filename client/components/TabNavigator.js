import 'react-native-gesture-handler'
import {View, Image} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


import DailyFit from '../screens/DailyFit'
import FitFactory from '../screens/FitFactory'
import MyClothes from '../screens/MyClothes'
import MyFits from '../screens/MyFits'

const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: true
			}}
			shifting={false}
			barStyle={{
				backgroundColor: 'whitesmoke',
				borderTopWidth: 0.5,
				borderTopColor: 'black'
			}}>
			<Tab.Screen
				options={{
					tabBarLabel: false,
					tabBarIcon: ({focused}) => {
						return (
							<View>
								<Image
									source={require('../../assets/dailyFit.png')}
									resizeMode='contain'
									style={[
										{
											transform: [
												{translateY: -15},
												{scale: 0.5}
											]
										}
									]}
								/>
							</View>
						)
					}
				}}
				name='DailyFit'
				component={DailyFit}
			/>

			<Tab.Screen
				options={{
					tabBarLabel: false,
					tabBarIcon: ({focused}) => {
						return (
							<View>
								<Image
									source={require('../../assets/fitFactory.png')}
									resizeMode='contain'
									style={[
										{
											transform: [
												{translateY: -15},
												{scale: 0.5}
											]
										}
									]}
								/>
							</View>
						)
					}
				}}
				name='FitFactory'
				component={FitFactory}
			/>

			<Tab.Screen
				options={{
					tabBarLabel: false,
					tabBarIcon: ({focused}) => {
						return (
							<View>
								<Image
									source={require('../../assets/myFits.png')}
									resizeMode='contain'
									style={[
										{
											transform: [
												{translateY: -15},
												{scale: 0.5}
											]
										}
									]}
								/>
							</View>
						)
					}
				}}
				name='MyFits'
				component={MyFits}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: false,
					tabBarIcon: ({focused}) => {
						return (
							<View>
								<Image
									source={require('../../assets/myClothes.png')}
									resizeMode='contain'
									style={[
										{
											transform: [
												{translateY: -15},
												{scale: 0.5}
											]
										}
									]}
								/>
							</View>
						)
					}
				}}
				name='MyClothes'
				component={MyClothes}
			/>
		</Tab.Navigator>
	)
}
