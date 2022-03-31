import React from 'react'
import {
  View, Text, Dimensions, TouchableOpacity, FlatList, Image,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { Calendar, LocaleConfig, WeekCalendar } from 'react-native-calendars'
import WeeklyCalendar from 'react-native-weekly-calendar'
import { TEMP_DATA_COMMENTS } from '../../utils/index'
import ICONS from '../../../assets/icons/index'
import { COLORS, TextStyles } from '../../../assets/styles'
import Header from '../../components/HeaderBar'
import Slider from '../../components/DetalisComponent/SliderComponent'
import NumberFormat from '../../components/Store/NumberFormatComponent'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Tab = createMaterialTopTabNavigator()

const DetailService = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header navigation={navigation} textHeader="Chi tiết dịch vụ" iconLeft={ICONS.iconBack} iconRight={ICONS.iconCalendar} />
      <Slider />
      <View style={{ marginLeft: 15 * rate, marginTop: 20, marginBottom: 20 }}>
        <Text style={[TextStyles.semiBold, { marginBottom: 5 }]}>{route.params.keyName}</Text>
        <NumberFormat price={route.params.keyValue} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.ORANGE,
          inactiveTintColor: COLORS.BLACK,
          pressColor: COLORS.DARK_GRAY,
          indicatorStyle: {
            backgroundColor: COLORS.ORANGE,
          },
        }}
      >
        <Tab.Screen name="Đặt lịch" component={Schedule} />
        <Tab.Screen name="Mô tả" component={Description} />
        <Tab.Screen name="Bình luận" component={Comments} />
      </Tab.Navigator>

    </View>
  )
}
// LocaleConfig.locales.vn = {
//   monthNames: ['Tháng 1,', 'Tháng 2,', 'Tháng 3,', 'Tháng 4,', 'Tháng 5,', 'Tháng 6,', 'Tháng 7,', 'Tháng 8,', 'Tháng 9,', 'Tháng 10,', 'Tháng 11,', 'Tháng 12,'],
//   monthNamesShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
//   dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
//   dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
//   today: '',
// }
// LocaleConfig.defaultLocale = 'vn'
const Schedule = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <View>
        <WeeklyCalendar
          locale="vi"
          style={{ height: 110 }}
          themeColor={COLORS.ORANGE}
          titleStyle={{ fontSize: 16 }}
          dayLabelStyle={{ fontSize: 16, color: COLORS.BLACK }}
        />
        {/* <Calendar
          style={{ flex: 1 }}
          theme={{
            textSectionTitleColor: COLORS.BLACK,
            selectedDayBackgroundColor: COLORS.ORANGE,
            selectedDayTextColor: COLORS.WHITE,
            textDisabledColor: COLORS.DARK_GRAY,
            arrowColor: 'orange',
            monthTextColor: 'black',
            textDayFontWeight: '300',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          markingType="custom"
        /> */}

        <Text style={{ fontSize: 16, marginLeft: 15 * rate, marginTop: 15 }}>Khung giờ</Text>
        <View style={{
          marginLeft: 15 * rate, marginRight: 15 * rate, marginTop: 10, marginBottom: 10, flexDirection: 'row',
        }}
        >
          <FlatList
            data={[
              { id: '1', time: '09:00' },
              { id: '2', time: '10:00' },
              { id: '3', time: '11:00' },
              { id: '5', time: '12:00' },
              { id: '6', time: '13:00' },
              { id: '7', time: '14:00' },
            ]}
            renderItem={({ item }) => <View>
              <TouchableOpacity style={{
                justifyContent: 'center',
                width: 90 * rate,
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: COLORS.ORANGE,
                marginRight: 30 * rate,
                marginBottom: 10 * rate,
              }}
              >
                <Text style={[TextStyles.regular, { color: COLORS.ORANGE, textAlign: 'center' }]}>{item.time}</Text>
              </TouchableOpacity>
            </View>}
            numColumns={3}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <TouchableOpacity style={{
        width: 225 * rate,
        height: 45,
        backgroundColor: COLORS.ORANGE,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 15,
      }}
      >
        <Text style={[TextStyles.semiBold, { color: COLORS.WHITE, textAlign: 'center' }]}>Đặt lịch</Text>
      </TouchableOpacity>
    </View>

  )
}
const Description = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Text style={[TextStyles.regular, {
        width: 340 * rate, height: 171, letterSpacing: 0.5, marginHorizontal: 15,
      }]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  )
}
const Comments = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <FlatList
        data={TEMP_DATA_COMMENTS}
        renderItem={({ item }) => <View style={{ marginLeft: 15 * rate }}>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
            <Image
              source={item.image}
              style={{
                width: 35 * rate, height: 40, borderRadius: 150 / 2,
              }}
            />
            <View style={{ marginLeft: 10 * rate }}>
              <Text style={TextStyles.semiBold}>{item.name}</Text>
              <Text style={[TextStyles.regular, { color: COLORS.BLACK, width: 285 * rate }]}>{item.comment}</Text>
            </View>
          </View>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default DetailService
