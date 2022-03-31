/* eslint-disable no-shadow */
import React from 'react'
import {
  View, Text, Dimensions, SafeAreaView, FlatList, Image, TouchableOpacity,
} from 'react-native'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
function flatListProduct(data) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <View style={{ marginTop: 8 * rateh }}>
        <View style={{
          flexDirection: 'row', borderBottomWidth: 1, borderColor: COLORS.DARK_GRAY2, paddingBottom: 10 * rateh, marginHorizontal: 15 * ratew,
        }}
        >
          <Image source={item.img} style={{ marginRight: 15 * ratew, width: 55 * ratew, height: 55 * rateh }} />
          <View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.value}</Text>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row' }}>
              <Text style={{ color: COLORS.ORANGE }}>{item.price}</Text>
              <Text style={{ color: COLORS.ORANGE, paddingLeft: 20 * ratew }}>{item.amount}</Text>
            </View>
          </View>
        </View>
      </View>}
      keyExtractor={(item) => item.id}
    />
  )
}
const product = (navigation) => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 16 }}>Phương thức thanh toán</Text>
        <Text style={{ fontSize: 14, color: COLORS.DARK_GRAY }}>Thanh toán khi nhận hàng</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 11 * ratew }}>
        <Text>Phí vận chuyển</Text>
        <Text style={{ paddingLeft: 187 * ratew }}>20.000đ</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 6 * ratew }}>
        <Text>Giảm giá</Text>
        <Text style={{ paddingLeft: 260 * ratew }}>0</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 6 * ratew }}>
        <Text>Tổng tiền hàng</Text>
        <Text style={{ paddingLeft: 178 * ratew }}>180.000đ</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 6 * ratew }}>
        <Text>Tổng cộng</Text>
        <Text style={{ color: COLORS.ORANGE, fontWeight: '700', paddingLeft: 201 * ratew }}>200.000đ</Text>
      </View>
      <View style={{ marginLeft: 48 * ratew }}>
        <TouchableOpacity
          style={{
            width: 225 * ratew,
            height: 45 * rateh,
            backgroundColor: COLORS.ORANGE,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10 * rateh,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ textAlign: 'center' }}>Mua lại</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
function service({ navigation }) {
  return (
    <View>
      <View style={{ flexDirection: 'row', paddingTop: 6 * ratew }}>
        <Text>Giảm giá</Text>
        <Text style={{ paddingLeft: 260 * ratew }}>0</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 5 * ratew }}>
        <Text>Tổng cộng</Text>
        <Text style={{ color: '#F47422', fontWeight: '700', paddingLeft: 201 * ratew }}>200.000đ</Text>
      </View>
      <View style={{ marginLeft: 48 * ratew }}>
        <TouchableOpacity
          style={{
            width: 225 * ratew,
            height: 45 * rateh,
            backgroundColor: '#F47422',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10 * rateh,
          }}
          onPress={() => navigation.navigate('MuzoScreen')}
        >
          <Text style={{ textAlign: 'center' }}>Đặt lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const InfoOrderProduct = ({ navigation, route }) => {
  const sp = route.params.Detail.product.length
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header textHeader="Thông tin đơn hàng #000123" iconLeft={ICONS.iconBack} navigation={navigation} />
        <View style={{ marginTop: 10 * rateh, paddingLeft: 10 * ratew }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ICONS.iconStatus} style={{ width: 20 * ratew, height: 24 * rateh, resizeMode: 'cover' }} />
            <Text style={{ paddingLeft: 11 * ratew, fontSize: 16 }}>
              Trạng thái:
              {' '}
              {route.params.Detail.status}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 17 * rateh }}>
            <Image source={ICONS.Schedule} style={{ width: 22, height: 26, resizeMode: 'cover' }} />
            <Text style={{ paddingLeft: 10 * ratew, fontSize: 16 }}>
              Thời gian đặt hàng:
              {' '}
              {route.params.Detail.time}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', width: 360 * ratew, marginTop: 13 * rateh }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={ICONS.iconLocation} width={20} height={24} resizeMode="cover" />
              <Text style={{ paddingLeft: 13 * ratew, fontSize: 14, color: COLORS.DARK_GRAY }}>Địa chỉ nhận hàng</Text>
              <Text style={{ color: COLORS.ORANGE, paddingLeft: 184 * ratew }}>sửa</Text>
            </View>
            <View style={{ width: 330 * ratew, paddingLeft: 30 * ratew }}>
              <Text style={{ fontSize: 16 }}>
                Anh Thư | (+84) 96880106881 Lê Văn Quới, Phường Bình Hưng Hòa A, TP. Hồ Chí Minh
              </Text>
            </View>
            <View style={{ marginTop: 13 * rateh }}>
              <Text style={{ fontSize: 16 }}>
                {sp}
                {' '}
                {route.params.Detail.type}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <SafeAreaView style={{ marginTop: 10 * rateh, flex: 1, height: 50 * rateh }}>
        {flatListProduct(route.params.Detail.product)}
      </SafeAreaView>
      <View style={{
        marginTop: 10 * rateh, marginLeft: 15 * ratew, marginBottom: 10 * rateh,
      }}
      >
        {route.params.Detail.type === 'sản phẩm' ? product(navigation) : service(navigation)}
      </View>

    </View>

  )
}
export default InfoOrderProduct
