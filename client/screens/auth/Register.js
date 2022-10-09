import {
	Text,
	Box,
	Center,
	Heading,
	VStack,
	FormControl,
	HStack,
	Link,
	Button,
	Input
} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'

export default function Register() {
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

	const confirmPass = () => {
		if (formData.confirmPassword !== formData.password) {
			setErrors({...errors, confirmPassword: 'Passwords do not match'})
			return false
		} else {
			setErrors({...errors, confirmPassword: ''})
		}
		return true
	}

	const backEndRegister = () => {
		fetch('http://192.168.10.27:3005/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: formData.username,
				password: formData.password
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Worked?:', data.successful)
				navigation.navigate('TabNavigator')
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		let valid = false
		if (validateUserName) {
			setErrors({...errors, username: ''})
		}
		if (validateUserName() && validatePassword() && confirmPass()) {
			valid = true
			console.log('form submitted')

			backEndRegister()

			setErrors({
				...errors,
				username: '',
				password: '',
				confirmPassword: ''
			})
		}
		if (valid) {
			navigation.navigate('TabNavigator')
		}
	}

	return (
		<Center w='100%' h="85%">
            <Box safeArea p='2' w='100%' maxW='290' py='8'>
                <Center>
                    <Heading
                        size='lg'
                        color='coolGray.800'
                        _dark={{color: 'warmGray.50'}}
                        fontWeight='semibold'>
                        Welcome to FitGood!
                    </Heading>
                    <Heading
                        mt='1'
                        color='coolGray.600'
                        _dark={{color: 'warmGray.200'}}
                        fontWeight='medium'
                        size='xs'>
                        Register to get started.
                    </Heading>
                </Center>
				<VStack space={3} mt='5'>
					<FormControl isRequired>
						<FormControl.Label>Username</FormControl.Label>
						<Input
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
							onChangeText={(text) =>
								setData({...formData, password: text})
							}
						/>
						{errors.password && (
							<Text style={{color: 'red'}}>
								{errors.password}
							</Text>
						)}
					</FormControl>

					<FormControl isRequired>
						<FormControl.Label>Confirm Password</FormControl.Label>
						<Input
							type='password'
							onChangeText={(text) =>
								setData({...formData, confirmPassword: text})
							}
						/>
						{errors.confirmPassword && (
							<Text style={{color: 'red'}}>
								{errors.confirmPassword}
							</Text>
						)}
					</FormControl>
					<Button mt='2' colorScheme='tertiary' onPress={handleSubmit}>
						Sign up
					</Button>
				</VStack>
			</Box>
		</Center>
	)
}
