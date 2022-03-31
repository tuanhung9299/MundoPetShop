/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
import React from 'react'
import {
  View, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Text, Image,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { DATAPRODUCT } from '../../utils'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const Tab = createMaterialTopTabNavigator()

function status(type) {
  return (
    DATAPRODUCT.filter((DATAPRODUCT) => DATAPRODUCT.status === type)
  )
}
function All({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}
    >
      <SafeAreaView style={{ top: 10 * rateh }}>
        <FlatList
          data={DATAPRODUCT}
          renderItem={({ item }) => <RenderDeal item={item} navigation={navigation} link="InfoOrderProductScreen" />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
function Wait({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}
    >
      <SafeAreaView style={{ top: 10 * rateh }}>
        <FlatList
          data={status('Chờ xác nhận')}
          renderItem={({ item }) => <RenderDeal item={item} navigation={navigation} link="InfoOrderProductScreen" />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
function Completing({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}
    >
      <SafeAreaView style={{ top: 10 * rateh }}>
        <FlatList
          data={status('Đang hoàn thành')}
          renderItem={({ item }) => <RenderDeal item={item} navigation={navigation} link="InfoOrderProductScreen" />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
function Completed({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}
    >
      <SafeAreaView style={{ top: 10 * rateh }}>
        <FlatList
          data={status('Hoàn thành')}
          renderItem={({ item }) => <RenderDeal item={item} navigation={navigation} link="InfoOrderProductScreen" />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
function Cancel({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}
    >
      <SafeAreaView style={{ top: 10 * rateh }}>
        <FlatList
          data={status('Đã hủy')}
          renderItem={({ item }) => <RenderDeal item={item} navigation={navigation} link="InfoOrderProductScreen" />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
const Deal = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header textHeader="Giao dịch" iconLeft={ICONS.iconBack} navigation={navigation} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.ORANGE,
          inactiveTintColor: COLORS.DARK_GRAY,
          pressColor: 'grey',
          tabStyle: { borderEndColor: COLORS.ORANGE },
          indicatorStyle: {
            backgroundColor: COLORS.ORANGE,
          },
          labelStyle: {
            fontSize: 14,
            textTransform: 'none',
          },
          allowFontScaling: false,
          scrollEnabled: true,
        }}
      >
        <Tab.Screen name="Tất cả" component={All} navigation={navigation} />
        <Tab.Screen name="Chờ xác nhận" component={Wait} navigation={navigation} />
        <Tab.Screen name="Đang hoàn thành" component={Completing} navigation={navigation} />
        <Tab.Screen name="Hoàn thành" component={Completed} navigation={navigation} />
        <Tab.Screen name="Đã hủy" component={Cancel} navigation={navigation} />
      </Tab.Navigator>
    </View>
  )
}
const RenderDeal = ({ item, navigation }) => {
  const color = (status) => {
    let colorName
    switch (status) {
      case 'Chờ xác nhận':
        colorName = COLORS.Color_Status.Wait
        return colorName
      case 'Đang hoàn thành':
        colorName = COLORS.Color_Status.completing
        return colorName
      case 'Hoàn thành':
        colorName = COLORS.Color_Status.completed
        return colorName
      case 'Đã hủy':
        colorName = COLORS.Color_Status.Cancel
        return colorName
      default:
        colorName = COLORS.BLACK
        return colorName
    }
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        width: 330 * ratew,
        borderBottomWidth: 1,
        marginTop: 10 * rateh,
        borderColor: COLORS.DARK_GRAY,
        marginLeft: 14 * ratew,
      }}
      onPress={() => {
        navigation.navigate('InfoOrderProductScreen', {
          Detail: {
            status: item.status,
            address: item.address,
            type: item.type,
            price: item.price,
            time: item.time,
            product: item.product,
            method: item.method,
            transport: item.transport,
            discount: item.discount,
            priceProduct: item.priceProduct,
            total: item.total,
          },
        })
      }}
    >
      <View style={{
        width: 60 * ratew,
        height: 60 * rateh,
        backgroundColor: COLORS.DARK_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
      }}
      >
        <Image source={item.img} />
      </View>
      <View style={{
        flexDirection: 'column', paddingLeft: 10 * ratew,
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>{item.title}</Text>
          <Text style={{ fontSize: 14, color: COLORS.DARK_GRAY, paddingLeft: 37 * ratew }}>{item.time}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 * rateh }}>
          <Text>{`${item.product.length} ${item.type}`}</Text>
          <Text style={{ color: COLORS.ORANGE }}>{item.total}</Text>
        </View>
        <View>
          <View style={{
            width: 135 * ratew,
            height: 35 * rateh,
            backgroundColor: color(item.status),
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10 * rateh,
            marginBottom: 10 * rateh,
          }}
          >
            <Text style={{ textAlign: 'center', color: COLORS.WHITE, fontWeight: 'bold' }}>{item.status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default Deal
