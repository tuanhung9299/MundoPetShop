import React, { useEffect, useState } from 'react'
import {
  View, Text, Dimensions, ScrollView, TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'
import ListFilter from '../AccordionFilter/ListComponent'
import { COLORS, TextStyles } from '../../../../assets/styles'
import { FILL_SERVICE } from '../../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const ModalFilterComponent = (props) => {
  const { isVisible, handleOff } = props
  return (
    <Modal
      // onModalHide
      isVisible={isVisible}
      animationIn="fadeInLeft"
      animationOut="fadeOutRight"
      backdropColor={COLORS.BLACK}
      onBackdropPress={() => { handleOff() }}
      backdropOpacity={0.5}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{
        backgroundColor: COLORS.WHITE,
        width: 345 * rate,
        maxHeight: 445 * rate,
        paddingBottom: 25 * rate,
        paddingTop: 15 * rate,
        borderRadius: 15 * rate,
      }}
      >
        <Text style={{
          ...TextStyles.optionBold,
          marginLeft: 15 * rate,
          color: COLORS.ORANGE,

        }}
        >
          Product Filter
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 * rate }}>
          {FILL_SERVICE.map((item) => <ListFilter list={item} key={item.id} />)}
        </ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 15 * rate }}>
          <TouchableOpacity

            style={{
              width: 125 * rate,
              height: 45 * rate,
              backgroundColor: COLORS.ORANGE,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10 * rate,
            }}
          >
            <Text style={{ ...TextStyles.bold, color: COLORS.WHITE }}>Lọc</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  )
}
export default ModalFilterComponent
