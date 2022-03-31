import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeNotLoginScreen from './HomeNotLoginScreen'
import Splash from './SplashScreen'

const Stack = createStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="HomeScreen" component={HomeNotLoginScreen} />
    </Stack.Navigator>
  )
}
export default HomeStack
