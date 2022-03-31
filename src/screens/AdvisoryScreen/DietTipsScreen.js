/* eslint-disable react/no-array-index-key */
import React from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SliderBox } from 'react-native-image-slider-box'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'
import IMAGES from '../../../assets/images/index'

const { width, height } = Dimensions.get('window')
const dataImages = [
  IMAGES.imgSlider1,
  IMAGES.imgSlider2,
  IMAGES.imgSlider3,
]

const ratew = width / 360
const rateh = height / 640
const DietTipsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 215 * rateh }}>
        <View style={{ position: 'absolute' }}>
          <SliderBox
            images={dataImages}
            resizeMode="cover"
            sliderBoxHeight={215 * rateh}
            dotColor={COLORS.ORANGE}
            inactiveDotColor={COLORS.DARK_GRAY}
            autoplay
            circleLoop
            dotStyle={{
              width: 25 * ratew,
              height: 3 * rateh,
              borderRadius: 15,
              top: 20,
            }}
          />
        </View>
        <TouchableOpacity style={{ width: 60 * ratew, height: 100 * rateh }} onPress={() => { navigation.goBack() }}>
          <Image
            style={{
              width: 25 * ratew, height: 25 * rateh, position: 'relative', top: 30 * rateh, left: 10 * ratew, resizeMode: 'contain',
            }}
            source={ICONS.iconBack}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 * rateh, flex: 1, paddingHorizontal: 15 * ratew }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <Text style={{
            fontSize: 16 * ratew, fontWeight: 'bold', color: COLORS.BLACK, marginBottom: 4,
          }}
          >
            {route.params.ItemAdvisory.name}
          </Text>
          <Text style={{ fontSize: 14 * ratew, color: COLORS.DARK_GRAY, marginBottom: 6 * rateh }}>
            {route.params.ItemAdvisory.time}
          </Text>
          <Text style={{ fontSize: 14 * ratew, color: COLORS.BLACK }}>
            {route.params.ItemAdvisory.despricto}
          </Text>
        </ScrollView>
      </View>

    </View>
  )
}

export default DietTipsScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
})
