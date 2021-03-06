/* eslint-disable no-shadow */
import * as React from 'react'
import {
  View, Text, Dimensions, Image, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Platform,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import { TextStyles, COLORS } from '../../../assets/styles/index'
import render from '../../components/Home/flatlistvericalComponent'
import {
  DATACOPPER, DATASILVER, DATAGOLD, DATADIAMOND,
} from '../../utils'
import Header from '../../components/HeaderBar'

function Copper() {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.WHITE,
    }}
    >
      <SafeAreaView style={{ flex: 1, height: 150 * rateh, top: 10 * rateh }}>
        <FlatList
          data={DATACOPPER}
          renderItem={render}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

function Silver() {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.WHITE,
    }}
    >
      <SafeAreaView style={{ flex: 1, height: 150 * rateh, top: 10 * rateh }}>
        <FlatList
          data={DATASILVER}
          renderItem={render}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

function Gold() {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.WHITE,
    }}
    >
      <SafeAreaView style={{ flex: 1, height: 150 * rateh, top: 10 * rateh }}>
        <FlatList
          data={DATAGOLD}
          renderItem={render}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

function Diamond() {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.WHITE,
    }}
    >
      <SafeAreaView style={{ flex: 1, height: 150 * rateh, top: 5 * rateh }}>
        <FlatList
          data={DATADIAMOND}
          renderItem={render}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const Tab = createMaterialTopTabNavigator()

const accumulation = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <View>
        <Header textHeader="T??ch l??y Muzo" iconLeft={ICONS.iconBack} navigation={navigation} />
      </View>

      {/* <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 15 }} onPress={() => navigation.navigate('InforUserScreen')  */}
      <TouchableOpacity
        style={{ marginHorizontal: 15, marginVertical: 15 }}
        onPress={() => navigation.navigate('LoggedUserScreen')}
      >
        <ImageBackground source={IMAGES.imgBackgroundPoint} imageStyle={{ borderRadius: 15 }} style={{ width: 330 * ratew, height: 150 * rateh }}>
          <View style={{ marginTop: 15 }}>
            <Text style={[TextStyles.bold, { color: COLORS.WHITE, marginLeft: 15 }]}>V?? Th??</Text>
            <Text style={[TextStyles.min, { color: COLORS.WHITE, marginLeft: 15 }]}>Kh??ch h??ng t??? ng??y 01/06/2020</Text>
            <View style={{
              backgroundColor: COLORS.WHITE,
              justifyContent: 'flex-start',
              width: 160 * ratew,
              height: 40 * rateh,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10,
              borderRadius: 5,
            }}
            >
              <View style={{ width: 75 * ratew }}>
                <Text style={[TextStyles.regular, { marginLeft: 15, color: COLORS.ORANGE }]}>H???ng b???c</Text>
              </View>
              <View style={{
                flexDirection: 'row', borderLeftWidth: 3, width: 75 * ratew, borderColor: COLORS.ORANGE,
              }}
              >
                <Image source={ICONS.iconPointPet_orange} style={{ marginLeft: 15 }} />
                <Text style={[TextStyles.regular, { marginLeft: 15, color: COLORS.ORANGE, marginTop: 2 }]}>100</Text>
              </View>
            </View>
            <Text style={[TextStyles.regular, {
              color: COLORS.WHITE, marginLeft: 15, marginTop: 15,
            }]}
            >
              B???n c???n 100 ??i???m ????? th??ng h???ng v??ng
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 20 * ratew,
          marginRight: 30 * ratew,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: COLORS.DARK_GRAY,
          height: 50 * rateh,
        }}
        onPress={() => navigation.navigate('HistoryScreen')}
      >
        <Text style={TextStyles.regular}>L???ch s???  t??ch ??i???m</Text>
        <Image source={ICONS.iconNext} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 20 * ratew,
          marginRight: 30 * ratew,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: COLORS.DARK_GRAY,
          height: 50 * rateh,
        }}
        onPress={() => navigation.navigate('GiftScreen')}
      >
        <Text style={TextStyles.regular}>??u ????i</Text>
        <Image source={ICONS.iconNext} />
      </TouchableOpacity>
      <View style={{
        marginLeft: 20 * ratew,
        marginRight: 30 * ratew,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 45 * rateh,
      }}
      >
        <Text style={TextStyles.semiBold}>Quy???n l???i nh??n vi??n</Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.ORANGE,
          inactiveTintColor: COLORS.DARK_GRAY,
          pressColor: 'grey',
          indicatorStyle: {
            backgroundColor: 'orange',
          },
        }}
      >
        <Tab.Screen name="?????ng" component={Copper} />
        <Tab.Screen name="B???c" component={Silver} />
        <Tab.Screen name="V??ng" component={Gold} />
        <Tab.Screen name="Kim c????ng" component={Diamond} />
      </Tab.Navigator>
    </View>
  )
}

export default accumulation
