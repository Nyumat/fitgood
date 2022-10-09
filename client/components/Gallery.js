import 'react-native-gesture-handler'
import React from 'react'
import {
	Image,
	View,
	TouchableOpacity,
	Dimensions,
	ScrollView,
	Text
} from 'react-native'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const images = [
	{
		id: 1,
		url: 'https://picsum.photos/200/300?random=1'
	},
	{
		id: 2,
		url: 'https://picsum.photos/200/300?random=2'
	},
	{
		id: 3,
		url: 'https://picsum.photos/200/300?random=3'
	},
	{
		id: 4,
		url: 'https://picsum.photos/200/300?random=5'
	},
	{
		id: 5,
		url: 'https://picsum.photos/200/300?random=6'
	},
	{
		id: 6,
		url: 'https://picsum.photos/200/300?random=7'
	},
	{
		id: 7,
		url: 'https://picsum.photos/200/300?random=8'
	},
	{
		id: 8,
		url: 'https://picsum.photos/200/300?random=9'
      },
      {
            id: 9,
            url: 'https://picsum.photos/200/300?random=10'
      },
      {
            id: 10,
            url: 'https://picsum.photos/200/300?random=11'
      },
      {
            id: 11,
            url: 'https://picsum.photos/200/300?random=12'
      },
      {
            id: 12,
            url: 'https://picsum.photos/200/300?random=13'
      },
      {
            id: 13,
            url: 'https://picsum.photos/200/300?random=14'
      },
      {
            id: 14,
            url: 'https://picsum.photos/200/300?random=15'
      },
      {
            id: 15,
            url: 'https://picsum.photos/200/300?random=16'
      },
      {
            id: 16,
            url: 'https://picsum.photos/200/300?random=17'
      },
      {
            id: 17,
            url: 'https://picsum.photos/200/300?random=18'
      },
      {
            id: 18,
            url: 'https://picsum.photos/200/300?random=19'
      },
      {
            id: 19,
            url: 'https://picsum.photos/200/300?random=20'
      },
      {
            id: 20,
            url: 'https://picsum.photos/200/300?random=21'
      },
      {
            id: 21,
            url: 'https://picsum.photos/200/300?random=22'
      }

]


export default function Gallery({navigation, route, name, data}) { // or images from props
	return (
            <ScrollView style={{flex: 1, transform: [{ translateY: 50 }]}}>
                  <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 50, marginBottom: 50}}>{name}</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap'
				}}>
                              
                        {
                              images.map((image) => (
                                    <TouchableOpacity
                                          key={image.id}
                                          onPress={() => {}}>
                                          <Image
                                                source={{ uri: image.url }}
                                                style={{
                                                      width: deviceWidth / 3 - 6,
                                                      height: deviceHeight / 3,
                                                      borderRadius: 10,
                                                      margin: 3
                                                }}
                                          />
                                    </TouchableOpacity>
                              ))
                        }
			</View>
		</ScrollView>
	)
}
