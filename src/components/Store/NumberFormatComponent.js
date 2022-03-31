import React from 'react'
import {
  View, Text,
} from 'react-native'
import NumberFormat from 'react-number-format'
import { COLORS, TextStyles } from '../../../assets/styles/index'

const Number = ({ price, style }) => {
  return (
    <NumberFormat
      value={price}
      style={style}
      displayType="text"
      thousandSeparator
      suffix="đ"
      renderText={(formattedValue) => (
        <View>
          <Text
            style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}
          >
            {formattedValue}
          </Text>
        </View>
      )}
    />
  )
}

export default Number
