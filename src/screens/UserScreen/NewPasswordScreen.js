import React from 'react'
import {
  SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, Dimensions, StatusBar,
} from 'react-native'
import ICONS from '../../../assets/icons'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const NewPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header textHeader="Mật khẩu mới" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{
        flex: 1, backgroundColor: COLORS.WHITE, alignItems: 'center', paddingLeft: 15 * ratew, paddingRight: 15 * ratew,
      }}
      >
        <View style={{
          marginTop: 10 * rateh, width: '100%',
        }}
        >
          <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}> Mật khẩu</Text>
          <TextInput
            value="abcdefgh"
            secureTextEntry
            style={[TextStyles.regular, {
              height: 30 * rateh, padding: 0, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
            }]}
          />
          <Text style={[TextStyles.min, { marginTop: 10 * rateh, color: COLORS.DARK_GRAY }]}>Nhập lại mật khẩu</Text>
          <TextInput
            value="abcdefgh"
            secureTextEntry
            style={[TextStyles.regular, {
              height: 30 * rateh, padding: 0, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
            }]}
          />
        </View>
        <TouchableOpacity style={{
          backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center', borderRadius: 15,
        }}
        >
          <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NewPasswordScreen
