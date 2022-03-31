import React from 'react'
import {
  View, Dimensions, StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import IMAGES from '../../../assets/images/index'
import { COLORS } from '../../../assets/styles/index'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Slider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={180}
        marginTop={10}
        width={330 * rate}
        autoplay
        dot={
          <View
            style={{
              backgroundColor: COLORS.DARK_GRAY2,
              width: 5 * rate,
              height: 5,
              borderRadius: 4,
              marginLeft: 2 * rate,
              marginRight: 4,
              marginTop: 4,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: COLORS.ORANGE,
              width: 15 * rate,
              height: 5,
              borderRadius: 4,
              marginLeft: 2 * rate,
              marginRight: 4,
              marginTop: 4,
            }}
          />
        }
        paginationStyle={{
          bottom: -10,
        }}
      >
        <View style={styles.slide1}>
          <FastImage
            source={IMAGES.imgSlider1}
            style={styles.img}
          />
        </View>
        <View style={styles.slide2}>
          <FastImage
            source={IMAGES.imgSlider2}
            style={styles.img}
          />
        </View>
        <View style={styles.slide3}>
          <FastImage
            source={IMAGES.imgSlider3}
            style={styles.img}
          />
        </View>
      </Swiper>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  img: {
    resizeMode: 'stretch',
    height: 180,
    width: 330 * rate,
    borderRadius: 15,
  },
})
