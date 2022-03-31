/* eslint-disable no-shadow */
import React from 'react'
import {
  View, Text, Dimensions, SafeAreaView, FlatList,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import moment from 'moment/min/moment-with-locales'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { DATARECEIVED, DATAUSED } from '../../utils'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
const Tab = createMaterialTopTabNavigator()
const arrdateRecieved1 = []
for (let i = 0; i < DATARECEIVED.length; i++) {
  arrdateRecieved1.push(DATARECEIVED[i].date)
}

const arrSetRecieved = [...new Set(arrdateRecieved1)]
arrSetRecieved.sort((a, b) => {
  return new Date(b) - new Date(a)
})

const arrdateUsed1 = []
for (let i = 0; i < DATAUSED.length; i++) {
  arrdateUsed1.push(DATAUSED[i].date)
}
const arrSetUsed = [...new Set(arrdateUsed1)]
arrSetUsed.sort((a, b) => {
  return new Date(b) - new Date(a)
})
function PointRecieved() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <SafeAreaView style={{
        top: 10 * rateh,
      }}
      >
        <FlatList
          data={arrSetRecieved}
          renderItem={renderPointReceived}
          keyExtractor={(item) => item.id}
          style={{}}
        />
      </SafeAreaView>
    </View>
  )
}
function PointUsed() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <SafeAreaView style={{
        top: 10 * rateh,
      }}
      >
        <FlatList
          data={arrSetUsed}
          renderItem={renderPointUsed}
          keyExtractor={(item) => item.id}
        />

      </SafeAreaView>
    </View>
  )
}

const HistoryAccumulation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header textHeader="Lịch sử tích điểm" iconLeft={ICONS.iconBack} navigation={navigation} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.ORANGE,
          inactiveTintColor: COLORS.DARK_GRAY,
          pressColor: 'grey',
          tabStyle: { borderEndColor: 'orange' },
          indicatorStyle: {
            backgroundColor: 'orange',
          },
        }}
      >
        <Tab.Screen name="Điểm đã nhận" component={PointRecieved} />
        <Tab.Screen name="Điểm đã dùng" component={PointUsed} />
      </Tab.Navigator>
    </View>
  )
}
function list(name, data) {
  return (
    data.filter((data) => data.date === name)
  )
}
const renderPointReceived = ({ item }) => (
  <View style={{ flex: 1 }}>
    <View style={{ marginLeft: 10 * ratew }}>
      <Text style={{ color: COLORS.ORANGE, fontSize: 15 }}>{moment(item).locale('vi').format('dddd ,DD MMM YYYY')}</Text>
    </View>
    <FlatList
      data={list(item, DATARECEIVED)}
      renderItem={({ item }) => <View style={{ flex: 1 }}>
        <View style={{
          width: 360 * ratew,
          height: 60 * rateh,
        }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10 * rateh,
            borderColor: COLORS.DARK_GRAY,
            borderBottomWidth: 1,
            marginLeft: 20 * ratew,
            marginRight: 11 * ratew,
          }}
          >
            <View>
              <Text style={{ fontSize: 14, fontWeight: '400' }}>{item.title}</Text>
              <Text style={{ color: COLORS.DARK_GRAY, fontSize: 12, paddingTop: 4 }}>{item.time}</Text>
            </View>
            <View>
              <Text style={{
                color: COLORS.ORANGE,
                fontSize: 14,
                fontWeight: 'bold',
              }}
              >
                {item.point}
              </Text>
            </View>
          </View>
        </View>
      </View>}
      keyExtractor={(item) => item.id}
    />
  </View>
)
const renderPointUsed = ({ item }) => (
  <View style={{ flex: 1 }}>
    <View style={{ marginLeft: 10 * ratew }}>
      <Text style={{ color: COLORS.ORANGE, fontSize: 15 }}>{moment(item).locale('vi').format('dddd ,DD MMM YYYY')}</Text>
    </View>
    <FlatList
      data={list(item, DATAUSED)}
      renderItem={({ item }) => <View style={{ flex: 1 }}>
        <View style={{
          width: 360 * ratew,
          height: 60 * rateh,
        }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10 * rateh,
            borderColor: COLORS.DARK_GRAY,
            borderBottomWidth: 1,
            marginLeft: 20 * ratew,
            marginRight: 11 * ratew,
          }}
          >
            <View>
              <Text style={{ fontSize: 14, fontWeight: '400' }}>{item.title}</Text>
              <Text style={{ color: COLORS.DARK_GRAY, fontSize: 12, paddingTop: 4 }}>{item.time}</Text>
            </View>
            <View>
              <Text style={{
                color: COLORS.ORANGE,
                fontSize: 14,
                fontWeight: 'bold',
              }}
              >
                {item.point}
              </Text>
            </View>
          </View>
        </View>
      </View>}
      keyExtractor={(item) => item.id}
    />
  </View>
)

export default HistoryAccumulation
