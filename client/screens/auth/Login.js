import {
	Box,
	Center,
	Heading,
	VStack,
	FormControl,
	HStack,
	Link,
	Button,
	Input,
	Text
} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import axios from 'axios'

export default function Login() {
	const navigation = useNavigation()
	const [formData, setData] = useState({
		username: '',
		password: ''
	})

	const [errors, setErrors] = useState({
		username: '',
		password: ''
	})

	const validateUserName = () => {
		if (formData.username === undefined) {
			setErrors({...errors, username: 'Username is required'})
			return false
		} else if (formData.username.length < 3) {
			setErrors({...errors, username: 'Username is too short'})
			return false
		} else {
			setErrors({...errors, username: ''})
		}

		return true
	}

	const validatePassword = () => {
		if (formData.password === undefined) {
			setErrors({...errors, password: 'Password is required'})
			return false
		} else if (formData.password.length < 6) {
			setErrors({...errors, password: 'Password is too short'})
			return false
		} else {
			setErrors({...errors, password: ''})
		}

		return true
	}

	const backEndLogin = async () => {
		try {
			const response = await fetch(
				'http://192.168.10.27:3005/api/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: formData.username,
						password: formData.password
					})
				}
			)
			return response.status
		} catch (error) {
			console.error(error)
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		let valid = false

		if (formData.username.length > 0) {
			setErrors({...errors, username: ''})
		}

		if (validateUserName() && validatePassword()) {
			let res = await backEndLogin()

			if (res === 200) {
				valid = true
			}

			setErrors({...errors, username: '', password: ''})
		}

		if (valid) {
			navigation.navigate('TabNavigator')
		}

		if (!valid) {
			setErrors({
				...errors,
				username: 'Username or password is incorrect'
			})
		}
	}

	return (
		<Center w='100%' h="85%">
			<Box safeArea p='2' py='8' w='100%' maxW='290'>
				<Center>
					<Heading
						size='lg'
						fontWeight='600'
						color='coolGray.800'
						_dark={{color: 'warmGray.50'}}>
						Welcome to FitGood!
					</Heading>
					<Heading
						mt='1'
						_dark={{color: 'warmGray.200'}}
						color='coolGray.600'
						fontWeight='medium'
						size='xs'>
						Sign in to continue!
					</Heading>
				</Center>
				<Center></Center>
				<VStack space={3} mt='5'>
					<FormControl isRequired>
						<FormControl.Label>Username</FormControl.Label>
						<Input
							placeholder='Enter A Username!'
							onChangeText={(text) =>
								setData({...formData, username: text})
							}
						/>

						{errors.username && (
							<Text color='red.500'>{errors.username}</Text>
						)}
					</FormControl>
					<FormControl isRequired>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							type='password'
							placeholder='Enter A Password!'
							onChangeText={(text) =>
								setData({...formData, password: text})
							}
						/>

						{errors.password && (
							<Text style={{color: 'red'}}>
								{errors.password}
							</Text>
						)}

						<Link
							_text={{
								fontSize: 'xs',
								fontWeight: '500',
								color: 'tertiary.400'
							}}
							alignSelf='flex-end'
							mt='1'>
							Forgot Password?
						</Link>
					</FormControl>
					<Button mt='2' colorScheme='tertiary' onPress={onSubmit}>
						Sign in
					</Button>
					<HStack mt='6' justifyContent='center'>
						<Text
							fontSize='sm'
							color='coolGray.600'
							_dark={{color: 'warmGray.200'}}>
							Don't have an account? {''}
						</Text>
						<Link
							_text={{
								color: 'tertiary.400',
								fontWeight: 'medium',
								fontSize: 'sm'
							}}
							onPress={() => navigation.navigate('Register')}>
							Sign Up
						</Link>
					</HStack>
				</VStack>
			</Box>
		</Center>
	)
}
