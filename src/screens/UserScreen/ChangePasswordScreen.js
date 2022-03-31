import React, { useState, useEffect } from 'react'
import {
  View, Text, Dimensions, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Image,
} from 'react-native'

import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const ChangePasswordScreen = ({ navigation }) => {
  const [icon, setIcon] = useState(true)
  const [hidePass, setHidePass] = useState(true)
  const [pass, setPass] = useState('')
  useEffect(() => {
    if (icon) { setHidePass(true) } else { setHidePass(false) }
  }, [icon, hidePass])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header textHeader="Đổi mật khẩu" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ margin: 15 }}>
        <View style={{ marginTop: 10 * rateh, width: '100%' }}>
          <Text style={[TextStyles.regular, {}]}>Mật khẩu hiện tại</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5',
          }}
          >
            <TextInput value="abcdefgh" secureTextEntry={hidePass} style={{ height: 30 * rateh, padding: 0, fontSize: 17 }} />
            <TouchableOpacity onPress={() => setIcon(!icon)}>
              <Image source={icon ? ICONS.iconShowPass : ICONS.iconHidePass} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center', borderRadius: 15,
            }}
            onPress={() => { navigation.navigate('EnterNewPassScreen') }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default ChangePasswordScreen
