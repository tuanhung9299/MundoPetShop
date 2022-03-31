import React, { useState, useEffect } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { NavigationContainer, useIsFocused } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-redux'
import * as Screen from './src/screens'
import ICONS from './assets/icons'
import drawmenu from './src/components/Advisory/Drawmenu'
import StoreStack from './src/screens/StoreScreen/StoreStack'
import HomeStack from './src/screens/HomeScreen/HomeStack'
import { COLORS, Fonts } from './assets/styles'

import store from './src/screens/StoreScreen/index'

const STORAGE_STATE_LOGIN = '@state_login'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabApp = () => {
  const [stateLogin, setStateLogin] = useState()
  const [component, setComponent] = useState()
  const isFocused = useIsFocused()

  const handleCheckState = async () => {
    setStateLogin(await AsyncStorage.getItem(STORAGE_STATE_LOGIN))
  }

  useEffect(() => {
    handleCheckState()
    // console.log(stateLogin)
    if (stateLogin === 'true') {
      setComponent(true)
    }
    if (stateLogin === 'false') {
      setComponent(false)
    }
  }, [isFocused, component, stateLogin])

  return (

    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({
            focused, color, size,
          }) => {
            let iconName
            if (route.name === 'Trang chủ') {
              iconName = focused
                ? ICONS.Home.active
                : ICONS.Home.deactive
              size = 20 * ratew
            } else if (route.name === 'Mua hàng') {
              iconName = focused
                ? ICONS.Store.active
                : ICONS.Store.deactive
              size = 20 * ratew
            } else if (route.name === 'code') {
              iconName = focused
                ? ICONS.QRCode.active
                : ICONS.QRCode.deactive
              size = 55 * ratew
            } else if (route.name === 'Tư vấn') {
              iconName = focused
                ? ICONS.Headphone.active
                : ICONS.Headphone.deactive
              size = 20 * ratew
            } else if (route.name === 'Tài khoản') {
              iconName = focused
                ? ICONS.User.active
                : ICONS.User.deactive
              size = 20 * ratew
            }
            // You can return any component that you like here!
            return <Image source={iconName} color={color} style={{ resizeMode: 'cover', width: size, height: size }} />
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.ORANGE,
          inactiveTintColor: COLORS.DARK_GRAY,
          labelStyle: {
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          style: { height: 55 * rateh, paddingBottom: 8 },
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={HomeStack}
        />
        <Tab.Screen
          name="Mua hàng"
          component={StoreStack}
        />
        <Tab.Screen
          name="code"
          component={Screen.screenQRCode}
          options={{
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Tư vấn"
          component={drawmenu}
        />
        <Tab.Screen
          name="Tài khoản"
          component={component ? Screen.LoggedUserScreen : Screen.UserScreen}
        />
      </Tab.Navigator>
    </View>
  )
}
const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabApp" component={TabApp} />
            <Stack.Screen name="CartScreen" component={Screen.screenCart} />
            <Stack.Screen name="DiscountScreen" component={Screen.screenDiscount} />
            <Stack.Screen name="OrderScreen" component={Screen.screenOrder} />
            <Stack.Screen name="PayScreen" component={Screen.screenPay} />
            <Stack.Screen name="SearchResultsScreen" component={Screen.screenSearchResults} />
            <Stack.Screen name="SearchScreen" component={Screen.screenSearch} />
            <Stack.Screen name="SuccessScreen" component={Screen.screenSuccess} />
            <Stack.Screen name="ServiceScreen" component={Screen.ServiceScreen} />
            <Stack.Screen name="MuzoScreen" component={Screen.AccumulationMuzoScreen} />
            <Stack.Screen name="GiftScreen" component={Screen.GiftScreen} />
            <Stack.Screen name="DealScreen" component={Screen.DealScreen} />
            <Stack.Screen name="HistoryScreen" component={Screen.HistoryAccumulationScreen} />
            <Stack.Screen name="DetailGiftScreen" component={Screen.DetailGiftScreen} />
            <Stack.Screen name="ServiceDetailScreen" component={Screen.ServiceDetailScreen} />
            <Stack.Screen name="DetailService" component={Screen.DetailService} />
            <Stack.Screen name="LoginScreen" component={Screen.LoginScreen} />
            <Stack.Screen name="AddressScreen" component={Screen.AddressScreen} />
            <Stack.Screen name="InforUserScreen" component={Screen.InforUserScreen} />
            <Stack.Screen name="VerificationScreen" component={Screen.VerificationScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={Screen.ForgotPasswordScreen} />
            <Stack.Screen name="AddAddressScreen" component={Screen.AddAddressScreen} />
            <Stack.Screen name="NewPasswordScreen" component={Screen.NewPasswordScreen} />
            <Stack.Screen name="RegisterScreen" component={Screen.RegisterScreen} />
            <Stack.Screen name="DetalisScreen" component={Screen.DetalisScreen} />
            <Stack.Screen name="ProductScreen" component={Screen.ProductScreen} />
            <Stack.Screen name="PromotionScreen" component={Screen.PromotionScreen} />
            <Stack.Screen name="PromotionDetailsScreen" component={Screen.PromotionDetailsScreen} />
            <Stack.Screen name="NewsScreen" component={Screen.NewsScreen} />
            <Stack.Screen name="SreachDetalisScreen" component={Screen.SreachDetalisScreen} />
            <Stack.Screen name="DietTipsScreen" component={Screen.DietTipsScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={Screen.ChangePasswordScreen} />
            <Stack.Screen name="InfoOrderProductScreen" component={Screen.InfoOrderProductScreen} />
            <Stack.Screen name="EnterNewPassScreen" component={Screen.EnterNewPassScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}
export default App
