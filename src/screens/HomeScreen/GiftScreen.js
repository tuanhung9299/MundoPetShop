/* eslint-disable react/no-this-in-sfc */
import React from 'react'
import {
  View, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Text, Image,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { DATAENDOW, DATAMYENDOW } from '../../utils'
import { COLORS, TextStyles } from '../../../assets/styles'

const Tab = createMaterialTopTabNavigator()
const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

function Endow({ navigation, data, a }) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <SafeAreaView style={{
        top: 10 * rateh,
      }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <View
            style={{
              flex: 1,
              marginTop: 10 * rateh,
              marginHorizontal: 15 * ratew,
              marginVertical: 5 * rateh,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: COLORS.WHITE,
              backgroundColor: COLORS.WHITE,
              shadowColor: COLORS.BLACK,
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 5,
            }}
          >
            <View style={{
              flexDirection: 'row',
              marginVertical: 10 * rateh,
            }}
            >
              <View style={{ paddingLeft: 10 }}>
                <Image source={item.img} style={{ width: 50 * ratew, height: 50 * rateh, borderRadius: 10 }} />
              </View>
              <View style={{ flexDirection: 'column', paddingLeft: 10 * ratew, width: 170 * ratew }}>
                <Text style={TextStyles.regular}>{item.title}</Text>
                <Text style={[TextStyles.regular, { paddingTop: 6, color: COLORS.DARK_GRAY }]}>{item.point}</Text>
              </View>
              <View style={{ paddingLeft: 28 * ratew }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.ORANGE, width: 65 * ratew, height: 35 * rateh, justifyContent: 'center', borderRadius: 7,
                  }}
                  onPress={() => {
                    navigation.navigate('DetailGiftScreen', {
                      Detail: {
                        button: a,
                        title: item.title,
                        timeStart: item.dateStart,
                        timeEnd: item.dateEnd,
                        Point: item.point,
                        rules: item.rules,
                      },
                    })
                  }}
                >
                  <Text style={[TextStyles.regular, {
                    textAlign: 'center', color: COLORS.WHITE,
                  }]}
                  >
                    {a}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
function TransEndow({ navigation }) {
  return (
    <Endow data={DATAENDOW} navigation={navigation} a="Đổi" />
  )
}
function TransMyEndow({ navigation }) {
  return (
    <Endow data={DATAMYENDOW} navigation={navigation} a="Dùng" />
  )
}
const Gift = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header textHeader="Quà tặng" iconLeft={ICONS.iconBack} navigation={navigation} />
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
        <Tab.Screen name="Ưu đãi" component={TransEndow} />
        <Tab.Screen name="Ưu đãi của bạn" component={TransMyEndow} />
      </Tab.Navigator>
    </View>
  )
}
export default Gift
