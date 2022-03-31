import React, { Component } from 'react'
import {
  Text, View, StyleSheet, Image, Dimensions,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const ListViewProductComponent = ({ navigation, list, link }) => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.item}>
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
            width: '30%', height: 90 * rateh, marginHorizontal: 10, marginVertical: 10,
          }}
        />
        </TouchableOpacity>
        <View style={{ width: '45%', justifyContent: 'flex-start', height: '100%' }}>
          <View style={{ width: '100%', height: '50%', paddingTop: 20 * rateh }}>
            <Text style={{ color: COLORS.BLACK, fontSize: 18 * ratew }}>{list.name}</Text>
          </View>
          <View style={{
            flex: 1, justifyContent: 'flex-end', width: '100%', height: '50%', paddingBottom: 30 * rateh,
          }}
          >
            <Text style={{ color: COLORS.ORANGE, fontSize: 18 * ratew }}>
              {list.price}
              đ
            </Text>
          </View>

        </View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 10 * ratew,
          paddingVertical: 10 * rateh,
        }}
        >
          <View style={{
            backgroundColor: COLORS.ORANGE, width: '110%', height: '40%', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Image source={ICONS.Calendar} style={{ resizeMode: 'contain', width: '80%', height: '100%' }} />
          </View>

        </View>

      </View>
    </View>
  )
}
export default ListViewProductComponent

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1, marginTop: 15, paddingHorizontal: 6,
    },
    item:
    {
      flexDirection: 'row',
      backgroundColor: COLORS.WHITE,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,

    },
  }
)
