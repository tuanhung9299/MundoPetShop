import React, { useState } from 'react'
import {
  View, TextInput, Text, Image, Dimensions, SafeAreaView, StatusBar, Switch, TouchableOpacity,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button'
import ICONS from '../../../assets/icons'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'

const { height, width } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const AddAddressScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const [country, setCountry] = useState('')
  const [text, onChangeText] = useState('Địa chỉ cụ thể')
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Thêm địa chỉ" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ marginHorizontal: 15 * ratew, flexDirection: 'column' }}>
        <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY, marginTop: 10 * rateh }]}>Họ và tên</Text>
        <TextInput
          style={[TextStyles.regular, {
            paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
          }]}
        />
        <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY, marginTop: 10 * rateh }]}>Số điện thoại</Text>
        <TextInput style={[TextStyles.regular, {
          paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 30 * rateh, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY,
        }]}
        />
        <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY, marginTop: 10 * rateh }]}>Địa chỉ</Text>
        <View style={{ height: 'auto' }}>
          <DropDownPicker
            items={[
              { label: 'Hồ Chí Minh', value: 'HCM' },
              { label: 'Hà Nội', value: 'HN' },
              { label: 'Đà Nẵng', value: 'DN' },
              { label: 'Hải Phòng', value: 'HP' },
              { label: 'Cần Thơ', value: 'CT' },
            ]}
            containerStyle={{ height: 50, marginTop: 10 * rateh }}
            placeholder="Tỉnh/Thành phố"
            customArrowDown={(size, color) => <Image source={ICONS.iconArrowDown} />}
            customArrowUp={(size, color) => <Image source={ICONS.iconArrowUp} />}
            itemStyle={{
              height: 50, marginRight: 20, justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: COLORS.WHITE }}
            labelStyle={[TextStyles.regular, { color: COLORS.BLACK }]}
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
          dropDownStyle={{ backgroundColor: COLORS.WHITE }}
          labelStyle={[TextStyles.regular, { color: COLORS.BLACK }]}
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
          dropDownStyle={{ backgroundColor: COLORS.WHITE }}
          labelStyle={[TextStyles.regular, { color: COLORS.BLACK }]}
        />

        <TextInput
          placeholder="Địa chỉ cụ thể"
          style={[TextStyles.min, {
            paddingVertical: 5 * rateh, paddingHorizontal: 0, height: 35, borderBottomWidth: 0.5, borderBottomColor: COLORS.DARK_GRAY, marginTop: 10 * rateh,
          }]}
        />
        <Text style={[TextStyles.medium, { color: 'black', marginTop: 10 * rateh }]}>Loại địa chỉ</Text>
        <View style={{ marginTop: 15 }}>
          <RadioForm
            labelStyle={[TextStyles.regular, { marginRight: 25 }]}
            formHorizontal
            radio_props={
              [
                { label: 'Nhà riêng', value: 0 },
                { label: 'Cơ quan, văn phòng', value: 1 },
              ]
            }
            buttonSize={15}
            buttonColor="#CECECE"
            selectedButtonColor={COLORS.ORANGE}
            onPress={(value) => { setIsChecked({ value }) }}
          />
        </View>
        <View style={{
          flexDirection: 'row', height: 40 * rateh, marginTop: 15 * rateh, alignItems: 'center', justifyContent: 'space-between',
        }}
        >
          <Text style={TextStyles.regular}>Đặt làm địa chỉ mặc định</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              alignItems: 'center', backgroundColor: COLORS.ORANGE, width: 225 * ratew, height: 45 * rateh, justifyContent: 'center', marginTop: 25 * rateh, borderRadius: 15,
            }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default AddAddressScreen
