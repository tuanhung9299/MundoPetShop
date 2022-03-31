/* eslint-disable import/no-unresolved */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  screenHome, screenAdvisory,
} from '../../screens'

const HomeStack = createStackNavigator()
// const AdvisoryStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'pink',
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        // textAlign: 'center',
      },
      headerTitleAlign: 'center',
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={screenHome}
      options={{
        title: 'Home',
      }}
    />
  </HomeStack.Navigator>
)

// const AdvisoryStackscreen = () => (
//   <AdvisoryStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#F47422',
//       //  justifyContent: 'center',
//         // alignItems: 'center',
//       },
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: '#FFFFFF',
//         fontFamily: 'Segoe UI',
//         // fontstyle: 'normal',
//       },
//       headerTitleAlign: 'center',
//     }}
//   >
//     <AdvisoryStack.Screen
//       name="Advisorys"
//       component={screenAdvisory}
//       options={{
//         title: 'Tu Van',
//       }}
//     />
//   </AdvisoryStack.Navigator>
// )

function CustomDrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 12, fontWeight: 'normal' }}>

      <Text style={{fontSize:18}}>Danh mục</Text>
      <TouchableOpacity
        style={{
          marginBottom: 10, paddingVertical: 3, borderBottomWidth: 1, borderBottomColor: '#D2D2D2',
          fontSize:20
        }}
        onPress={() => {
          navigation.navigate('Trang chủ')
        }}
      >

        <Text style={{ color: 'orange' }}> Dinh Dưỡng</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10, paddingVertical: 3, borderBottomWidth: 1, borderBottomColor: '#D2D2D2',
          fontSize:20

        }}
        onPress={() => {
          navigation.navigate('Trang chủ')
        }}
      >
        <Text> Sức Khỏe</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10, paddingVertical: 3, borderBottomWidth: 1, borderBottomColor: '#D2D2D2',
          fontSize:20
        }}
        onPress={() => {
          navigation.navigate('Trang chủ')
        }}
      >
        <Text> Hành Vi</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10, paddingVertical: 3, borderBottomWidth: 1, borderBottomColor: '#D2D2D2',
        }}
        onPress={() => {
          navigation.navigate('Trang chủ')
        }}
      >
        <Text> Nuôi Dạy</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10, paddingVertical: 3, borderBottomWidth: 1, borderBottomColor: '#D2D2D2',
        }}
        onPress={() => {
          navigation.navigate('Trang chủ')
        }}
      >
        <Text> Câu hỏi thường gặp</Text>

      </TouchableOpacity>
    </View>
  )
}
const Drawmenu = () => {
  return (

    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}

      initialRouteName="Advisoryscreen"
      drawerStyle={{ width: '50%', marginTop: 70 * rateh }}
    // drawerContentOptions={{0
    //   // activeBackgroundColor: '#F47422',
    //   activeTintColor: '#F47422',

    // }}
    >

      <Drawer.Screen
        name="Home"
        drawerLabel="Home"
        component={screenAdvisory}
      />

    </Drawer.Navigator>

  )
}
export default Drawmenu
