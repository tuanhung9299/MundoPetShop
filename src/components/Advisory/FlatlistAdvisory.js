import React, { useState } from 'react'
import {
  Text, View, TouchableOpacity, Dimensions,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { COLORS, TextStyles } from '../../../assets/styles'
import IMAGES from '../../../assets/images/index'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const FlatlistAdvisory = ({ list, navigation, link }) => {
  const [text, setText] = useState(false)
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate(link, {
        ItemAdvisory: {
          id: list.id,
          name: list.name,
          time: list.time,
          despricto: list.despricto,
        },
      })
    }}
    >
      <View style={{
        width: 160 * ratew, height: 180 * rateh, marginHorizontal: 10,
      }}
      >
        <FastImage
          source={IMAGES.imgPromote}
          style={{
            width: '100%', height: '80%', borderRadius: 15,
          }}
        />
        <Text style={TextStyles.regular}>{list.name}</Text>
        <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>{list.time}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default FlatlistAdvisory
