/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {
  Image, View, Text, TouchableOpacity, SafeAreaView, Dimensions, Platform,
} from 'react-native'
import { COLORS, TextStyles } from '../../assets/styles'

const { height, width } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const HeaderBar = ({
  navigation, textHeader, iconLeft, iconRight, linkRight,
}) => {
  function handleRight() {
    if (linkRight !== null) { return navigation.navigate(linkRight) }
    return null
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.ORANGE }}>
      <View style={{
        backgroundColor: COLORS.ORANGE,
        // paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}
      />
      <View style={{
        width: 360 * ratew, flexDirection: 'row', paddingHorizontal: 15 * ratew, paddingVertical: 15 * rateh, marginTop: 20 * rateh, justifyContent: 'center',
      }}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.goBack() }}>
          <Image source={iconLeft} style={{ height: 25 * rateh, width: 25 * ratew, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={{ flex: 10, alignItems: 'center' }}>
          <Text style={[TextStyles.optionBold, { color: COLORS.WHITE }]}>{textHeader}</Text>
        </View>
        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => { handleRight }}>
          <Image source={iconRight} style={{ height: 25 * rateh, width: 25 * ratew, resizeMode: 'contain' }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

module.exports = HeaderBar
