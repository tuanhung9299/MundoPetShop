import React from 'react'
import {
  Text, View, TouchableOpacity, Dimensions, Image,
} from 'react-native'
import { COLORS, TextStyles } from '../../../assets/styles'
import ICONS from '../../../assets/icons'
import NumberFormat from '../Store/NumberFormatComponent'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
const GridProductComponent = ({
  navigation, list, link, onPress,
}) => {
  // const { list } = props

  return (
    <View style={{ flex: 1, marginTop: 15, paddingHorizontal: 6 }}>
      <View
        style={{ flex: 1 }}
      >
        <View style={{
          width: 160 * ratew, height: 225 * rateh, backgroundColor: COLORS.WHITE, borderRadius: 15,
        }}
        >
          <View style={{
            backgroundColor: COLORS.WHITE, borderRadius: 15,
          }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(link, {
                  Product: {
                    NameProduct: list.name,
                    SubNameProduct: list.subname,
                    PriceProduct: list.price,
                  },

                })
              }}
            >

              <Image
                source={list.linkImage}
                style={{
                  resizeMode: 'cover', width: 160 * ratew, height: 140 * rateh, borderRadius: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ paddingVertical: 6 }}>
              <Text style={[TextStyles.semiBold, { marginBottom: 6, color: COLORS.BLACK }]}>{list.name}</Text>
              <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>{list.subname}</Text>
            </View>
            <View style={{
              width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 3,
            }}
            >
              <View style={{ marginBottom: 6, color: COLORS.ORANGE, marginTop: 8 * rateh }}>
                <NumberFormat price={list.price} />
              </View>

              <View style={{
                backgroundColor: COLORS.ORANGE, justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderRadius: 5,
              }}
              >
                <TouchableOpacity
                  onPress={() => onPress(list)}
                >
                  <Image source={ICONS.Carts} style={{ resizeMode: 'contain', width: 20, height: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

  )
}
export default GridProductComponent
