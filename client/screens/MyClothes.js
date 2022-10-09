import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import {Select, Center, Box, CheckIcon, FlatList, Modal} from 'native-base'
import {
	Button,
	Image,
	View,
	Platform,
	ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
	Text
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import axios from 'axios'
import OptionModal from '../components/Modal'
import CustomCamera from '../components/Camera'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default function MyClothes({navigation}) {
	const [image, setImage] = useState(null)
	const [category, setCategory] = React.useState('')
	const [categoryList, setCategoryList] = React.useState([])
	const [showModal, setShowModal] = useState(false)

	const [showCamera, setShowCamera] = useState(false)

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		})

		if (!result.cancelled) {
			setImage(result.uri)
		}
	}

	const handlePressUpload = async () => {
        setShowModal(true)
        setShowCamera(false)
	}

	const setOpenCamera = () => {
		setShowModal(false)
        setShowCamera(true)
        
	}

	const saveItem = async (itemValue) => {
		setCategory(itemValue)
		const fileUri = image
		const fileName = fileUri.split('/').pop()
		try {
			let category = itemValue
			const response = await axios.post(
				'http://192.168.10.27:3005/api/upload_item',
				{
					upload_filename: fileUri,
					category: category,
					item_name: fileName
				}
			)
			console.log(response.status)
		} catch (error) {
			console.log(error)
		}
	}

	const getCategory = async () => {
		try {
			const response = await axios.get(
				'http://192.168.10.27:3005/api/categories'
			)
			setCategoryList(response.data.categories)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
        getCategory()
	}, [])

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			
			<Text
				style={{
					fontSize: 40,
					fontWeight: 'bold',
					color: 'black',
					textAlign: 'center',
					top: 90,
					position: 'absolute',
					fontFamily: 'Apple SD Gothic Neo'
				}}>
				My Clothes
			</Text>
			<View
				style={{
					top: 165,
					left: 105,
					position: 'absolute',
					width: 165,
					height: 30,
					borderRadius: 10,
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,

					elevation: 5,

					backgroundColor: '#a7f3d0',
					shadowColor: '#000'
				}}>
				{/* Pickimage on press */}
				<TouchableOpacity
					style={{position: 'absolute'}}
					onPress={handlePressUpload}>
					<Text
						style={{
							fontSize: 12,
							textAlign: 'center',
							left: 40,
							top: 7
						}}>
						Upload New Clothes
					</Text>
					<Image
						source={require('../../assets/uploadIcon.png')}
						style={{
							position: 'absolute',
							left: 10,
							top: 4,
							width: 20,
							height: 20
						}}
					/>
				</TouchableOpacity>
			</View>

			{showModal && (
				<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
					<Modal.Content maxWidth='400px'>
						<Modal.CloseButton />
						<Modal.Header>Upload New Clothes</Modal.Header>
						<Modal.Body>
							<Button
								title='Pick An Image From Camera Roll'
								onPress={pickImage}
							/>
							{image && (
								<Image
									source={{uri: image}}
									style={{
										width: 200,
										height: 200,
										marginLeft: 25,
										marginBottom: 20,
										marginTop: 20
									}}
								/>
							)}
							<Select
								selectedValue={category}
								minWidth='100'
								height={50}
								fontSize='lg'
								placeholder='What Category?'
								_selectedItem={{
									bg: 'tertiary.200',
									endIcon: <CheckIcon size='5' />
								}}
								mt={1}
								onValueChange={(itemValue) =>
									saveItem(itemValue)
								}>
								{categoryList.map((category, index) => (
									<Select.Item
										key={index}
										label={category}
										value={category}
									/>
								))}
							</Select>

							<Button
								title='Take Your Own Picture'
								onPress={setOpenCamera}
							/>
						</Modal.Body>
					</Modal.Content>
				</Modal>
			)}

			

			{showCamera && (
				<CustomCamera
					navigation={navigation}
					setShowCamera={setShowCamera}
                    showCamera={showCamera}
                    setImage={setImage}
				/>
			)}

			{/* {image && (
				<Image
					source={{uri: image}}
					style={{width: 200, height: 200}}
				/>
			)} */}

            


		</View>
	)
}
