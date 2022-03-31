import React from 'react'
import {
  View, TouchableOpacity, Image, TextInput, Dimensions, StatusBar,
} from 'react-native'
import ICONS from '../../../assets/icons/index'

import { COLORS } from '../../../assets/styles'

const windowWidth = Dimensions.get('window').width
const rate = windowWidth / 360

const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ height: 80, backgroundColor: COLORS.ORANGE }}>
        <View style={{
          flexDirection: 'row', marginLeft: 15 * rate, marginRight: 15 * rate, alignItems: 'center', alignContent: 'center', marginTop: 30,
        }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ICONS.iconBack} style={{ marginRight: 10 * rate }} />
          </TouchableOpacity>
          <TextInput
            style={{
              fontSize: 17, height: 40, width: 300 * rate, borderRadius: 30, backgroundColor: 'white',
            }}
            placeholder="Tìm kiếm"
            onFocus={() => navigation.navigate('SearchResultsScreen')}
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

  )
}

export default Search
