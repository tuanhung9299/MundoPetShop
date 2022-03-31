import React, { useEffect, useState, useRef } from 'react'
import {
  View, Text, Dimensions, Animated, Easing, TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import ICONS from '../../../../assets/icons'
import { TextStyles } from '../../../../assets/styles'
import ListItemComponent, { LIST_ITEM_HEIGHT } from './ListItemComponent'

const { width } = Dimensions.get('window')
const rate = width / 375
const ListComponent = (props) => {
  const { list } = props
  const [isTrue, setIsTrue] = useState(true)
  const heightA = useRef(new Animated.Value(0)).current
  const rotateA = useRef(new Animated.Value(0)).current

  const drop = () => {
    Animated.parallel([
      Animated.timing(heightA,
        {
          duration: 300,
          easing: Easing.ease,
          toValue: list.items.length * LIST_ITEM_HEIGHT * rate,
          useNativeDriver: false,

        }),
      Animated.timing(rotateA,
        {
          duration: 300,
          easing: Easing.ease,
          toValue: 1,
          useNativeDriver: false,

        }),
    ]).start()
  }
  const upp = () => {
    Animated.parallel([
      Animated.timing(heightA,
        {
          duration: 300,
          easing: Easing.ease,
          toValue: 0 * rate,
          useNativeDriver: false,

        }),
      Animated.timing(rotateA,
        {
          duration: 300,
          easing: Easing.ease,
          toValue: 0,
          useNativeDriver: false,

        }),
    ]).start()
  }
  const rotate = rotateA.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })
  useEffect(() => {
    if (isTrue) {
      drop()
    } else { upp() }
  })
  return (
    <View>

      <TouchableOpacity
        onPress={() => {
          setIsTrue(!isTrue)
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 5 * rate,
          marginTop: 8 * rate,
        }}
      >
        <Text style={{ ...TextStyles.bold }}>{list.name}</Text>
        <Animated.View
          style={{ transform: [{ rotate }] }}
        >
          <FastImage
            source={ICONS.Dog}
            style={{ height: 13 * rate, width: 18 * rate }}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={{
        marginLeft: 5 * rate,
        height: heightA,
        width,
        overflow: 'hidden',
      }}
      >
        {list.items.map((item, key) => <ListItemComponent item={item} isChecked={false} key={item.namefilter} />)}

      </Animated.View>
    </View>
  )
}
export default ListComponent
