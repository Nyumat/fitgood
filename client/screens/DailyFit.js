import * as React from "react";
import { Text, View } from "react-native";
import { Select, Center, Box, CheckIcon, Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function DailyFit() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          top: 100,
          position: "absolute",
          fontFamily: "Apple SD Gothic Neo",
        }}
      >
        Your DailyFit
      </Text>

      <Center>
        <Button style={{ position: "absolute", top: 200, width: 300 }}>
          <Text>Click me to be notified of daily fits!</Text>
        </Button>
      </Center>

      <View
        style={{
          backgroundColor: "#DBDBDB",

          position: "absolute",
          top: 180,
          width: 350,
          height: 350,
          borderRadius: 20,
          shadowColor: "#000",
        }}
      >
        {/* Four squarees */}
        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 10,
            left: 10,
            width: 160,
            height: 160,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginLeft: "25%",
              top: 50,
              position: "absolute",
              fontFamily: "Apple SD Gothic Neo",
            }}
          >
            Top Left
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 10,
            right: 10,
            width: 160,
            height: 160,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginLeft: "22%",
              top: 50,
              position: "absolute",
              fontFamily: "Apple SD Gothic Neo",
            }}
          >
            Top Right
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 180,
            left: 10,
            width: 160,
            height: 160,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginLeft: "16%",
              top: 50,
              position: "absolute",
              fontFamily: "Apple SD Gothic Neo",
            }}
          >
            Bottom Left
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 180,
            right: 10,
            width: 160,
            height: 160,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginLeft: "16%",
              top: 50,
              position: "absolute",
              fontFamily: "Apple SD Gothic Neo",
            }}
          >
            Bottom Right
          </Text>
        </View>
      </View>
    </View>
  );
}
