import React, { useState, useEffect } from 'react'
import {
  View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Dimensions, StatusBar,
} from 'react-native'
import { ProgressDialog } from 'react-native-simple-dialogs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'

const STORAGE_STATE_LOGIN = '@state_login'

const { height, width } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const LoginScreen = ({ navigation }) => {
  const [icon, setIcon] = useState(true)
  const [hidePass, setHidePass] = useState(true)
  const [pass, setPass] = useState('')
  useEffect(() => {
    if (icon) { setHidePass(true) } else { setHidePass(false) }
  }, [icon, hidePass])

  const [show, setShow] = useState(false)

  function handleLogin() {
    setShow(true)
    setTimeout(
      () => {
        setShow(false)
        navigation.navigate('HomeScreen')
      }, 1000,
    )
    showMessage({
      message: '',
      description: 'Đăng nhập thành công !',
      type: 'success',
      textStyle: { fontSize: 16, textAlign: 'center' },
    })
    _saveStateLogin()
  }

  const _saveStateLogin = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_STATE_LOGIN, 'true')
    } catch {
      alert('Failed to save the data to the storage')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <ProgressDialog
        title="Đang đăng nhập"
        activityIndicatorColor="orange"
        activityIndicatorSize="large"
        animationType="fade"
        message="Vui lòng đợi..."
        visible={show}
      />
      <StatusBar translucent backgroundColor="transparent" />
      <FlashMessage position="top" />
      <Header navigation={navigation} textHeader="Đăng nhập" iconLeft={ICONS.iconBack} />
      <View style={{ marginHorizontal: 15 * ratew }}>
        <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY, marginTop: 10 * rateh }]}>Số điện thoại</Text>
        <TextInput
          value="0908656415"
          style={[TextStyles.regular, {
            borderBottomWidth: 0.6, borderBottomColor: COLORS.DARK_GRAY, paddingVertical: 5 * rateh,
          }]}
        />
        <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY, marginTop: 10 * rateh }]}>Mật khẩu</Text>
        <View style={{
          flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderBottomWidth: 0.6, borderBottomColor: '#B5B5B5',
        }}
        >
          <TextInput value="abcdefgh" secureTextEntry={hidePass} style={{ width: 300, fontSize: 16, paddingVertical: 5 * rateh }} />
          <TouchableOpacity onPress={() => setIcon(!icon)}>
            <Image
              source={icon ? ICONS.iconShowPass : ICONS.iconHidePass}
              style={{
                width: 13 * ratew, height: 13 * rateh, marginTop: 10 * rateh, resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{}} onPress={() => { navigation.navigate('ForgotPasswordScreen') }}>
          <Text style={[TextStyles.min, { marginTop: 9 * rateh, color: COLORS.ORANGE, textAlign: 'right' }]}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'column', width: '100%' }}>
        <TouchableOpacity
          style={{
            height: 45 * rateh, width: 225 * ratew, backgroundColor: COLORS.ORANGE, justifyContent: 'center', alignItems: 'center', marginTop: 25 * rateh, borderRadius: 10,
          }}
          onPress={handleLogin}
        >
          <Text style={[TextStyles.semiBold, { color: COLORS.WHITE, fontSize: 16, fontWeight: 'bold' }]}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 16 * rateh }}>
          <Text style={TextStyles.regular}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity style={{}}>
            <Text style={[TextStyles.regular, { color: COLORS.ORANGE, marginLeft: 5 * ratew }]} onPress={() => navigation.navigate('RegisterScreen')}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
