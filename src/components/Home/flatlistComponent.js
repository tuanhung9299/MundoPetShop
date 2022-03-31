import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { TextStyles } from '../../../assets/styles/index'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const RenderComponent = ({ navigation, item, link }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <View>
          <Image
            source={item.img}
            style={{
              width: 220 * ratew, resizeMode: 'cover', height: 105 * rateh, marginLeft: 15 * ratew, borderRadius: 15,
            }}
          />
        </View>

        <View>
          <Text style={[TextStyles.semiBold, {
            height: 38 * rateh, width: 213 * ratew, marginLeft: 15 * ratew, marginTop: 6 * rateh,
          }]}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RenderComponent
