import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system'


export default function MyClothes({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          top: 90,
          position: "absolute",
          fontFamily: "Apple SD Gothic Neo",
        }}
      >
        Your Clothes
      </Text>
      <TouchableOpacity style={{ position: "absolute" }} onPress={pickImage}>
        <Image
          source={require("../../assets/uploadIcon.png")}
          style={{
            position: "relative",
            transform: [{ translateY: -165 }, { translateX: -79 }],
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          top: "17%",
          left: "13%",
          width: 200,
          height: 50,
          margin: 20,
          transform: [{ scale: 1.5 }],
          flex: 1,
          flexWrap: "nowrap",
        }}
      >
        Upload New Clothes
      </Text>

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <Text>What Category is this item?</Text>
    </View>
  );
}
