import React from 'react'
import {
  View, Image, Text, Dimensions, TouchableOpacity, SafeAreaView, FlatList,
} from 'react-native'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import Header from '../../components/HeaderBar'
import { COLORS, TextStyles } from '../../../assets/styles'

import { FlatlistAdvisory } from '../../components'
import { Data_Advisory } from '../../utils'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const Advisory = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header textHeader="Tư vấn" />
      <View
        style={{
          width: '100%',
          height: 60 * rateh,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View style={{
          width: 30 * ratew, height: '100%', justifyContent: 'center', alignContent: 'center',
        }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: '100%', height: '100%', resizeMode: 'contain',
              }}
              source={ICONS.IconsCategory.List}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ width: 200 * ratew, height: '100%' }}
        >
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={IMAGES.Advisory.logo} />
        </View>
        <View style={{ width: 20 * ratew, height: '100%' }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={ICONS.Search} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 35 * rateh,
          marginTop: 10 * rateh,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15 * ratew,

        }}
      >
        <View
          style={{
            width: 140 * ratew,
            height: '100%',
            borderLeftColor: '#F47422',
            borderLeftWidth: 4,
            paddingHorizontal: 6 * ratew,
            paddingVertical: 6 * rateh,
          }}
        >
          <Text style={TextStyles.regular}>
            Dinh dưỡng
          </Text>
        </View>
        <View style={{
          width: 110 * ratew,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        >
          <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY }]}>
            Xem tất cả
            {' '}
            {'>'}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 170 * rateh,
          paddingLeft: 15 * ratew,
          paddingRight: 15 * ratew,
        }}
      >
        <View
          style={{
            with: '100%',
            height: '100%',
            backgroundColor: 'yellow',
          }}
        >
          <Image
            style={{
              borderRadius: 15, width: '100%', height: '100%', resizeMode: 'stretch',
            }}
            source={IMAGES.imgSlider3}
          />
        </View>
      </View>
      <View style={{
        width: '100%',
        height: 30 * rateh,
        marginTop: 10 * rateh,
        flexDirection: 'row',
        paddingHorizontal: 15 * ratew,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Text style={[TextStyles.semiBold, { color: '#2F3542' }]}>
          Mẹo ăn kiêng cho thú cưng
        </Text>
        <Text style={[TextStyles.regular, { color: COLORS.DARK_GRAY2 }]}>16/06/2020</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={Data_Advisory}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FlatlistAdvisory list={item} navigation={navigation} link="DietTipsScreen" />}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  )
}

export default Advisory
