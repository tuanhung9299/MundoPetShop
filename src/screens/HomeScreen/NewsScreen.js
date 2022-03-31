import React from 'react'
import {
  StyleSheet, Text, View, FlatList, Image, Dimensions,
} from 'react-native'
import HeadBar from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { DATA_NEWS } from '../../utils'
import { COLORS, TextStyles } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640
const News = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeadBar navigation={navigation} textHeader="Tin Tức" iconLeft={ICONS.iconBack} />
      <FlatList
        data={DATA_NEWS}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
      />
    </View>

  )
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
})

const renderitem = ({ item }) => {
  return (
    <View style={{
      flex: 1, width: 360 * ratew, height: 270 * rateh, marginHorizontal: 15 * ratew, marginTop: 10 * rateh,
    }}
    >
      <Image
        style={{
          width: 330 * ratew, height: 150 * rateh, resizeMode: 'cover', borderRadius: 15,
        }}
        source={item.img}
      />

      <View style={{
        width: 330 * ratew, height: 100 * rateh, justifyContent: 'space-evenly', marginTop: 5 * rateh,
      }}
      >
        <Text style={TextStyles.semiBold}>{item.title}</Text>
        <Text style={[TextStyles.min, { color: COLORS.DARK_GRAY }]}>{item.time}</Text>
        <Text style={[TextStyles.regular, { color: COLORS.BLACK }]}>{item.content}</Text>
      </View>
    </View>
  )
}
export default News
