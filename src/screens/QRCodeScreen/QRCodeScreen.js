import React, { useEffect, useState } from 'react'
import {
  View, Text, TouchableOpacity, SafeAreaView, Dimensions, StatusBar, Image,
} from 'react-native'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'

const { height, width } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

function ScreenQRCode() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.WHITE }}>
      <Header textHeader="Thanh toán" />
      <Text style={[TextStyles.regular, { marginTop: 15 * rateh }]}>Quét mã thanh toán</Text>
      <View style={{
        width: 330 * ratew, height: 170 * rateh, backgroundColor: COLORS.ORANGE, marginTop: 10 * rateh, borderRadius: 15, flexDirection: 'column',
      }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            marginTop: 10 * rateh, marginLeft: 10 * ratew, fontSize: 18, color: COLORS.WHITE,
          }}
          >
            Vũ Thư
          </Text>
          <Image
            source={ICONS.Pointpet}
            style={{
              height: 22 * rateh, width: 22 * ratew, marginTop: 10 * rateh, marginLeft: 220 * ratew,
            }}
          />
          <Text style={[TextStyles.optionNormal, {
            marginTop: 12 * rateh, marginLeft: 5 * ratew, color: COLORS.WHITE,
          }]}
          >
            0
          </Text>
        </View>
        <View style={{
          width: 310 * ratew, height: 100 * rateh, backgroundColor: COLORS.WHITE, marginTop: 15 * rateh, marginHorizontal: 10 * ratew, borderRadius: 15, alignItems: 'center',
        }}
        >
          <Image source={IMAGES.imgQRCode} style={{ width: 230 * ratew, height: 50 * rateh, marginTop: 15 * rateh }} />
          <Text style={[TextStyles.regular, { marginTop: 10 * rateh, color: COLORS.BLACK }]}>893034876034545</Text>
        </View>
      </View>
    </View>
  )
}
export default ScreenQRCode
