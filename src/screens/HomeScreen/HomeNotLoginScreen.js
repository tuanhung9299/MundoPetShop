import React from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'

import { RenderComponent } from '../../components'
import { DATA_PROMOTION, DATA_NEWS } from '../../utils'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
function notlogin() {
  return (
    <View>
      <ImageBackground
        source={IMAGES.imgBackgroundHeader}
        style={{
          resizeMode: 'cover',
          justifyContent: 'center',
          bottom: 30 * rateh,
          width: 390 * ratew,
          height: 200,
        }}
      >
        <Text style={[TextStyles.largeBold, {
          color: COLORS.WHITE,
          left: 20 * ratew,
        }]}
        >
          Xin chào!
        </Text>
        <Text style={[TextStyles.regular, {
          lineHeight: 19 * rateh,
          color: COLORS.DARK_WHITE,
          left: 20 * ratew,
        }]}
        >
          Đăng nhập hoặc đăng kí để trải nghiệm dịch vụ của
          {' '}
          {'\n'}
          Mundo Pet
        </Text>
      </ImageBackground>
    </View>
  )
}
function login() {
  return (
    <View>
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
          width: 350 * ratew,
          height: 170 * rateh,
        }}
        >
          <View style={{ left: 20 * ratew }}>
            <Image source={IMAGES.Iconuser} width={50} height={50} />
          </View>
          <View style={{ flex: 1, left: 30 * ratew }}>
            <Text style={{ fontSize: 18, color: COLORS.WHITE }}>
              Vũ Thư
            </Text>
            <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Thành viên bạc</Text>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', left: 40 * ratew, borderLeftWidth: 1, height: 30, borderColor: 'white',
          }}
          >
            <Image source={ICONS.Pointpet} style={{ width: 23 * ratew, height: 23 * rateh, left: 15 * ratew }} />
            <Text style={{ left: 20 * ratew, color: COLORS.WHITE, fontSize: 18 }}>100</Text>
            <Image source={ICONS.bell} style={{ width: 17 * ratew, height: 20 * rateh, left: 40 * ratew }} />
          </View>
        </View>
      </ImageBackground>
    </View>

  )
}
function ScreenHome() {
  const navigation = useNavigation()
  const int = 1
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: COLORS.WHITE,
    }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{
        backgroundColor: COLORS.ORANGE,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}
      />
      <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          {int === 1 ? login() : notlogin()}
        </SafeAreaView>
        <View>
          <View style={styles.headermid}>
            <TouchableOpacity style={styles.headermid1} onPress={() => navigation.navigate('MuzoScreen')}>
              <Image source={ICONS.iconMuzo} style={styles.styleimage} />
              <Text style={TextStyles.regular}>Muzo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headermid1} onPress={() => navigation.navigate('GiftScreen')}>
              <Image source={ICONS.iconGift} style={styles.styleimage} />
              <Text style={TextStyles.regular}>Quà tặng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headermid1} onPress={() => navigation.navigate('DealScreen')}>
              <Image source={ICONS.iconDeal} style={styles.styleimage} />
              <Text style={TextStyles.regular}>Giao dịch</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.Promote}>
              <Text style={TextStyles.semiBold}>Khuyến mãi hôm nay</Text>
              <TouchableOpacity onPress={() => navigation.navigate('PromotionScreen')}>
                <Image source={ICONS.iconNext} />
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView style={styles.container_Flatlist}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA_PROMOTION}
              renderItem={({ item }) => <RenderComponent item={item} navigation={navigation} link="PromotionDetailsScreen" />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          <View style={styles.new}>
            <Text style={TextStyles.semiBold}>Tin tức</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
              <Image source={ICONS.iconNext} />
            </TouchableOpacity>
          </View>
          <SafeAreaView style={styles.container_Flatlist}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA_NEWS}
              renderItem={({ item }) => <RenderComponent item={item} navigation={navigation} link="NewsScreen" />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headermid1: {
    flex: 1,
    width: 100 * ratew,
    height: 90 * rateh,
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
    marginTop: 35 * rateh,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  new: {
    flex: 1,
    marginLeft: 20 * ratew,
    marginRight: 30 * ratew,
    marginTop: 17 * rateh,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_Flatlist: {
    flex: 1,
    height: 160 * rateh,
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
export default ScreenHome
