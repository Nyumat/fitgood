import * as React from "react";
import { Text, View } from "react-native";

export default function Categories({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          top: 50,
          position: "absolute",
          fontFamily: "Apple SD Gothic Neo",
        }}
      >
        Categories
      </Text>
    </View>
  );
}
