import React from 'react'
import {
  Text, View, Image, ImageBackground,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'

import { DATA_PROMOTION, DATA_NEWS } from '../../utils'
import { COLORS, TextStyles } from '../../../assets/styles'
import { RenderComponent } from '../../components'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
function LoginSuccess({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}
    >
      <View style={{
        backgroundColor: COLORS.ORANGE,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}
      />
      <ScrollView>
        <View style={{ flex: 3 }}>
          <ImageBackground
            source={IMAGES.imgBackgroundHeader}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              bottom: 30 * rateh,
              width: 390 * ratew,
              height: 200,
            }}
          >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              top: 60 * rateh,
              width: 360 * ratew,
              height: 170,
            }}
            >
              <View style={{ left: 20 * ratew }}>
                <Image source={IMAGES.Iconuser} width={50} height={50} />
              </View>
              <View style={{ flex: 1, left: 30 * ratew }}>
                <Text style={{ fontSize: 16, color: COLORS.WHITE }}>
                  Vũ Thư
                </Text>
                <Text style={{ fontSize: 14, color: COLORS.WHITE }}>Thanh vien bac</Text>
              </View>
              <View style={{
                flex: 1, flexDirection: 'row', left: 60 * ratew, borderLeftWidth: 2, height: 20, borderColor: 'white',
              }}
              >
                <Image source={IMAGES.Pointpet} style={{ width: 23 * ratew, height: 23 * rateh, left: 15 * ratew }} />
                <Text style={{ left: 20 * ratew, color: COLORS.WHITE }}>100</Text>
                <Image source={IMAGES.bell} style={{ width: 17 * ratew, height: 20 * rateh, left: 40 * ratew }} />
              </View>
            </View>
          </ImageBackground>
          <View>
            <View style={styles.headermid}>
              <TouchableOpacity style={styles.headermid1} onPress={() => navigation.navigate('MuzoScreen')}>
                <Image source={ICONS.iconMuzo} style={styles.styleimage} />
                <Text>Muzo</Text>
              </TouchableOpacity>
              <View style={styles.headermid1}>
                <Image source={ICONS.iconGift} style={styles.styleimage} />
                <Text>Quà tặng</Text>
              </View>
              <View style={styles.headermid1}>
                <Image source={ICONS.iconDeal} style={styles.styleimage} />
                <Text>Giao dịch</Text>
              </View>
            </View>
            <View>
              <View style={styles.Promote}>
                <Text>Khuyến mãi hôm nay</Text>
                <Image source={ICONS.iconNext} />
              </View>
            </View>
            <SafeAreaView style={styles.container_Flatlist}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA_PROMOTION}
                renderItem={({ item }) => (
                  <RenderComponent item={item} navigation={navigation} link="PromotionDetailsScreen" />

                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
            <View style={styles.new}>
              <Text style={{ fontSize: 16 }}>Tin tức</Text>
              <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
                <Image source={ICONS.iconNext} />
              </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.container_Flatlist}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA_NEWS}
                renderItem={RenderComponent}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headermid1: {
    flex: 1,
    width: 100 * ratew,
    height: 100 * rateh,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 7,
    borderRadius: 10,
    marginLeft: 5 * ratew,
    marginRight: 5 * ratew,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleimage: {
    height: 25 * rateh,
    width: 25 * ratew,
    resizeMode: 'center',
  },
  Promote: {
    flex: 1,
    marginLeft: 20 * ratew,
    marginRight: 30 * ratew,
    marginTop: 40 * ratew,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  new: {
    flex: 1,
    marginLeft: 20 * ratew,
    marginRight: 30 * ratew,
    marginTop: 10 * ratew,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_Flatlist: {
    flex: 1,
    height: 140 * rateh,
    top: 10,

  },
  header: {
    flex: 3,
  },
  textheader1: {
    color: 'white',
    fontSize: 30,
    left: 20 * ratew,
  },
  textheader2: {
    fontSize: 16,
    lineHeight: 19 * rateh,
    color: COLORS.DARK_WHITE,
    fontStyle: 'normal',
    left: 20 * ratew,
  },
  headermid: {
    flex: 1,
    position: 'absolute',
    top: -70 * rateh,
    width: 320 * ratew,
    flexDirection: 'row',
    height: 100 * rateh,
    marginRight: 20 * ratew,
    marginLeft: 20 * ratew,
  },
})
export default LoginSuccess
