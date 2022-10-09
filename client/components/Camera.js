import React, {useState, useEffect} from 'react'
import {
	StyleSheet,
	View,
	Button,
	Image,
	useWindowDimensions,
	StatusBar,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native'
import {Camera, CameraType} from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import {Box, Center} from 'native-base'

export default function CustomCamera({navigation, setShowCamera, showCamera, setImage}) {
	const {cameraStyle, contentStyle} = useFullScreenCameraStyle()
	const [cameraPermission, setCameraPermission] = useState(null)
	const [galleryPermission, setGalleryPermission] = useState(null)
	const [mediaType, setMediaType] = useState('')
	const [camera, setCamera] = useState(null)
	const [captureUri, setCaptureUri] = useState(null)
	const [type, setType] = useState(Camera.Constants.Type.back)
	const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
	const [isPressed, Pressed] = useState(false)

	const permissionFunction = async () => {
		const cameraPermission = await Camera.requestCameraPermissionsAsync()
		setCameraPermission(cameraPermission.status === 'granted')
		const imagePermission =
			await ImagePicker.getMediaLibraryPermissionsAsync()
		setGalleryPermission(imagePermission.status === 'granted')
		if (
			imagePermission.status !== 'granted' &&
			cameraPermission.status !== 'granted'
		) {
			alert('Permission for media access needed.')
		}
	}

	const takePicture = async () => {
		if (camera) {
			const data = await camera.takePictureAsync(null)

			setCaptureUri(data.uri)
			setMediaType('capture')

			console.log('picture taken')
		}
	}

	const handleClose = () => {
		setShowCamera(false)
	}


	const handleFlashPress = () => {
		if (flashMode === Camera.Constants.FlashMode.off) {
			setFlashMode(Camera.Constants.FlashMode.on)
		} else {
			setFlashMode(Camera.Constants.FlashMode.off)
		}
		Pressed(!isPressed)
	}

	function useFullScreenCameraStyle(ratio = 3 / 4) {
		const window = useWindowDimensions()
		const isPortrait = window.height >= window.width
		let cameraStyle, contentStyle

		if (isPortrait) {
			const widthByRatio = window.height * ratio
			const widthOffsetByRatio = -((widthByRatio - window.width) / 2)

			cameraStyle = {left: widthOffsetByRatio, right: widthOffsetByRatio}
			contentStyle = {
				left: -widthOffsetByRatio,
				right: -widthOffsetByRatio
			}
		} else {
			const heightByRatio = window.width * ratio
			const heightOffsetByRatio = -((heightByRatio - window.height) / 2)

			cameraStyle = {
				top: heightOffsetByRatio,
				bottom: heightOffsetByRatio
			}
			contentStyle = {
				top: -heightOffsetByRatio,
				bottom: -heightOffsetByRatio
			}
		}
		return {cameraStyle, contentStyle}
	}

	const handleFlip = () => {
		if (type === CameraType.back) {
			setType(CameraType.front)
		} else {
			setType(CameraType.back)
		}
	}

	useEffect(() => {
    permissionFunction()
    if (captureUri) {
      setImage(captureUri)
      handleClose()
    }
	}, [captureUri])

	return (
		showCamera && (
			<View style={styles.container}>
				<View style={[styles.cover, contentStyle]}>
					<Camera
						ref={(ref) => setCamera(ref)}
						style={[styles.cover, cameraStyle]}
						flashMode={flashMode}
						type={type}
						ratio={'1:1'}></Camera>
				</View>

				<View style={styles.buttonContainer}>
					<Center>
						<TouchableOpacity onPress={takePicture}>
							<Image
								source={require('../../assets/favicon.png')}
								style={{width: 50, height: 50, bottom: -600}}
							/>
						</TouchableOpacity>
					</Center>
				</View>

				<TouchableOpacity
					style={{position: 'absolute'}}
					onPress={() => handleClose()}>
					<Image
						source={require('../../assets/cancel.png')}
						style={{
							position: 'absolute',
							top: 70,
							left: 280,
							width: 80,
							height: 50,
							transform: [{scaleX: 0.5}, {scaleY: 0.5}]
						}}
					/>
				</TouchableOpacity>

				<TouchableHighlight
					style={{position: 'absolute'}}
					onPress={() => handleFlashPress()}>
					<Image
						source={require('../../assets/flash.png')}
						style={isPressed ? styles.highlight : styles.normal}
					/>
				</TouchableHighlight>

				{captureUri && mediaType === 'capture' && (
					<View style={styles.capture}>
						<Image
							source={{uri: captureUri}}
							style={styles.capture}
						/>
						<TouchableOpacity
							style={{position: 'absolute', zIndex: 1}}
							onPress={() => setCaptureUri(null)}>
							<Image
								source={require('../../assets/refresh.png')}
								style={{
									transform: [{scaleX: 0.3}, {scaleY: 0.3}],
									right: 130,
									top: -250
								}}
							/>
						</TouchableOpacity>

            <TouchableOpacity
              style={styles.container}
              onPress={setImage}>
							<Image
								source={require('../../assets/upload.png')}
								style={{
									position: 'absolute',
									top: 70,
									left: 280,
									width: 80,
									height: 70,
									transform: [{scaleX: 0.5}, {scaleY: 0.5}]
								}}
							/>
						</TouchableOpacity>
					</View>
				)}

				<StatusBar
					backgroundColor='transparent'
					translucent={true}></StatusBar>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},
	cameraContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	fixedRatio: {
		flex: 1,
		aspectRatio: 1
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	cover: {
		position: 'absolute',
		top: 20,
		bottom: 0,
		right: 0,
		left: 0
	},
	capture: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		position: 'absolute',
		top: 20,
		bottom: 0,
		right: 0,
		left: 0,
		aspectRatio: 1
	},
	normal: {
		position: 'absolute',
		top: 70,
		left: 10,
		width: 80,
		height: 50,
		transform: [{scaleX: 0.5}, {scaleY: 0.5}]
	},
	highlight: {
		position: 'absolute',
		top: 70,
		left: 10,
		width: 80,
		height: 50,
		transform: [{scaleX: 0.5}, {scaleY: 0.5}],
		backgroundColor: 'blue',
		borderRadius: 50
	}
})
