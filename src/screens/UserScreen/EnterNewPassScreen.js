import React, { useState, useEffect } from 'react'
import {
  View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, StatusBar, TextInput, Modal,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/HeaderBar'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import { DATA_USER } from '../../utils'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360
const STORAGE_STATE_LOGIN = '@state_login'

const EnterNewPassScreen = ({ navigation }) => {
  const [icon, setIcon] = useState(true)
  const [hidePass, setHidePass] = useState(true)
  const [pass, setPass] = useState('')
  useEffect(() => {
    if (icon) { setHidePass(true) } else { setHidePass(false) }
  }, [icon, hidePass])

  const setLoginState = async () => {
    await AsyncStorage.setItem(STORAGE_STATE_LOGIN, 'false')
  }

  const [modalVisible, setModalVisible] = useState(false)
  function handleSubmit() {
    setModalVisible(false)
    navigation.navigate('HomeScreen')
    setLoginState()
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header textHeader="Mật khẩu mới" iconLeft={ICONS.iconBack} navigation={navigation} />
      <Modal
        style={{}}
        animationType="fade"
        transparent
        visible={modalVisible}
      >
        <View style={{
          justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#00000099',
        }}
        >
          <View style={{
            paddingHorizontal: 15 * ratew,
            paddingTop: 15 * rateh,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            borderRadius: 5,
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 2,
            backgroundColor: COLORS.WHITE,
          }}
          >
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5', paddingBottom: 15,
            }}
            >
              <Text style={TextStyles.regular}>Mật khẩu đã được thay đổi. Vui lòng đăng nhập lại !</Text>
            </View>
            <TouchableOpacity
              style={{ marginVertical: 10 * rateh }}
              onPress={() => { handleSubmit() }}
            >
              <Text style={[TextStyles.regular, { color: COLORS.ORANGE }]}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ marginHorizontal: 15 * ratew }}>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5' }}>
          <Text style={[TextStyles.regular, { marginTop: 10 * rateh }]}>Mật khẩu mới</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5',
          }}
          >
            <TextInput
              value="abcdefgh"
              secureTextEntry
              style={[TextStyles.regular, {
                height: 30 * rateh, padding: 0, borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5',
              }]}
            />
            <TouchableOpacity style={{}}>
              <Image source={ICONS.iconShowPass} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5' }}>
          <Text style={[TextStyles.regular, { marginTop: 10 * rateh }]}>Nhập lại mật khẩu mới</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5',
          }}
          >
            <TextInput
              value="abcdefgh"
              secureTextEntry={hidePass}
              style={[TextStyles.regular, {
                height: 30 * rateh, padding: 0, borderBottomWidth: 0.5, borderBottomColor: '#B5B5B5',
              }]}
            />
            <TouchableOpacity style={{}} onPress={() => setIcon(!icon)}>
              <Image source={icon ? ICONS.iconShowPass : ICONS.iconHidePass} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, marginTop: 25 * rateh, justifyContent: 'center', alignItems: 'center', borderRadius: 15,
            }}
            onPress={() => { setModalVisible(true) }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Đổi mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EnterNewPassScreen
