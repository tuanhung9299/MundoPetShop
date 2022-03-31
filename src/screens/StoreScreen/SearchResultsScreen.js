import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, Text,
  FlatList, TouchableOpacity, Image, TextInput, Dimensions, StatusBar,
} from 'react-native'
import ICONS from '../../../assets/icons/index'
import { COLORS, TextStyles } from '../../../assets/styles'
import { TEMP_DATA_STORE } from '../../utils/index'
import NumberFormat from '../../components/Store/NumberFormatComponent'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const SearchResults = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const [masterDataSource, setMasterDataSource] = useState([])
  const [filteredDataSource, setFilteredDataSource] = useState([])
  useEffect(() => {
    setMasterDataSource(TEMP_DATA_STORE)
    setFilteredDataSource(TEMP_DATA_STORE)
  }, [])
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        (item) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
        }
      )
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <View style={{ height: 80, backgroundColor: COLORS.ORANGE }}>
          <View style={{
            flexDirection: 'row',
            marginLeft: 15 * rate,
            marginRight: 15 * rate,
            alignItems: 'center',
            alignContent: 'center',
            marginTop: 30,
          }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ICONS.iconBack} style={{ marginRight: 10 * rate }} />
            </TouchableOpacity>
            <TextInput
              autoFocus
              style={[TextStyles.regular, {
                height: 43, width: 300 * rate, borderRadius: 30, backgroundColor: COLORS.WHITE,
              }]}
              returnKeyType="search"
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              placeholder="Tìm kiếm"
            />
            <Image
              source={ICONS.Search}
              style={{
                resizeMode: 'stretch',
                alignItems: 'center',
                marginLeft: 300 * rate,
                position: 'absolute',
              }}
            />
          </View>
        </View>
      </View>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={filteredDataSource}
        renderItem={({ item }) => <View style={styles.container}>
          <View style={styles.list}>
            <View style={{
              shadowColor: COLORS.BLACK,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.22,
              shadowRadius: 4,
              borderRadius: 15,
              elevation: 3,
              width: 160 * rate,
              height: 235,
              backgroundColor: COLORS.WHITE,
            }}
            >
              <TouchableOpacity style={{ flex: 1 }}>
                <Image
                  source={item.image}
                  style={{
                    width: 160 * rate, height: 160, borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
              <View>
                <Text numberOfLines={1} style={[TextStyles.semiBold, { width: 160 * rate }]}>{item.name}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5 * rate, justifyContent: 'space-between' }}>
                <NumberFormat price={item.value} />
                <TouchableOpacity style={{ paddingBottom: 5 * rate, paddingRight: 5 * rate }}>
                  <Image source={ICONS.iconSetCal} style={{ width: 30 * rate, height: 35 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  list: {
    marginHorizontal: 10 * rate,
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    fontSize: 14 * rate,
  },
})
