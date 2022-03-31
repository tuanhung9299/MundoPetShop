/* eslint-disable no-unused-expressions */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react'
import {
  View,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import HomeNotLoginScreen from './HomeNotLoginScreen'

const SpLash = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 50)
    return () => {
    }
  })
  return (
    <View style={{ flex: 1 }}>
      <HomeNotLoginScreen />
    </View>
  )
}
export default SpLash
