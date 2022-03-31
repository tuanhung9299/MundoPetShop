import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  // ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import InputSpinner from 'react-native-input-spinner'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-redux'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import NumberFormat from '../../components/Store/NumberFormatComponent'
import ICONS from '../../../assets/icons'
import IMAGES from '../../../assets/images/index'
import HeaderBar from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'
import Slider from '../../components/DetalisComponent/SliderComponent'
// import { TEMP_DATA_CART } from '../../utils/index'
import CheckProductDetalis from '../../components/DetalisComponent/CheckProductDetalisComponent'
import Store from '../StoreScreen/index'

const dataDespricito = [
  {
    key: '1',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '2',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '3',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '4',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
]

const Tab = createMaterialTopTabNavigator()

const { width, height } = Dimensions.get('window')
// const { height } = width * 0.6
const ratew = width / 360
const rateh = height / 640

const DetalisScreen = ({ navigation, route }) => {
  return (
    <Provider store={Store}>
      <View style={styles.Container}>
        <HeaderBar
          navigation={navigation}
          iconLeft={ICONS.iconBack}
          iconRight={ICONS.Carts}
          linkRight="CartScreen"
          textHeader="Chi tiết sản phẩm"
        />
        <TouchableOpacity
          style={{
            width: 18 * ratew, height: 18 * rateh, backgroundColor: 'red', borderRadius: 120, position: 'absolute', left: 330 * ratew, top: 32 * rateh, justifyContent: 'center', alignItems: 'center',
          }}
          onPress={() => navigation.navigate('CartScreen')}
        >
          <View style={{ flex: 1 }}>
            <Text style={[TextStyles.regular, { color: COLORS.WHITE }]}>1</Text>
          </View>
        </TouchableOpacity>
        <Slider />
        <Text
          style={[TextStyles.semiBold, {
            marginLeft: 10 * ratew,
            marginTop: 7 * rateh,
            width: '100%',
          }]}
        >
          {route.params.Product.NameProduct}
        </Text>
        <Text
          style={[TextStyles.min, {
            marginLeft: 10 * ratew,
            marginTop: 7 * rateh,
            width: '100%',
            color: COLORS.DARK_GRAY,
          }]}
        >
          {route.params.Product.SubNameProduct}
        </Text>
        <View style={{
          marginLeft: 10 * ratew,
          marginTop: 7 * rateh,
          width: '100%',
        }}
        >
          <NumberFormat
            price={route.params.Product.PriceProduct}
          />
        </View>

        <View style={{
          marginTop: 10 * rateh, flex: 1,
        }}
        >

          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: COLORS.ORANGE,
              inactiveTintColor: COLORS.BLACK,
              pressColor: 'grey',
              tabStyle: { borderEndColor: COLORS.ORANGE },
              indicatorStyle: {
                backgroundColor: COLORS.ORANGE,
              },
            }}
          >
            <Tab.Screen name="Đặt hàng" component={OderScreen} />
            <Tab.Screen name="Mô tả" component={desprictoe} />
            <Tab.Screen name="Bình luận" component={CCCC} />
          </Tab.Navigator>
        </View>
      </View>
    </Provider>

  )
}

