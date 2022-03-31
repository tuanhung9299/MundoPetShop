import React, { useEffect } from 'react'
import {
  View, Text, Dimensions, Image,
} from 'react-native'
import Modal from 'react-native-modal'
import ICONS from '../../../assets/icons/index'
import { COLORS, TextStyles } from '../../../assets/styles'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Success = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PurchaseScreen')
    }, 1000)
  })
  return (
    <Modal isVisible transparent>
      <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
        <View style={{
          width: 210 * rate,
          height: 100,
          backgroundColor: COLORS.WHITE,
          borderRadius: 15,
          justifyContent: 'center',
        }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image source={ICONS.iconSuccess} />
            <Text style={TextStyles.semiBold}>Đặt hàng thành công!</Text>
          </View>
        </View>
      </View>
    </Modal>

  )
}

export default Success
