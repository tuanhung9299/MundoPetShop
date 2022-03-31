import React, { useState } from 'react'
import {
  View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, TextInput, StatusBar,
} from 'react-native'
import Header from '../../components/HeaderBar'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const VerificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      alignItems: 'center', flexDirection: 'column', flex: 1, backgroundColor: COLORS.WHITE,
    }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Xác thực" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ flexDirection: 'column', marginTop: 12 * rateh, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nhập mã xác thực vừa được gửi đến số</Text>
        <Text style={{ color: COLORS.ORANGE, fontWeight: 'bold', fontSize: 16 }}>098661651</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 * rateh }}>
        <TextInput style={{
          height: 45 * ratew, width: 45 * ratew, textAlign: 'center', fontSize: 22, borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
        }}
        />
        <TextInput style={{
          height: 45 * ratew, width: 45 * ratew, textAlign: 'center', fontSize: 22, borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
        }}
        />
        <TextInput style={{
          height: 45 * ratew, width: 45 * ratew, textAlign: 'center', fontSize: 22, borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
        }}
        />
        <TextInput style={{
          height: 45 * ratew, width: 45 * ratew, textAlign: 'center', fontSize: 22, borderWidth: 1, borderColor: COLORS.DARK_GRAY, borderRadius: 35, marginRight: 10 * rateh,
        }}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 22 * rateh }}>
        <Text style={{ fontSize: 16 }}>Vui lòng chờ 60s để nhận lại mã. </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: COLORS.DARK_GRAY }}>Gửi lại.</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 225 * ratew, height: 45 * rateh, borderRadius: 15, backgroundColor: COLORS.ORANGE, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center',
        }}
        onPress={() => { navigation.navigate('NewPasswordScreen') }}
      >
        <Text style={{ fontSize: 16, color: COLORS.WHITE, fontWeight: 'bold' }}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default VerificationScreen
