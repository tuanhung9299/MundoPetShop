import React from 'react'
import {
  View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, PermissionsAndroid,
} from 'react-native'
import { ActionSheet, Root } from 'native-base'

import Header from '../../components/HeaderBar'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import { DATA_USER } from '../../utils'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const InforUserScreen = ({ navigation, props }) => {
  function onPressEditButton() {
    const BUTTONS = ['Chụp ảnh', 'Chọn ảnh có sẵn', 'Hủy']
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Sửa ảnh đại diện',
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break
          case 1:
            break
          default: break
        }
      },
    )
  }

  return (
    <Root>
      <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
        <SafeAreaView style={{}}>
          <Header textHeader="Thông tin cá nhân" iconLeft={ICONS.iconBack} navigation={navigation} />
          <View style={{ alignItems: 'center', marginTop: 10 * rateh }}>
            <Image source={IMAGES.imageUserAvatar} style={{ height: 60 * rateh, width: 60 * ratew, borderRadius: 40 }} />
            <TouchableOpacity
              style={{ position: 'absolute', marginTop: 45 * rateh, left: 190 * ratew }}
              onPress={onPressEditButton}
            >
              <Image source={ICONS.iconEdit} style={{ height: 20 * rateh, width: 20 * ratew }} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 20 * rateh, marginHorizontal: 15 * ratew }}
            data={[
              { key: 'name', title: 'Họ và tên ', value: DATA_USER.name },
              { key: 'sdt', title: 'Số điện thoại', value: DATA_USER.phoneNumber },
              { key: 'email', title: 'Email', value: DATA_USER.email },
              { key: 'gender', title: 'Giới tính', value: DATA_USER.gender },
              { key: 'birth', title: 'Ngày sinh', value: DATA_USER.birthday },
            ]}

            renderItem={({ item }) => <View style={{
              height: 40 * rateh, borderBottomWidth: 0.5 * rateh, borderBottomColor: '#CECECE', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            }}
            >
              <Text style={TextStyles.semiBold}>{item.title}</Text>
              <Text style={TextStyles.regular}>
                {' '}
                {item.value}
              </Text>
            </View>}
          />
          <TouchableOpacity
            style={{
              marginHorizontal: 15 * ratew, height: 40 * rateh, borderBottomWidth: 0.5 * rateh, borderBottomColor: '#CECECE', justifyContent: 'center',
            }}
            onPress={() => { navigation.navigate('ChangePasswordScreen') }}
          >
            <Text style={TextStyles.semiBold}>Đổi mật khẩu</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </Root>
  )
}
export default InforUserScreen
