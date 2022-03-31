import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import { COLORS } from '../../../assets/styles'
import ICONS from '../../../assets/icons'

const CheckProductDetalis = () => {
  const { width, height } = Dimensions.get('window')
  // const { height } = width * 0.6
  const ratew = width / 360
  const rateh = height / 640
  return (
    <View style={{
      backgroundColor: COLORS.ORANGE, width: 15 * ratew, height: 15 * rateh, justifyContent: 'center', borderBottomLeftRadius: 5, alignItems: 'center', position: 'absolute', left: 0, top: 30,
    }}
    >
      <Image
        source={ICONS.iconCheck}
        style={{
          width: '80%', height: '90%', resizeMode: 'contain',
        }}
      />
    </View>

  )
}

export default CheckProductDetalis
