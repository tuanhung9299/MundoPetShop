import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import Modal from 'react-native-modal'
import { COLORS, TextStyles } from '../../../assets/styles'
import IMAGES from '../../../assets/images'
import ICONS from '../../../assets/icons'
import HeaderBar from '../../components/HeaderBar'
import {
  GridItemComponent, ListItemComponent, ModalSortComponent, ModalFilterComponent,
} from '../../components'
import { DATA_SERVICE } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const renderGridItem = ({ item, index }) => {
  if (index % 2 === 0) {
    return (
      <View style={{ marginRight: 15 * rate }}>
        <GridItemComponent data={item} />
      </View>)
  }
  return (
    <GridItemComponent data={item} />
  )
}
const renderListItem = ({ item }) => {
  return (
    <ListItemComponent data={item} />)
}

const ServiceScreen = (props) => {
  const { navigation } = props
  const [valueSearch, onChangeSearchText] = React.useState('')
  const [isGrid, setIsGrid] = useState(true)
  const [colFlat, setColFlat] = useState(2)
  const [TEMP_DT, setTEMP_DT] = useState(DATA_SERVICE)
  const [isModalSort, setIsModalSort] = useState(false)
  const [isModalFill, setIsModalFill] = useState(false)
  const sortName = (isIncrease) => {
    const data = TEMP_DT
    data.sort((a, b) => {
      if (a.nameSer < b.nameSer) { return -1 }
      if (a.nameSer > b.nameSer) { return 1 }
      return 0
    })
    if (!isIncrease) {
      data.reverse()
    }
    setTEMP_DT(data)
    setIsModalSort(!isModalSort)
  }
  const sortPrice = (isIncrease) => {
    const data = TEMP_DT
    data.sort((a, b) => {
      if (a.priceSer < b.priceSer) { return -1 }
      if (a.priceSer > b.priceSer) { return 1 }
      return 0
    })
    if (!isIncrease) {
      data.reverse()
    }
    setTEMP_DT(data)
    setIsModalSort(!isModalSort)
  }
  useEffect(() => {
    if (isGrid) { setColFlat(2) } else setColFlat(1)
  }, [isGrid, isModalFill])
  return (
    <View style={{ flex: 1 }}>
      {/* Modal */}
      <ModalSortComponent isVisible={isModalSort} handleOff={() => { setIsModalSort(!isModalSort) }} sortName={sortName} sortPrice={sortPrice} />
      <ModalFilterComponent isVisible={isModalFill} handleOff={() => { setIsModalFill(!isModalFill) }} />
      {/* Modal */}
      {/* Header Sắp xếp */}
      <HeaderBar navigation={navigation} iconLeft={ICONS.iconBack} iconRight={ICONS.Calendar} textHeader="Dịch vụ" />
      {/* Header Sắp xếp */}
      {/* Search component */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15 * rate,
        paddingVertical: 10 * rate,
      }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 310 * rate,
          height: 40 * rate,
          borderRadius: 20 * rate,
          backgroundColor: COLORS.WHITE,
          paddingHorizontal: 10 * rate,
        }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={ICONS.Search} style={{ height: 20 * rate, width: 20 * rate, marginRight: 5 * rate }} />
            <TextInput
              style={{ width: 235 * rate, fontSize: 15 * rate }}
              onChangeText={(t) => { onChangeSearchText(t) }}
            />
          </View>
          <Image source={ICONS.QR} style={{ height: 20 * rate, width: 20 * rate }} />
        </View>
        <TouchableOpacity onPress={() => { setIsGrid(!isGrid) }}>
          <Image source={isGrid ? ICONS.ServiceList : ICONS.ServiceGrid} style={{ width: 20 * rate, height: 20 * rate }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {/* Search component */}
      {/* Fill and Sort component */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15 * rate,
        marginBottom: 10 * rate,
      }}
      >
        <TouchableOpacity
          onPress={() => { setIsModalFill(!isModalFill) }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.WHITE,
            borderWidth: 1,
            borderColor: COLORS.GRAY,
            padding: 10 * rate,
            borderRadius: 10 * rate,
          }}
        >
          <Image source={ICONS.Fill} style={{ height: 20 * rate, width: 20 * rate }} resizeMode="contain" />
          <Text style={{
            color: COLORS.ORANGE,
            fontSize: 14 * rate,
            marginLeft: 10 * rate,
          }}
          >
            Bộ lọc
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { setIsModalSort(!isModalSort) }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.WHITE,
            borderWidth: 1,
            borderColor: COLORS.GRAY,
            padding: 10 * rate,
            borderRadius: 10 * rate,
          }}
        >
          <Text style={{
            color: COLORS.ORANGE,
            fontSize: 14 * rate,
            paddingRight: 10 * rate,
          }}
          >
            Sắp Xếp
          </Text>
          <Image source={ICONS.Sort} style={{ height: 20 * rate, width: 20 * rate }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {/* Fill and Sort component */}
      {/* List product component */}
      {/* Grid product component */}
      <View style={{ marginHorizontal: 15 * rate, marginBottom: 165 * rate }}>
        <FlatList
          data={TEMP_DT}
          keyExtractor={(item) => item.id}
          key={colFlat}
          numColumns={colFlat}
          renderItem={isGrid ? renderGridItem : renderListItem}
          showsVerticalScrollIndicator={false}
          extraData={null}
        />
      </View>
      {/* List product component */}
      {/* Grid product component */}
    </View>
  )
}
export default ServiceScreen
