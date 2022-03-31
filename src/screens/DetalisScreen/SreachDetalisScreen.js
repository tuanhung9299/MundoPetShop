import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, StatusBar, FlatList, Text,
} from 'react-native'
import ICONS from '../../../assets/icons/index'
// import Results from '../../components/Store/ResultsComponent'
import { COLORS } from '../../../assets/styles'
import { TEMP_DATA_SEARCH } from '../../utils/index'
import IMAGES from '../../../assets/images/index'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const SearchResults = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const [masterDataSource, setMasterDataSource] = useState([])
  const [filteredDataSource, setFilteredDataSource] = useState([])

  useEffect(() => {
    setMasterDataSource(TEMP_DATA_SEARCH)
    setFilteredDataSource(TEMP_DATA_SEARCH)
  }, [])
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
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
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  // const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text
  //       style={styles.itemStyle}
  //       onPress={() => getItem(item)}>
  //       {item.id}
  //       {'.'}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     // Flat List Item Separator
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: '100%',
  //         backgroundColor: '#C8C8C8',
  //       }}
  //     />
  //   );
  // };

  // const getItem = (item) => {
  //   // Function for click on an item
  //   alert('Id : ' + item.id + ' Title : ' + item.title);
  // };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <View style={{ height: 80, backgroundColor: COLORS.ORANGE, marginBottom: 10 }}>
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
              style={{
                fontSize: 17, height: 40, width: 300 * rate, borderRadius: 30, backgroundColor: 'white',
              }}
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
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const ItemView = ({ item }) => {
  return (
    <View style={styles.container}>
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
          height: 220,
          backgroundColor: COLORS.WHITE,
        }}
        >
          <TouchableOpacity style={{ flex: 1 }}>
            <Image
              source={IMAGES.imgPromote}
              style={{
                width: 160 * rate, height: 150, borderRadius: 15,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 * rate, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: COLORS.ORANGE }}>{item.value}</Text>
            <TouchableOpacity style={{ paddingBottom: 5 * rate, paddingRight: 5 * rate }}>
              <Image source={ICONS.iconSetCal} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginBottom: 10 * rate,
  },
  list: {
    marginLeft: 10 * rate,
  },
  item: {
    fontSize: 17,
  },
})
