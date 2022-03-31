import React, { useEffect, useState } from 'react'
import {
  View, Text, Dimensions, TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'
import { COLORS, TextStyles } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ModalSortComponent = (props) => {
  const {
    isVisible, handleOff, sortName, sortPrice,
  } = props
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeInRight"
      animationOut="fadeOutLeft"
      onBackButtonPress={() => { handleOff() }}
      onBackdropPress={() => { handleOff() }}
      backdropColor={COLORS.BLACK}
      backdropOpacity={0.5}
      style={{ flex: 1 }}
    >
      <View style={{
        position: 'absolute',
        height: 185 * rate,
        width: 185 * rate,
        backgroundColor: COLORS.WHITE,
        borderRadius: 15 * rate,
        top: 95 * rate,
        left: 157 * rate,
        alignItems: 'center',
      }}
      >
        <Text style={{ ...TextStyles.optionBold, marginTop: 14 * rate }}>Sort</Text>

        <View>
          <TouchableOpacity onPress={() => { sortPrice(true) }}>
            <Text style={{ ...TextStyles.optionNormal, marginTop: 6 * rate }}>Giá: từ thấp đến cao</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { sortPrice(false) }}>
            <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rate }}>Giá: từ cao đến thấp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { sortName(true) }}>
            <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rate }}>Tên: A - Z</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { sortName(false) }}>
            <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rate }}>Tên: Z - A</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
export default ModalSortComponent
