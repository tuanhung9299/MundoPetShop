import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity, View, Text,
  StyleSheet, Image, Dimensions, StatusBar, Alert,
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import CheckBox from 'react-native-check-box'
// eslint-disable-next-line import/no-unresolved
import Toast from 'react-native-simple-toast'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import NumberFormat from '../../components/Store/NumberFormatComponent'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'
import ICONS from '../../../assets/icons'

import { TEMP_DATA_CART } from '../../utils/index'
// import Cartitem from '../../components/Reducers/CartItem'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const ScreenCart = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
      //
    }
    if (listItems.length === 0) { setShow(true) }
  }, [route.params?.post], [])

  const [listItems, setListItems] = useState(TEMP_DATA_CART)
  const handleRemove = (id) => {
    const newList = listItems.filter((item) => item.id !== id)
    setListItems(newList)
  }
  const [checkedAll, setCheckedAll] = useState(false)
  const [checked, setChecked] = useState([])

  const BackgroundColorBuy = checkedAll ? COLORS.ORANGE : COLORS.ORANGE

  const deleteAlert = (item) => {
    Alert.alert(
      '',
      'Bạn chắc chắn muốn bỏ sản phẩm này?',
      [
        {
          text: 'Không',
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => handleRemove(item.id),
        },
      ],
      { cancelable: false }
    )
  }

  const footerView = () => {
    return (
      <View style={{ backgroundColor: COLORS.WHITE }}>
        <View style={{
          marginLeft: 15 * rate,
          marginRight: 15 * rate,
          marginBottom: 15,
        }}
        >
          <View style={{
            height: 50,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}
          >
            <Image source={ICONS.iconVoucher} />
            <TouchableOpacity onPress={() => navigation.navigate('DiscountScreen')}>
              <Text style={[TextStyles.regular, {
                marginLeft: 10 * rate,
              }]}
              >
                Nhập mã giảm giá
                {' '}
                {route.params?.post}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 15,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <Text style={TextStyles.regular}>Tổng cộng</Text>
            <NumberFormat price={totalPrice} />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (checked === false || totalPrice === 0) {
                Toast.showWithGravity('Vui lòng chọn ít nhất 1 sản phẩm.', Toast.SHORT, Toast.CENTER)
              } else {
                navigation.navigate('OrderScreen', {
                  items: listItems, total: totalPrice,
                })
              }
            }}
            style={{
              backgroundColor: BackgroundColorBuy,
              width: 225 * rate,
              height: 45,
              borderRadius: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={[TextStyles.semiBold, {
                color: COLORS.WHITE,
              }]}
              >
                Tiến hành đặt hàng
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  let totalPrice = 0

  listItems.forEach((item) => {
    if (checkedAll) {
      totalPrice += item.value * item.quantity
    } else if (checked.includes(item.id)) { totalPrice += item.value * item.quantity }
  })

  const onSubtract = (item, index) => {
    const list = [...listItems]
    if (list[index].quantity <= 1) {
      deleteAlert(item)
    } else {
      list[index].quantity -= 1
      setListItems(list)
    }
  }

  const onAdd = (item, index) => {
    const list = [...listItems]
    if (list[index].quantity < 99) {
      list[index].quantity += 1
      setListItems(list)
    }
  }

  const [show, setShow] = useState('')
  const showCheckAll = () => {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 15,
        marginBottom: 10,
        marginLeft: 15 * rate,
        marginTop: 10,
      }}
      >
        <CheckBox
          checkBoxColor={COLORS.ORANGE}
          isChecked={checkedAll}
          onClick={() => setCheckedAll(!checkedAll)}
        />
        <Text style={[TextStyles.regular, { marginLeft: 10 * rate }]}>Tất cả</Text>
      </View>
    )
  }

  const EmptyListMessage = () => {
    return (
      <View style={{
        flex: 1, height: 500, alignSelf: 'center', justifyContent: 'center',
      }}
      >
        <View style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
        }}
        >
          <Text style={[TextStyles.semiBold, { fontSize: 16, width: windowWidth, textAlign: 'center' }]}>
            Không còn sản phẩm nào trong giỏ hàng
          </Text>
          <Text
            style={[TextStyles.semiBold, { width: 270 * rate, textAlign: 'center' }]}
          >
            Lướt Mundo, lựa hàng liền tay!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductScreen')}
            style={{
              width: 80 * rate,
              height: 40,
              borderWidth: 1,
              marginTop: 15,
              borderColor: COLORS.ORANGE,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>Mua ngay!</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.list}>
        <View style={{
          width: windowWidth,
          height: 80,
        }}
        >
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              checkBoxColor={COLORS.ORANGE}
              isChecked={!checkedAll ? checked.includes(item.id) : true}
              onClick={() => {
                const newIds = [...checked]
                index = newIds.indexOf(item.id)
                if (index > -1) {
                  newIds.splice(index, 1)
                } else {
                  newIds.push(item.id)
                }
                setChecked(newIds)
              }}
              style={{
                alignSelf: 'center',
              }}
            />
            <Image
              source={item.image}
              style={{
                width: 80 * rate,
                height: 85,
                borderRadius: 15,
                marginRight: 10 * rate,
                marginLeft: 10 * rate,
              }}
            />
            <View>
              <Text numberOfLines={1} style={[TextStyles.semiBold, { width: 210 * rate, marginTop: 5 }]}>{item.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 55 }}>
                <View>
                  <NumberFormat price={item.value} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: 130 * rate }}>
                  <TouchableOpacity onPress={() => onSubtract(item, index)}><FastImage style={{ width: 15, height: 15 }} source={ICONS.iconMinus} /></TouchableOpacity>
                  <Text style={[TextStyles.semiBold, { marginHorizontal: 15, width: 16 * rate, textAlign: 'center' }]}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => onAdd(item, index)}><FastImage style={{ width: 15, height: 15 }} source={ICONS.iconPlus} /></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header navigation={navigation} textHeader="Giỏ hàng" iconLeft={ICONS.iconBack} />
      <View style={{ flex: 1 }}>
        {show ? null : showCheckAll()}
        <SwipeListView
          disableRightSwipe
          data={listItems}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListMessage}
          renderHiddenItem={({ item }) => (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 15 * rate,
            }}
            >
              <TouchableOpacity onPress={() => handleRemove(item.id)}>
                <Image
                  source={ICONS.iconDelete}
                  style={{
                    width: 18 * rate,
                    height: 20,
                    resizeMode: 'stretch',
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-35 * rate}
        />
      </View>
      {show ? null : footerView()}
    </View>
  )
}

// const mapStateToProps = (state) => {
//   {
//   }
// }
export default connect()(ScreenCart)

const styles = StyleSheet.create({
  list: {
    marginLeft: 15 * rate,
    marginBottom: 15,
    width: 345 * rate,
    backgroundColor: COLORS.WHITE,
  },
})
