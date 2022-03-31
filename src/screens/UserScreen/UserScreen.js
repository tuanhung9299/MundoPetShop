import * as React from 'react'
import {
  View, Text, TouchableOpacity, SafeAreaView, Dimensions, StatusBar, Linking
} from 'react-native'

import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'

const { height, width } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const ScreenUser = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header navigation={navigation} textHeader="Tài khoản" />
      <View style={{ flexDirection: 'row', margin: 15 }}>
        <TouchableOpacity
          style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.ORANGE, width: 155 * ratew, height: 45 * rateh, marginRight: 5 * ratew, borderWidth: 1, borderRadius: 10, borderColor: COLORS.ORANGE,
          }}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1, width: 155 * ratew, marginLeft: 5 * ratew, height: 45 * rateh, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: COLORS.ORANGE,
          }}
          onPress={() => { navigation.navigate('RegisterScreen') }}
        >
          <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default ScreenUser
