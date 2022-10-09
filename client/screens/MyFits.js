import * as React from "react";
import { Text, View } from "react-native";
import { Select, Center, Box, CheckIcon } from "native-base";

export default function MyFits() {
  const [category, setCategory] = React.useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          top: 60,
          position: "absolute",
          fontFamily: "Apple SD Gothic Neo",
        }}
      >
        Favorite Fits
      </Text>

      <Box maxW="300" style={{ position: "absolute", top: 130 }}>
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
          <Select.Item label="Outfit1" value="{top:top1.png or uri}" />
          <Select.Item label="Outft2" value="{top:top2.png}" />
          <Select.Item label="Outfit3" value="{top:top3.png}" />
          <Select.Item label="Outfit4" value="{top:top4.png}" />
          <Select.Item label="Outfit5" value="{top:top5.png}" />
          
        </Select>
      </Box>
    </View>
  );
}
