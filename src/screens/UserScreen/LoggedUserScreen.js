import React, { useState } from 'react'
import {
  View, Modal, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity, SafeAreaView, FlatList, Dimensions, StatusBar, TouchableWithoutFeedback, Linking,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import { DATA_USER } from '../../utils'

const STORAGE_STATE_LOGIN = '@state_login'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const LoggedUserScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const setLoginState = async () => {
    await AsyncStorage.setItem(STORAGE_STATE_LOGIN, 'false')
  }

  const onSubmit = () => {
    setModalVisible(false)
    navigation.navigate('LoginScreen')
    setLoginState()
  }
  const handleLogout = (link) => {
    if (link !== 'Logout') {
      navigation.navigate(link)
    } else {
      setModalVisible(true)
    }
  }
  const handleCall = () => {
    { Linking.openURL('tel:0908565142') }
  }
  const handleSMS = () => {
    Linking.openURL('sms:?body=null')
  }
  return (

    <SafeAreaView style={{ flexDirection: 'column', backgroundColor: COLORS.WHITE, flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Modal
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>
              <Text style={TextStyles.regular}>Bạn có chắc chắn muốn đăng xuất ?</Text>
            </View>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', width: 250 * ratew, borderTopWidth: 0.5, borderTopColor: '#B5B5B5',
            }}
            >
              <TouchableOpacity
                style={{
                  paddingVertical: 10 * rateh, flex: 1, alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#B5B5B5',
                }}
                onPress={() => { setModalVisible(false) }}
              >
                <Text style={[TextStyles.regular, { color: COLORS.BLACK }]}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingVertical: 10 * rateh, flex: 1, alignItems: 'center' }}
                onPress={() => { onSubmit() }}
              >
                <Text style={[TextStyles.regular, { color: COLORS.ORANGE }]}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{
        height: 130 * rateh, backgroundColor: COLORS.ORANGE, paddingTop: 35 * rateh, paddingHorizontal: 15 * ratew, flexDirection: 'row',
      }}
      >
        <Image
          source={IMAGES.imageUserAvatar}
          style={{
            height: 75 * rateh, width: 75 * ratew, resizeMode: 'cover', borderRadius: 150, backgroundColor: '#ffffff', flex: 1,
          }}
        />
        <View style={{ flex: 3, marginLeft: 10 * ratew }}>
          <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>
            Chào
            {' '}
            {DATA_USER.name}
          </Text>
          <Text style={[TextStyles.min, {
            color: COLORS.WHITE, marginTop: 4 * rateh, marginBottom: 10 * rateh,
          }]}
          >
            Khách hàng từ ngày 01/06/2020
          </Text>
          <View style={{
            backgroundColor: COLORS.WHITE, height: 35 * rateh, width: 150 * ratew, flexDirection: 'row', alignItems: 'center', borderRadius: 10,
          }}
          >
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>Hạng bạc</Text>
            </View>
            <View style={{
              flex: 1, borderColor: COLORS.ORANGE, borderLeftWidth: 2, alignItems: 'center', flexDirection: 'row', justifyContent: 'center',
            }}
            >
              <Image source={ICONS.iconMuzoCoin} style={{ height: 23 * rateh, width: 23 * ratew, resizeMode: 'contain' }} />
              <Text style={[TextStyles.regular, { color: COLORS.ORANGE, marginLeft: 10 * ratew }]}>{DATA_USER.point}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ margin: 15, flexDirection: 'column' }}>
        <Text style={TextStyles.semiBold}>Chúng tôi ở đây!</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * rateh }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row', flex: 1, backgroundColor: '#76C5E6', alignItems: 'center', marginRight: 5 * ratew, height: 45 * rateh, justifyContent: 'center', borderRadius: 30,
            }}
            onPress={() => { handleCall() }}
          >
            <Image source={ICONS.iconCall} />
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE, marginLeft: 10 * ratew }]}>Gọi thoại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row', flex: 1, backgroundColor: '#76C5E6', alignItems: 'center', marginLeft: 5 * ratew, height: 45 * rateh, justifyContent: 'center', borderRadius: 30,
            }}
            onPress={() => { handleSMS() }}
          >
            <Image source={ICONS.iconMessage} />
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE, marginLeft: 10 * ratew }]}>Nhắn tin</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={[
            {
              key: 'account', value: 'Tài khoản', icon: ICONS.iconAccount, screen: 'InforUserScreen',
            },
            {
              key: 'address', value: 'Địa chỉ', icon: ICONS.iconAddress, screen: 'AddressScreen',
            },
            {
              key: 'calendar', value: 'Lịch hẹn', icon: ICONS.iconCalendarBlack, screen: 'InforUserScreen',
            },
            {
              key: 'gift', value: 'Quà tặng', icon: ICONS.iconGiftUser, screen: 'GiftScreen',
            },
            {
              key: 'logout', value: 'Đăng xuất', icon: ICONS.iconLogout, screen: 'Logout',
            },
          ]}
          renderItem={({ item }) => <TouchableOpacity
            style={{
              height: 55 * rateh, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 0.5,
            }}
            onPress={() => { handleLogout(item.screen) }}
          >
            <Image
              source={item.icon}
              style={{
                height: 20 * rateh, width: 20 * ratew, resizeMode: 'contain', marginRight: 10 * ratew,
              }}
            />
            <Text style={TextStyles.regular}>{item.value}</Text>
          </TouchableOpacity>}
          style={{ marginTop: 10 * rateh }}
        />
      </View>
    </SafeAreaView>
  )
}

export default LoggedUserScreen
