import React, { useState, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, TextInput, StatusBar,
} from 'react-native'
import Header from '../../components/HeaderBar'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params
  const ref_input2 = useRef()
  const ref_input3 = useRef()
  const ref_input4 = useRef()
  const handleInput = (event) => {
    if (event.nativeEvent.text) {
      ref_input4.current.focus()
    }
    esle
    { ref_input2.current.focus() }
  }
  return (
    <SafeAreaView style={{
      alignItems: 'center', flexDirection: 'column', flex: 1, backgroundColor: COLORS.WHITE,
    }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Xác thực" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ flexDirection: 'column', marginTop: 12 * rateh, alignItems: 'center' }}>
        <Text style={TextStyles.semiBold}>Nhập mã xác thực vừa được gửi đến số</Text>
        <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>{phoneNumber}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 * rateh }}>
        <TextInput
          maxLength={1}
          style={[TextStyles.large, {
            height: 45 * ratew, width: 45 * ratew, textAlign: 'center', borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
          }]}
          onChange={(event) => { ref_input2.current.focus() }}
        />
        <TextInput
          ref={ref_input2}
          maxLength={1}
          style={[TextStyles.large, {
            height: 45 * ratew, width: 45 * ratew, textAlign: 'center', borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
          }]}
          onChange={(event) => { ref_input3.current.focus() }}
        />
        <TextInput
          ref={ref_input3}
          maxLength={1}
          style={[TextStyles.large, {
            height: 45 * ratew, width: 45 * ratew, textAlign: 'center', borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
          }]}
          onChange={(event) => { ref_input4.current.focus() }}
        />
        <TextInput
          ref={ref_input4}
          maxLength={1}
          style={[TextStyles.large, {
            height: 45 * ratew, width: 45 * ratew, textAlign: 'center', borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
          }]}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 22 * rateh }}>
        <Text style={TextStyles.regular}>Vui lòng chờ 60s để nhận lại mã. </Text>
        <TouchableOpacity>
          <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY }]}>Gửi lại.</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 225 * ratew, height: 45 * rateh, borderRadius: 15, backgroundColor: COLORS.ORANGE, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center',
        }}
        onPress={() => navigation.navigate('NewPasswordScreen')}
      >
        <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default VerificationScreen
