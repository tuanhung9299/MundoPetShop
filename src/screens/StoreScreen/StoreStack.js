import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  screenPurchase, DetalisScreen, ProductScreen, ProductScreen2,
} from '../index'


const Stack = createStackNavigator()
const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PurchaseScreen" component={screenPurchase} />
      <Stack.Screen name="DetalisScreen" component={DetalisScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="ProductScreen2" component={ProductScreen2} />
    </Stack.Navigator>
  )
}
export default StoreStack
