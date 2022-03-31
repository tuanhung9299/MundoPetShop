import React from 'react'
import {
  View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, StatusBar,
} from 'react-native'

import { FlatList, TextInput } from 'react-native-gesture-handler'
import ICONS from '../../../assets/icons/index'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'
import NumberFormat from '../../components/Store/NumberFormatComponent'

const windowWidth = Dimensions.get('window').width
const ratew = windowWidth / 360
const windowHeight = Dimensions.get('window').height
const rateh = windowHeight / 640

const Order = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header navigation={navigation} textHeader="Đặt hàng" iconLeft={ICONS.iconBack} />
      <View style={{ flex: 1 }}>
        <View style={{
          marginTop: 15 * rateh,
          marginLeft: 15 * ratew,
          flexDirection: 'row',
          marginBottom: 15 * rateh,
        }}
        >
          <Image
            source={ICONS.iconLocation}
            style={{
              width: 25 * ratew,
              height: 30 * rateh,
              resizeMode: 'stretch',
            }}
          />
          <View style={{ marginLeft: 15 * ratew, width: 280 * ratew }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            >
              <Text style={TextStyles.regular}>Địa chỉ nhận hàng</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddAddressScreen')}>
                <Text style={[TextStyles.semiBold, { color: COLORS.RED }]}>Sửa</Text>
              </TouchableOpacity>
            </View>
            <Text style={TextStyles.regular}>Lê Hưng - 0387650796</Text>
            <Text numberOfLines={2} style={[TextStyles.regular, { color: COLORS.DARK_GRAY }]}>
              56/10 Đường 27, P.Sơn Kỳ, Q.Tân Phú, TP. Hồ Chí Minh
            </Text>
          </View>
        </View>
        <View style={{
          marginLeft: 15 * ratew,
          marginBottom: 10,
          width: 250 * ratew,
          flexDirection: 'row',
        }}
        >
          <Image
            source={ICONS.iconNote}
            style={{
              width: 25 * ratew,
              height: 30 * rateh,
              resizeMode: 'stretch',
            }}
          />
          <View style={{ marginLeft: 15 * ratew }}>
            <Text style={TextStyles.regular}>Ghi chú</Text>
            <TextInput
              style={[TextStyles.regular, {
                height: 30,
                paddingTop: 5,
                paddingBottom: 5,
              }]}
              placeholder="Lưu ý cho Người bán..."
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={route.params.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <View style={styles.list}>
              <View style={{
                width: windowWidth,
                flex: 1,
              }}
              >
                <View style={{ flexDirection: 'row', height: 70 }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 70 * ratew, height: 75, borderRadius: 15, marginRight: 10 * ratew,
                    }}
                  />
                  <View>
                    <Text numberOfLines={1} style={[TextStyles.semiBold, { width: 240 * ratew, marginTop: 5 }]}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 48 }}>
                      <NumberFormat price={item.value} />
                      <Text style={[TextStyles.regular, { paddingLeft: 30 * ratew }]}>
                        x
                        {item.quantity}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>}
          />
        </View>
      </View>
      <View style={{ backgroundColor: COLORS.WHITE }}>
        <View style={{ marginLeft: 15 * ratew, marginRight: 15 * ratew, marginBottom: 15 }}>
          <View style={{
            flexDirection: 'row', marginTop: 5, marginBottom: 15, height: 50,
          }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('PayScreen')}
              style={{
                flexDirection: 'row', alignItems: 'center', width: 160 * ratew, borderEndWidth: 0.5,
              }}
            >
              <Image source={ICONS.iconPay} />
              <Text style={[TextStyles.regular, { paddingLeft: 10 * ratew }]}>Thanh toán</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DiscountScreen')}
              style={{
                flexDirection: 'row', alignItems: 'center', width: 160 * ratew, marginLeft: 15 * ratew,
              }}
            >
              <Image source={ICONS.iconVoucher} />
              <Text style={[TextStyles.regular, { paddingLeft: 10 * ratew }]}>
                Giảm giá
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <Text style={TextStyles.regular}>Phí vận chuyển</Text>
            <Text style={[TextStyles.regular, { color: COLORS.BLACK }]}>0</Text>
          </View>
          <View style={{
            marginTop: 8 * rateh,
            marginBottom: 15 * rateh,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <Text style={TextStyles.regular}>Tổng cộng</Text>
            <NumberFormat price={route.params.total} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SuccessScreen')}
            style={{
              backgroundColor: COLORS.ORANGE,
              width: 225 * ratew,
              height: 45,
              borderRadius: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={[TextStyles.semiBold, { color: COLORS.WHITE }]}>Đặt hàng</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  list: {
    marginLeft: 15 * ratew,
    marginBottom: 15,
  },
})
