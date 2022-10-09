import * as React from "react";
import { Text, View } from "react-native";
import { Select, Center, Box, CheckIcon, Button } from "native-base";

export default function FitFactory() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
              style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                  top: 90,
                  position: 'absolute',
                  fontFamily: 'Apple SD Gothic Neo',
              }}
          >
              FitFactory
          </Text>
          <Center>
              <Button
                  style={{
                      position: 'absolute',
                      top: 200,
                      width: 300,
                      height: 40,
                      lineheight: 34,
                      backgroundColor: '#D3D3D3',
                      borderRadius: 69,
                      fontWeight: 500,
                      fontSize: 40,
                      textAlign: 'center',
                      color: '#000000',
                  }}
              >
                  <Text style={{ fontFamily: 'Apple SD Gothic Neo' }}>Generate Fit</Text>
              </Button>
              <Button
                  style={{
                      position: 'absolute',
                      top: 250,
                      width: 300,
                      height: 40,
                      lineheight: 34,
                      backgroundColor: '#D3D3D3',
                      borderRadius: 69,
                      fontWeight: 500,
                      fontSize: 40,
                      textAlign: 'center',
                      color: '#000000',
                  }}
              >
                  <Text style={{ fontFamily: 'Apple SD Gothic Neo' }}>Add to Favorites</Text>
              </Button>
          </Center>

          <View
              style={{
                  position: 'absolute',

                  top: 180,
                  width: 350,
                  height: 350,
                  borderRadius: 20,

                  backgroundColor: '#E2ECD0',
                  shadowColor: '#000',
              }}
          >
              {/* Four squarees */}
              <View
                  style={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      width: 160,
                      height: 160,
                      borderRadius: 20,
                      shadowColor: '#000',
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
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                          marginLeft: '25%',
                          top: 50,
                          position: 'absolute',
                          fontFamily: 'Apple SD Gothic Neo',
                      }}
                  >
                      Top Left
                  </Text>
              </View>

              <View
                  style={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      width: 160,
                      height: 160,
                      borderRadius: 20,
                      shadowColor: '#000',
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
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                          marginLeft: '22%',
                          top: 50,
                          position: 'absolute',
                          fontFamily: 'Apple SD Gothic Neo',
                      }}
                  >
                      Top Right
                  </Text>
              </View>

              <View
                  style={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: 180,
                      left: 10,
                      width: 160,
                      height: 160,
                      borderRadius: 20,
                      shadowColor: '#000',
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
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                          marginLeft: '16%',
                          top: 50,
                          position: 'absolute',
                          fontFamily: 'Apple SD Gothic Neo',
                      }}
                  >
                      Bottom Left
                  </Text>
              </View>

              <View
                  style={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: 180,
                      right: 10,
                      width: 160,
                      height: 160,
                      borderRadius: 20,
                      shadowColor: '#000',
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
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                          marginLeft: '16%',
                          top: 50,
                          position: 'absolute',
                          fontFamily: 'Apple SD Gothic Neo',
                      }}
                  >
                      Bottom Right
                  </Text>
              </View>
          </View>
      </View>
  )
}
