import React from 'react'
import {
  View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, StatusBar,
} from 'react-native'
import Header from '../../components/HeaderBar'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'

import { DATA_USER } from '../../utils'

const { width, height } = Dimensions.get('window')
const rateh = height / 640
const ratew = width / 360

const AddressScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header textHeader="Địa chỉ" iconLeft={ICONS.iconBack} navigation={navigation} />
      <View style={{ marginHorizontal: 15 * ratew, marginTop: 10 * rateh, flexDirection: 'row' }}>
        <Image source={ICONS.iconAddress_red} style={{ height: 25 * rateh, width: 25 * ratew, resizeMode: 'contain' }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={[TextStyles.regular, { marginLeft: 10 * ratew }]}>Địa chỉ nhận hàng</Text>
          <TouchableOpacity style={{ marginLeft: 155 * ratew }}>
            <Text style={[TextStyles.semiBold, { color: COLORS.RED }]}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 15 * ratew, flexDirection: 'column' }}>
        <Text style={[TextStyles.semiBold, { marginLeft: 35 * ratew }]}>Anh Thư - 0968801067</Text>
        <Text style={[TextStyles.regular, { marginLeft: 35 * ratew }]}>{DATA_USER.address}</Text>
      </View>
      <TouchableOpacity
        style={{ marginHorizontal: 15 * ratew, marginTop: 10 * rateh, flexDirection: 'row' }}
        onPress={() => { navigation.navigate('AddAddressScreen') }}
      >
        <Image source={ICONS.iconAdd} style={{ height: 25 * rateh, width: 25 * ratew }} />
        <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY, marginLeft: 10 * ratew, marginTop: 2 * rateh }]}>
          Thêm địa chỉ
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default AddressScreen