const OderScreen = ({ navigation }) => {
  // const [data] = useState(TEMP_DATA_CART)
  const [number, setnumber] = useState(0)
  const BackgroundColorBuy = number > 0 ? COLORS.ORANGE : COLORS.DARK_GRAY
  const BackgroudColorAdd = number > 0 ? COLORS.WHITE : COLORS.DARK_GRAY
  const TextAdd = number > 0 ? COLORS.ORANGE : COLORS.WHITE
  const borderColor = number > 0 ? COLORS.ORANGE : COLORS.WHITE
  const [show, setshow] = useState('')
  // const onClickAddCart = () => {
  //   const itemCart = {
  //     food: data,
  //     quantity: 1,
  //     price: data.price,
  //   }
  //   AsyncStorage.getItem('cart').then(() => {
  //     if (data != null) {
  //       const cart = JSON.parse(data)
  //       cart.push(data)
  //       AsyncStorage.setItem('cart', JSON.stringify(cart))
  //     } else {
  //       const cart = []
  //       cart.push(itemCart)
  //       AsyncStorage.setItem('cart', JSON.stringify(cart))
  //     }
  //     Alert.alert('', 'Thêm thành công')
  //   })
  //     .catch((error) => {
  //       Alert.alert(error)
  //     })
  // }
  return (
    <View style={styles.odertainer}>
      <View style={styles.odertop}>
        <TouchableOpacity
          style={{
            width: 100 * ratew,
            height: 40 * rateh,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}

          onPress={() => { setshow(false) }}
        >
          <Text style={TextStyles.semiBold}>Gói</Text>
          {!show
            ? <CheckProductDetalis />
            : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 5, marginLeft: 15 * ratew, width: 100 * ratew, height: 40 * rateh, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center',
          }}
          onPress={() => { setshow(true) }}
        >
          <Text style={TextStyles.semiBold}>Thùng</Text>
          {show
            ? <CheckProductDetalis />
            : null}
        </TouchableOpacity>
      </View>
      <View style={styles.odercenter}>
        <Text style={TextStyles.semiBold}>Số lượng</Text>
        <InputSpinner
          onChange={(number) => setnumber(number)}
          max={20}
          min={0}
          step={1}
          width={118 * ratew}
          value={number}
          colorLeft={COLORS.LIGHT_GRAY}
          colorRight={COLORS.ORANGE}
          buttonStyle={{
            borderRadius: 3,
            width: 20 * ratew,
            height: 20 * rateh,
          }}
          inputStyle={TextStyles.regular}
          textColor={COLORS.BLACK}
          style={{
            marginLeft: 50 * ratew, justifyContent: 'center', alignItems: 'center',
          }}
        />
      </View>
      <View style={styles.oderbottom}>
        <View style={{
          width: '50%', height: '100%', paddingHorizontal: 15 * ratew,
        }}
        >
          <TouchableOpacity
            style={{
              width: 160 * ratew,
              height: 45 * rateh,
              // backgroundColor: '#D2D2D2',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              borderWidth: 1,
              borderColor,
              // borderColor:COLORS.ORANGE,
              backgroundColor: BackgroudColorAdd,

            }}
          // onPress={() => onClickAddCart()}
          >
            <Text style={[TextStyles.semiBold, {
              color: TextAdd,
            }]}
            >
              Thêm vào giỏ
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '50%', height: '100%', paddingRight: 15 * ratew }}>
          <TouchableOpacity
            style={{
              width: 160 * ratew,
              height: 45 * rateh,
              // backgroundColor: '#D2D2D2',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: BackgroundColorBuy,

            }}
            onPress={() => {
              if (number === 1) { navigation.navigate('CartScreen') }
            }}
          >
            <Text style={[TextStyles.semiBold, {
              color: COLORS.WHITE,
            }]}
            >
              Mua ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const desprictoe = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Text style={[TextStyles.regular, {
        color: COLORS.BLACK, paddingVertical: 10 * rateh, paddingHorizontal: 10 * ratew, fontSize: 15,
      }]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  )
}

const renderItem = ({ item }) => (
  <View style={{
    width: '100%', height: 60 * rateh, flexDirection: 'row', paddingHorizontal: 15 * ratew, paddingVertical: 15 * rateh,
  }}
  >
    <View>
      <Image
        source={IMAGES.imageUserAvatar}
        style={{
          borderRadius: 30, width: 45 * ratew, height: 45 * rateh, marginRight: 10 * ratew,
        }}
      />
    </View>
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <Text style={TextStyles.semiBold}>{item.name}</Text>
      </View>
      <View>
        <Text style={[TextStyles.regular, { width: 275 * ratew }]}>{item.despricitoL}</Text>
      </View>
    </View>
  </View>
)
// export default renderItem

const CCCC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <FlatList
        data={dataDespricito}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  Silder: {
    width,
    height: 255,
  },
  iconsiler: {
    width: '100%',
    height: 20 * rateh,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  checkbox: {
    //     alignSelf: 'center',
  },
  odertainer:
  {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  odertop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15 * ratew,

  },

  odercenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10 * ratew,
  },
  oderbottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
export default DetalisScreen
