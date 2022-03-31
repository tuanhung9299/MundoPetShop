import React from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SliderBox } from 'react-native-image-slider-box'
import ICONS from '../../../assets/icons'
import IMAGES from '../../../assets/images/index'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const dataImages = [
  IMAGES.imgSlider1,
  IMAGES.imgSlider2,
  IMAGES.imgSlider3,
]

const ratew = width / 360
const rateh = height / 640
const PromotionDetalis = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '45%' }}>
        {/* <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width, height: 310 * rateh, paddingVertical: 10 * rateh, position: 'absolute',
          }}
        >
          {dataImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{
                width,
                height: 300,
                resizeMode: 'cover',
              }}
            />
          ))}

        </ScrollView> */}
        <View style={{ position: 'absolute' }}>
          <SliderBox
            images={dataImages}
            resizeMode="cover"
            sliderBoxHeight={275 * rateh}
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

      <View style={{ marginTop: 5 * rateh, flex: 1, paddingHorizontal: 15 * ratew }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <Text style={[TextStyles.semiBold, {
            color: COLORS.BLACK, marginBottom: 4,
          }]}
          >
            Ưu đãi lớn dành riêng cho khách hang mua sắm
            tại cửa hàng
          </Text>
          <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY, marginBottom: 6 * rateh }]}>
            22 Th6 2020
          </Text>
          <Text style={[TextStyles.regular, { color: COLORS.BLACK }]}>
            Lorem ipsum dolor sit amet, consectetur ,badipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida. Feugiat sed lectus vestibulum mattis ullamcorper. Quisque id diam vel quam elementum pulvinar. In tellus integer feugiat scelerisque varius morbi enim. Ac turpis egestas maecenas pharetra convallis. Nisl purus in mollis nunc sed id. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Id velit ut tortor pretium viverra suspendisse potenti nullam. Tortor aliquam nulla facilisi cras fermentum. In eu m
          </Text>
        </ScrollView>
      </View>

    </View>
  )
}

export default PromotionDetalis

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
})
