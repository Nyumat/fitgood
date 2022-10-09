import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Select, Center, Box, CheckIcon } from "native-base";
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

export default function MyClothes({ navigation }) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = React.useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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
          top: 75,
          position: "absolute",
          fontFamily: "Apple SD Gothic Neo",
        }}
      >
        MyClothes
      </Text>
      <View
          style={{
            top: 125,
            left:105,
            position: "absolute",
            width: 165,
            height: 30,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          
            backgroundColor: "#E2ECD0",
            shadowColor: "#000",
        }}
      >
      <TouchableOpacity style={{ position: "absolute"}} onPress={pickImage}>
      <Text
          style={{ 
          fontSize: 12,      
          textAlign: "center",
          left:33,
          top:7
        }}
      >
        Upload New Clothes
      </Text>
        <Image
          source={require("../../assets/uploadIcon.png")}
          style={{
            position: "absolute",
            left:10,
            top:4,
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      </View>

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <Text>What Category is this item?</Text>
      <Box maxW="300" style={{ position: "absolute", top: 175 }}>
        <Select
          selectedValue={category}
          minWidth="300"
          height={50}
          fontSize="lg"
          placeholder="Choose A Clothing Category"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          {/* Object containing list of items in outfit*/}
          <Select.Item label="Hats" value="{top:top1.png or uri}" />
          <Select.Item label="Shirts" value="{top:top2.png}" />
          <Select.Item label="Bottoms" value="{top:top3.png}" />
          <Select.Item label="Shoes" value="{top:top4.png}" />
          
        </Select>
      </Box>
    </View>
  );
}
