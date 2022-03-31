import React, { useState, useEffect } from 'react'
import {
  View, Text, Image, ScrollView, SafeAreaView, StatusBar, TextInput, Dimensions, TouchableOpacity,
} from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker'
import CheckBox from 'react-native-check-box'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'

const { height, width } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const RegisterScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false)
  const [hidePass, setHidePass] = useState(true)
  const [icon, setIcon] = useState(true)
  useEffect(() => {
    if (icon) { setHidePass(true) } else setHidePass(false)
  }, [icon, hidePass])
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Đăng ký" iconLeft={ICONS.iconBack} navigation={navigation} />
      <ScrollView>
        <View style={{ marginHorizontal: 15 * ratew, flexDirection: 'column' }}>
          <Text style={{ color: COLORS.DARK_GRAY, marginTop: 10 * rateh, fontSize: 15 }}>Họ và tên</Text>
          <TextInput style={{
            paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY, fontSize: 16,
          }}
          />
          <Text style={{ color: COLORS.DARK_GRAY, marginTop: 10 * rateh, fontSize: 15 }}>Số điện thoại</Text>
          <TextInput style={{
            paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY, fontSize: 16,
          }}
          />
          <Text style={{ color: COLORS.DARK_GRAY, marginTop: 10 * rateh, fontSize: 15 }}>Mật khẩu</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
          }}
          >
            <TextInput
              secureTextEntry={hidePass}
              style={{
                width: 300, paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, fontSize: 16,
              }}
            />
            <TouchableOpacity onPress={() => setIcon(!icon)}>
              <Image
                source={icon ? ICONS.iconShowPass : ICONS.iconHidePass}
                style={{
                  width: 13 * ratew, height: 13 * rateh, marginTop: 10 * rateh, resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ color: COLORS.DARK_GRAY, marginTop: 10 * rateh, fontSize: 15 }}>Nhập lại mật khẩu</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
          }}
          >
            <TextInput
              secureTextEntry={hidePass}
              style={{
                width: 300, paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, fontSize: 16,
              }}
            />
            <TouchableOpacity onPress={() => setIcon(!icon)}>
              <Image
                source={icon ? ICONS.iconShowPass : ICONS.iconHidePass}
                style={{
                  width: 13 * ratew, height: 13 * rateh, marginTop: 10 * rateh, resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ color: COLORS.DARK_GRAY, marginTop: 10 * rateh, fontSize: 15 }}>Địa chỉ</Text>
          <View style={{ height: 'auto' }}>
            <DropDownPicker
              items={[
                { label: 'Hồ Chí Minh', value: 'HCM' },
                { label: 'Hà Nội', value: 'HN' },
              ]}
              containerStyle={{ height: 50, marginTop: 10 * rateh }}
              placeholder="Tỉnh/Thành phố"
              customArrowDown={(size, color) => <Image source={ICONS.iconArrowDown} />}
              customArrowUp={(size, color) => <Image source={ICONS.iconArrowUp} />}
              itemStyle={{
                height: 50, marginRight: 20, justifyContent: 'flex-start',
              }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}

            />
          </View>
          <DropDownPicker
            items={[
              { label: 'Quận 1', value: 'q1' },
              { label: 'Quận 2', value: 'q2' },
              { label: 'Quận 3', value: 'q3' },
              { label: 'Quận 4', value: 'q4' },
              { label: 'Quận 5', value: 'q5' },
              { label: 'Quận 12', value: 'q12' },
            ]}
            containerStyle={{ height: 50, marginTop: 10 * rateh }}
            placeholder="Quận/Huyện"
            customArrowDown={(size, color) => <Image source={ICONS.iconArrowDown} />}
            customArrowUp={(size, color) => <Image source={ICONS.iconArrowUp} />}
            itemStyle={{
              justifyContent: 'flex-start', height: 50, marginRight: 20,
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
          />
          <DropDownPicker
            items={[
              { label: 'Phường 1', value: 'p1' },
              { label: 'Phường 2', value: 'p2' },
              { label: 'Phường 3', value: 'p3' },
              { label: 'Phường 4', value: 'p4' },
              { label: 'Phường 5', value: 'p5' },
              { label: 'Phường 6', value: 'p6' },
            ]}
            containerStyle={{ height: 50, marginTop: 10 * rateh }}
            placeholder="Phường/Xã"
            customArrowDown={(size, color) => <Image source={ICONS.iconArrowDown} />}
            customArrowUp={(size, color) => <Image source={ICONS.iconArrowUp} />}
            itemStyle={{
              justifyContent: 'flex-start', height: 50, marginRight: 20,
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
          />
          <TextInput style={{
            paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 35, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY, fontSize: 16, marginTop: 10 * rateh,
          }}
          />
          <View style={{ marginTop: 20 * rateh, flexDirection: 'row' }}>
            <CheckBox
              flex={1}
              checkBoxColor={COLORS.ORANGE}
              isChecked={checked}
              onClick={() => { setChecked(!checked) }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16 }}>Đồng ý với </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, color: COLORS.ORANGE }}>Điều khoản sử dụng </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16 }}>và </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, color: COLORS.ORANGE }}>chính sách bảo mật</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                alignItems: 'center', backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, justifyContent: 'center', marginTop: 15 * rateh, borderRadius: 15,
              }}
              onPress={() => { navigation.navigate('LoginScreen') }}
            >
              <Text style={{ color: COLORS.WHITE, fontSize: 16, fontWeight: 'bold' }}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen
