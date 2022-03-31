import React, { useEffect, useState } from 'react'
import {
  View, Text, Dimensions, FlatList, Image, TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'
import Header from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS } from '../../../assets/styles'
import { DATAENDOW } from '../../utils'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
const rate = width / 375

const DetailGift = ({ navigation, route }) => {
  const [modalSort, setModalSort] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={modalSort}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackButtonPress={() => { setModalSort(!modalSort) }}
        onBackdropPress={() => { setModalSort(!modalSort) }}
        backdropColor={COLORS.BLACK}
        backdropOpacity={0.5}
        style={{ flex: 1 }}
      >
        <View style={{
          position: 'absolute',
          height: 106 * rate,
          width: 330 * rate,
          backgroundColor: COLORS.WHITE,
          borderRadius: 15 * rate,
          paddingTop: 18 * rateh,
          justifyContent: 'flex-start',
          alignContent: 'center',

        }}
        >
          <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 16 }}>Bạn chắc chắn muốn đổi điểm?</Text></View>
          <View style={{
            flexDirection: 'row', paddingTop: 26 * rateh, justifyContent: 'space-between', marginHorizontal: 35 * ratew,
          }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.ORANGE, width: 110 * ratew, height: 35 * rateh, justifyContent: 'center', borderRadius: 10,
              }}
              onPress={() => {
                navigation.navigate('InfoOrderProductScreen')
                setModalSort(!modalSort)
              }}
            >
              <Text style={{ textAlign: 'center', color: COLORS.WHITE }}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.ORANGE, width: 110 * ratew, height: 35 * rateh, justifyContent: 'center', borderRadius: 10,
              }}
              onPress={() => navigation.navigate('GiftScreen')}
            >
              <Text style={{ textAlign: 'center', color: COLORS.WHITE }}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={{ flex: 1 }}>
        <View>
          <Header textHeader="Chi tiết quà tặng" iconLeft={ICONS.iconBack} navigation={navigation} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 10 * rateh }}>
            <Image source={ICONS.iconProduct} style={{ width: 90 * ratew, height: 90 * rateh }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 16 * rateh }}>{route.params.Detail.title}</Text>
            <Text style={{ fontSize: 16, paddingTop: 6 * rateh }}>{route.params.Detail.point}</Text>
            <Text style={{ fontSize: 16, paddingTop: 6 * rateh }}>
              <Text>Hiệu lực từ </Text>
              <Text style={{ color: COLORS.ORANGE }}>{route.params.Detail.timeStart}</Text>
              <Text> đến </Text>
              <Text style={{ color: COLORS.ORANGE }}>{route.params.Detail.timeEnd}</Text>
            </Text>
          </View>
          <View style={{ marginTop: 16 * rateh, marginLeft: 16 * ratew, marginRight: 16 * rateh }}>
            <Text style={{ fontSize: 16 }}>Điều khoản áp dụng</Text>
            <Text style={{
              fontSize: 16, paddingTop: 6 * rateh, color: COLORS.DARK_GRAY,
            }}
            >
              {route.params.Detail.rules}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 * rateh, marginLeft: 68 * ratew }}>
        <TouchableOpacity
          style={{
            width: 225 * ratew,
            height: 45 * rateh,
            backgroundColor: COLORS.ORANGE,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10 * rateh,
          }}
          onPress={() => { setModalSort(!modalSort) }}
        >
          <Text style={{ textAlign: 'center', color: COLORS.WHITE }}>
            {route.params.Detail.button}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default DetailGift
