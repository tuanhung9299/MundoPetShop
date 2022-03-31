import React from 'react'
import {
  SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ScrollView, TextInput, StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import Slider from '../../components/Store/SliderComponent'
import NumberFormat from '../../components/Store/NumberFormatComponent'
import { TEMP_DATA_STORE, dataProduct } from '../../utils/index'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const Purchase = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ height: 75 * rateh, backgroundColor: COLORS.ORANGE }}>
        <View style={{
          flexDirection: 'row', marginLeft: 15 * ratew, marginRight: 15 * ratew, alignItems: 'center', alignContent: 'center', marginTop: 30,
        }}
        >
          <TextInput
            showSoftInputOnFocus={false}
            style={[TextStyles.regular, {
              height: 43, width: 290 * ratew, borderRadius: 30, backgroundColor: COLORS.WHITE, marginRight: 10 * ratew,
            }]}
            placeholder="  Tìm kiếm"
            onFocus={() => navigation.navigate('SearchResultsScreen')}
          />
          <Image
            source={ICONS.Search}
            style={{
              resizeMode: 'stretch',
              alignItems: 'center',
              marginLeft: 265 * ratew,
              position: 'absolute',
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Carts} style={{ width: 20 * ratew, height: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{
          backgroundColor: COLORS.ORANGE, marginBottom: 20, borderBottomStartRadius: 80, borderBottomEndRadius: 80,
        }}
        >
          <Slider />
        </View>
        <ScrollView
          horizontal
          style={{
            height: 85 * rateh, width,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => {
            navigation.navigate('ProductScreen')
          }}
          >
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FECE00',
                  width: 50 * ratew,
                  height: 45 * rateh,
                  borderRadius: 8,
                  justifyContent: 'center',
                  marginRight: 12 * ratew,
                  marginLeft: 16 * ratew,
                }}
                onPress={() => {
                  navigation.navigate('ProductScreen')
                }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Dog} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View>
              <View style={{
                alignItems: 'center', width: 50 * ratew, marginTop: 5, marginLeft: 16 * ratew,
              }}
              >
                <Text style={TextStyles.roboto}>Chó</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <TouchableOpacity style={{
                backgroundColor: '#F67F00',
                width: 50 * ratew,
                marginLeft: 3 * ratew,
                height: 45 * rateh,
                borderRadius: 8,
                justifyContent: 'center',
                marginRight: 12 * ratew,
              }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Cat} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center', width: 50 * ratew, marginTop: 5, marginLeft: 3 * ratew,
            }}
            >
              <Text style={TextStyles.roboto}>Mèo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <TouchableOpacity style={{
                backgroundColor: '#79C5E7',
                width: 50 * ratew,
                height: 45 * rateh,
                marginLeft: 3 * ratew,
                borderRadius: 8,
                justifyContent: 'center',
                marginRight: 12 * ratew,
              }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Fish} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center', width: 50 * ratew, marginTop: 5, marginLeft: 3 * ratew,
            }}
            >
              <Text style={TextStyles.roboto}>Cá</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <TouchableOpacity style={{
                backgroundColor: '#F68381',
                width: 50 * ratew,
                marginLeft: 3 * ratew,
                height: 45 * rateh,
                borderRadius: 8,
                justifyContent: 'center',
                marginRight: 12 * ratew,
              }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.SmallPet} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 5,
            }}
            >
              <Text style={TextStyles.roboto}>
                Thú cưng
                {' \n '}
                {'    '}
                nhỏ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <TouchableOpacity style={{
                backgroundColor: '#02A797',
                width: 50 * ratew,
                marginLeft: 3 * ratew,
                height: 45 * rateh,
                borderRadius: 8,
                justifyContent: 'center',
                marginRight: 12 * ratew,
              }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Bird} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center', width: 50 * ratew, marginTop: 5, marginLeft: 3 * ratew,
            }}
            >
              <Text style={TextStyles.roboto}>Chim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <TouchableOpacity style={{
                backgroundColor: '#82A49D',
                width: 50 * ratew,
                height: 45 * rateh,
                marginLeft: 3 * ratew,
                borderRadius: 8,
                justifyContent: 'center',
                marginRight: 16 * ratew,
              }}
              >
                <FastImage resizeMode={FastImage.resizeMode.contain} source={ICONS.Reptile} style={styles.sizeImage} />
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center', height: 20, width: 50 * ratew, marginTop: 5, marginLeft: 3 * ratew,
            }}
            >
              <Text style={TextStyles.roboto}>Bò sát</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', paddingStart: 18 * ratew, paddingEnd: 18 * ratew,
        }}
        >
          <Text style={TextStyles.semiBold}>Dịch vụ cắt tỉa lông</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => navigation.navigate('ServiceScreen')}>
            <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>
              Xem tất cả
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEMP_DATA_STORE}
            renderItem={({ item }) => <View style={{
              marginBottom: 10, width: 130 * ratew,
            }}
            >
              <TouchableOpacity style={{ marginLeft: 20 * ratew }} onPress={() => navigation.navigate('DetailService', { keyName: item.name, keyValue: item.value })}>
                <View>
                  <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    source={item.image}
                    style={{
                      width: 115 * ratew, height: 105 * rateh, marginTop: 10, marginBottom: 10, borderRadius: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    value={item.name}
                    style={[TextStyles.semiBold, { width: 120 * ratew, height: 36 * rateh }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View>
                  <NumberFormat price={item.value} />
                </View>
              </TouchableOpacity>
            </View>}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', paddingStart: 18 * ratew, paddingEnd: 18 * ratew,
        }}
        >
          <Text style={TextStyles.semiBold}>Dịch vụ tắm</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ServiceScreen')} style={{ alignSelf: 'flex-end' }}>
            <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>
              Xem tất cả
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEMP_DATA_STORE}
            renderItem={({ item }) => <View style={{ marginBottom: 10, width: 130 * ratew }}>
              <TouchableOpacity style={{ marginLeft: 20 * ratew }} onPress={() => navigation.navigate('DetailService', { keyName: item.name, keyValue: item.value })}>
                <View>
                  <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    source={item.image}
                    style={{
                      width: 115 * ratew, height: 105 * rateh, marginTop: 10, marginBottom: 10, borderRadius: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    value={item.name}
                    style={[TextStyles.semiBold, { width: 120 * ratew, height: 36 * rateh }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View>
                  <NumberFormat price={item.value} />
                </View>
              </TouchableOpacity>
            </View>}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', paddingStart: 18 * ratew, paddingEnd: 18 * ratew,
        }}
        >
          <Text style={TextStyles.semiBold}>Dịch vụ trông giữ</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ServiceScreen')} style={{ alignSelf: 'flex-end' }}>
            <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>
              Xem tất cả
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TEMP_DATA_STORE}
            renderItem={({ item }) => <View style={{ marginBottom: 10, width: 130 * ratew }}>
              <TouchableOpacity style={{ marginLeft: 20 * ratew }} onPress={() => navigation.navigate('DetailService', { keyName: item.name, keyValue: item.value })}>
                <View>
                  <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    source={item.image}
                    style={{
                      width: 115 * ratew, height: 105 * rateh, marginTop: 10, marginBottom: 10, borderRadius: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    value={item.name}
                    style={[TextStyles.semiBold, { width: 120 * ratew, height: 36 * rateh }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View>
                  <NumberFormat price={item.value} />
                </View>
              </TouchableOpacity>
            </View>}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', paddingStart: 18 * ratew, paddingEnd: 18 * ratew,
        }}
        >
          <Text style={TextStyles.semiBold}>Sản phẩm nổi bật</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => navigation.navigate('ProductScreen2')}>
            <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>
              Xem tất cả
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataProduct}
            renderItem={({ item }) => <View style={{ marginBottom: 10, width: 130 * ratew }}>
              <TouchableOpacity
                style={{ marginLeft: 20 * ratew }}
                onPress={() => navigation.navigate('DetalisScreen', {
                  Product: {
                    NameProduct: item.name,
                    SubNameProduct: item.subname,
                    PriceProduct: item.price,
                  },
                })}
              >
                <View>
                  <Image
                    source={item.linkImage}
                    style={{
                      width: 115 * ratew, height: 105 * rateh, marginTop: 10, marginBottom: 10, borderRadius: 15,
                    }}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    value={item.name}
                    style={[TextStyles.semiBold, { width: 120 * ratew, height: 36 * rateh }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View>
                  <NumberFormat price={item.price} />
                </View>
              </TouchableOpacity>
            </View>}
            keyExtractor={(item) => item.key}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Purchase

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  sizeImage: {
    width: 35 * ratew,
    height: 35,
    alignSelf: 'center',
  },
})
