import React from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const RenderProduct = ({ item }) => (
  <View style={{ marginTop: 8 * rateh, flexDirection: 'column' }}>
    <View style={{
      flexDirection: 'row', borderBottomWidth: 1, borderColor: COLORS.DARK_GRAY2, paddingBottom: 10 * rateh, marginHorizontal: 15 * ratew,
    }}
    >
      <Image source={item.img} style={{ marginRight: 15 * ratew, width: 55 * ratew, height: 55 * rateh }} />
      <View style={{ flexDirection: 'column' }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.product}</Text>
        </View>
        <View style={{ marginTop: 16, flexDirection: 'row' }}>
          <Text style={{ color: COLORS.ORANGE }}>{item.price}</Text>
          <Text style={{ color: COLORS.ORANGE, paddingLeft: 20 * ratew }}>{item.amount1}</Text>
        </View>
      </View>
    </View>
  </View>
)
export default RenderProduct
