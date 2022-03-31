import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Sreach from './SreachDetalisScreen'


const Stack = createStackNavigator()
const DetalisScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SreachScreen" component={Sreach} />
    </Stack.Navigator>
  )
}
export default DetalisScreenStack
