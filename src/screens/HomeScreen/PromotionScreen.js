import React from 'react'
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import HeadBar from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles/index'
import { DATA_PROMOTION } from '../../utils'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
const Promotion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeadBar navigation={navigation} textHeader="Khuyến Mãi" iconLeft={ICONS.iconBack} />
      <FlatList
        data={DATA_PROMOTION}
        renderItem={({ item }) => <View style={{
          flex: 1, height: 200 * rateh, paddingVertical: 10 * rateh, paddingHorizontal: 15 * ratew, marginBottom: 5 * rateh,
        }}
        >

          <TouchableOpacity onPress={() => navigation.navigate('PromotionDetailsScreen')}>
            <Image
              source={item.img}
              style={{
                resizeMode: 'cover', width: 330 * ratew, height: 150 * rateh, borderRadius: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 330 * ratew, marginTop: 8 * rateh }} onPress={() => navigation.navigate('PromotionDetailsScreen')}>
            <Text style={TextStyles.semiBold}>{item.title}</Text>
          </TouchableOpacity>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Promotion

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
})
