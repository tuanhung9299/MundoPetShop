import React, { useState } from 'react'
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

const ForgotPasswordScreen = ({ navigation, props }) => {
  const [text, setText] = useState('')
  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Quên mật khẩu" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ marginHorizontal: 15 * ratew, alignItems: 'center' }}>
        <Text style={[TextStyles.regular, { marginTop: 11 * rateh }]}>Nhập số điện thoại đăng kí tài khoản của bạn</Text>
        <View style={{
          flexDirection: 'column', justifyContent: 'flex-start', width: '100%', marginTop: 20 * rateh,
        }}
        >
          <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>Số điện thoại</Text>
          <TextInput
            style={[TextStyles.regular, {
              paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
            }]}
            onChangeText={(text) => { setText(text) }}
          />
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center', borderRadius: 15,
            }}
            onPress={() => { navigation.navigate('VerificationScreen', { phoneNumber: text }) }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default ForgotPasswordScreen
