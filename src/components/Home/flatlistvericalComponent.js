import React from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const render = ({ item }) => (
  <View style={{
    flexDirection: 'row', width: 360 * ratew, marginTop: 5, justifyContent: 'space-between',
  }}
  >
    <View>
      <Image
        source={item.img}
        style={{
          width: 50 * ratew, resizeMode: 'cover', height: 50 * rateh, marginLeft: 20,
        }}
      />
    </View>
    <View>
      <Text style={[TextStyles.semiBold, {
        height: 19 * rateh, width: 213 * ratew, marginRight: 60 * ratew, marginLeft: 10,
      }]}
      >
        {item.title}
      </Text>
      <Text style={[TextStyles.min, {
        height: 38 * rateh, width: 275 * ratew, marginRight: 60 * ratew, marginLeft: 10, color: COLORS.DARK_GRAY,
      }]}
      >
        {item.detail}
      </Text>
    </View>
  </View>

)
export default render
