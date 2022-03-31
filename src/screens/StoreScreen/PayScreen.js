import React, { useState } from 'react'
import {
  View, Text, Dimensions,
  TouchableOpacity, Image, StatusBar,
} from 'react-native'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons/index'
import { COLORS, TextStyles } from '../../../assets/styles'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Pay = ({ navigation }) => {
  const [show, setShow] = useState('')
  const Ticked = () => {
    return (
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image source={ICONS.iconTick} />
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header navigation={navigation} textHeader="Phương thức thanh toán" iconLeft={ICONS.iconBack} />
      <TouchableOpacity
        onPress={() => setShow(false)}
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: 330 * rate,
          marginTop: 15,
          height: 60,
          paddingHorizontal: 10 * rate,
          backgroundColor: COLORS.WHITE,
          borderRadius: 15,
          shadowColor: COLORS.BLACK,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <Image source={ICONS.iconCash} style={{ marginRight: 5 * rate }} />
        <Text style={TextStyles.regular}>Tiền mặt</Text>
        {!show ? <Ticked /> : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: 330 * rate,
          marginTop: 10,
          height: 60,
          paddingHorizontal: 10 * rate,
          backgroundColor: COLORS.WHITE,
          borderRadius: 15,
          shadowColor: COLORS.BLACK,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <Image source={ICONS.iconCard} style={{ marginRight: 5 * rate }} />
        <Text style={TextStyles.regular}>Thẻ ngân hàng/Visa/Master card</Text>
        {show ? <Ticked /> : null}
      </TouchableOpacity>
    </View>
  )
}

export default Pay
