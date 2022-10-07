import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

export default function Camera({ navigation }) {
  const { cameraStyle, contentStyle } = useFullScreenCameraStyle();
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [camera, setCamera] = useState(null);
  const [captureUri, setCaptureUri] = useState(null);
  const [uploadUri, setUploadUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permissionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission.status === "granted");
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    setGalleryPermission(imagePermission.status === "granted");
    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);

      setCaptureUri(data.uri);
      setMediaType("capture");

      console.log("picture taken");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      console.log(result);
      setUploadUri(result.uri);
      setMediaType("upload");

      console.log("image picked");
    } else {
      setMediaType("");
    }
  };

  function useFullScreenCameraStyle(ratio = 3 / 4) {
    const window = useWindowDimensions();
    const isPortrait = window.height >= window.width;
    let cameraStyle, contentStyle;

    if (isPortrait) {
      const widthByRatio = window.height * ratio;
      const widthOffsetByRatio = -((widthByRatio - window.width) / 2);

      cameraStyle = { left: widthOffsetByRatio, right: widthOffsetByRatio };
      contentStyle = { left: -widthOffsetByRatio, right: -widthOffsetByRatio };
    } else {
      const heightByRatio = window.width * ratio;
      const heightOffsetByRatio = -((heightByRatio - window.height) / 2);

      cameraStyle = { top: heightOffsetByRatio, bottom: heightOffsetByRatio };
      contentStyle = {
        top: -heightOffsetByRatio,
        bottom: -heightOffsetByRatio,
      };
    }
    return { cameraStyle, contentStyle };
  }

  const handleFlip = () => {
    if (type === CameraType.back) {
      setType(CameraType.front);
    } else {
      setType(CameraType.back);
    }
  };

  useEffect(() => {
    permissionFunction();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.cover, contentStyle]}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={[styles.cover, cameraStyle]}
          type={type}
          ratio={"1:1"}
        ></Camera>
      </View>

      <View style={styles.button}>
        <Button title="Flip Image" onPress={() => handleFlip()} />
        <Button title={"Take Picture"} onPress={takePicture} />
        <Button title={"Gallery"} onPress={pickImage} />
      </View>

      {captureUri && mediaType === "capture" && (
        <View style={styles.capture}>
          <Image source={{ uri: captureUri }} style={styles.capture} />
          <Button
            title="Retake"
            style={styles.button}
            onPress={() => setCaptureUri(null)}
          />
        </View>
      )}

      {uploadUri && mediaType === "upload" && (
        <View style={styles.container}>
          <Image source={{ uri: uploadUri }} style={styles.uploadImage} />
          <Button
            title="Reupload"
            style={styles.button}
            onPress={() => setUploadUri(null)}
          />
        </View>
      )}
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  capture: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    aspectRatio: 1,
  },
  uploadImage: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    resizeMode: "contain",
  },
});
