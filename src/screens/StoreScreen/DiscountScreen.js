import React from 'react'
import {
  View, Text, FlatList, Image, Dimensions, TextInput, TouchableOpacity, StatusBar,
} from 'react-native'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons/index'
import { COLORS, TextStyles } from '../../../assets/styles'
import { TEMP_DATA_DISCOUNTS } from '../../utils/index'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Discount = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header navigation={navigation} textHeader="Giảm giá" iconLeft={ICONS.iconBack} />
      <View style={{
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: 330 * rate,
        marginTop: 15,
        height: 60,
        paddingHorizontal: 10 * rate,
        backgroundColor: COLORS.WHITE,
        borderRadius: 15,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
      }}
      >
        <Image source={ICONS.iconVoucher} />
        <TextInput
          numberOfLines={1}
          placeholder="Nhập mã giảm giá"
          style={[TextStyles.regular, { marginLeft: 10 * rate, width: 260 * rate }]}
        />
      </View>
      <FlatList
        data={TEMP_DATA_DISCOUNTS}
        renderItem={({ item }) => <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            width: 330 * rate,
            marginTop: 10,
            height: 100,
            paddingHorizontal: 10 * rate,
            backgroundColor: COLORS.WHITE,
            borderRadius: 15,
            shadowColor: COLORS.BLACK,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            marginBottom: 5,
            elevation: 4,
            paddingTop: 15,
            justifyContent: 'space-between',
          }}
        >
          <Image
            source={item.image}
            style={{ width: 50 * rate, height: 50, borderRadius: 10 }}
          />

          <View style={{ width: 155 * rate }}>
            <Text numberOfLines={2} style={[TextStyles.regular, { width: 157 * rate }]}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              value={item.code}
              style={[TextStyles.regular, {
                color: COLORS.DARK_GRAY,
                marginTop: 5,
                width: 155 * rate,
              }]}
            >
              Mã giảm giá:
              {' '}
              {item.code}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CartScreen', { post: item.code })}
            style={{
              width: 65 * rate,
              height: 35,
              backgroundColor: COLORS.ORANGE,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={[TextStyles.regular, { color: COLORS.WHITE, textAlign: 'center' }]}>Dùng</Text>
          </TouchableOpacity>
        </View>}
      />
    </View>
  )
}

export default Discount
