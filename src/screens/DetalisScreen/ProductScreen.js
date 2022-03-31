import React, { useEffect, useState } from 'react'
import {
  Text, View, StyleSheet, Image, Dimensions, FlatList, TextInput, TouchableOpacity,
} from 'react-native'
import CheckBox from 'react-native-check-box'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import HeaderBar from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import { dataProduct } from '../../utils'
// component View 
import { GridProductComponent, ListViewProductComponent } from '../../components'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const datacheck = [
  {
    id: '0',
    checked: false,
    values: 'Sản Phẩm Cho Chó',
    sub: [
      {
        id: '1',
        values: 'Chó nhỏ',
        checkedsub: true,
      },
      {
        id: '2',
        values: 'Chó lớn',
        checkedsub: false,
      },
    ],
    show: false,
  },
  {
    id: '1',
    checked: false,
    values: 'Sản Phẩm Cho Mèo',
    show: false,
    sub: [
      {
        id: '3',
        values: 'Mèo Nhỏ',
        checkedsub: false,
      },
      {
        id: '4',
        values: 'Mèo Lớn',
        checkedsub: false,
      },
    ],
  },
  {
    id: '2',
    checked: false,
    values: 'Sản Phẩm Cho Thú  Cưng Nhỏ',
    show: false,
    sub: [
      {
        id: '5',
        values: 'xuong gam 1',
        checkedsub: false,
      },
      {
        id: '6',
        values: 'Bánh Ag',
        checkedsub: false,
      },
    ],
  },
]

const ProductScreen = ({ navigation }) => {
  const [colFlat, setColFlat] = useState(2)
  const [modalSort, setModalSort] = useState(false)
  const [modalSort2, setModalSort2] = useState(false)
  // list view and gridview
  const [showgird, setshowgird] = useState(true)
  useEffect(() => {
    if (showgird) { setColFlat(2) } else setColFlat(1)
  }, [showgird])

  const [checkboxValue, setCheckboxValue] = useState([
    { label: 'Customer', value: 'customer', checked: false },
    { label: 'Merchant', value: 'merchant', checked: false },
    { label: 'None', value: 'none', checked: false },
  ])

  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index) {
        return {
          ...checkbox,
          checked: false,
        }
      }
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        }
        return item
      }
      return checkbox
    })
    setCheckboxValue(newValue)
  }
  const [datasort, setdatasort] = useState([dataProduct])
  const [sort, setsort] = useState(false)

  const sortprice = (sort) => {
    const data = dataProduct
    if (!sort) { data.sort((a, b) => { return b.price - a.price }) } else { data.sort((a, b) => { return a.price - b.price }) }

    setdatasort(data)
  }
  const sorttext = (sort) => {
    const data = dataProduct
    data.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })
    if (!sort) {
      datapropductnew.reverse()
    }

    setdatasort(data)
  }

  const [check, setcheck] = useState(datacheck)
  const [checked, setChecked] = useState([])
  const [show, setshow] = useState([])
  const [checkedsub, setChecksub] = useState([])
  const [activeSections, setActiveSections] = useState([])
  const [checked2, setChecked2] = useState([])
  const [datapropductnew, setdatapropductnew] = useState(dataProduct)

  const renderHeader = (section) => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 15 * ratew, paddingVertical: 4 }}>
        <CheckBox
          isChecked={checked.includes(section.id)}
          onClick={() => {
            const newIds = [...checked]
            const index = newIds.indexOf(section.id)
            if (index > -1) {
              newIds.splice(index, 1)
            } else {
              newIds.push(section.id)
            }
            setChecked(newIds)
            console.log(checked)
          }}
        />

        <Text style={[TextStyles.semiBold, { marginLeft: 10 * ratew }]}>{section.values}</Text>
        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 10,
        }}
        >
          <Image
            source={activeSections.length <= 0 ? ICONS.iconArrowDown : ICONS.iconArrowUp}
          />
        </View>

      </View>
    )
  }
  const renderContent = (section) => {
    return (

      section.sub.map((item, index) => {
        return (
          <View key={index} style={{ flexDirection: 'row', marginHorizontal: 40 }}>
            {/* <CheckBox></CheckBox> */}
            <CheckBox
              isChecked={checked.includes(item.id)}
              onClick={() => {
                const newIds = [...checked]
                const index = newIds.indexOf(item.id)
                if (index > -1) {
                  newIds.splice(index, 1)
                } else {
                  newIds.push(item.id)
                }
                setChecked(newIds)
                console.log(checked)
              }}
            />
            <Text style={[TextStyles.semiBold, { marginLeft: 6 * ratew }]}>{item.values}</Text>

          </View>

        )
      })

    )
  }
  const updateSections = (activeSections) => {
    setActiveSections(activeSections)
  }

  const filter = (text) => {
    const newData = dataProduct.filter(
      (item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      }
    )
    //  const data=dataProduct.filter(e => e.name.toLowerCase() === query.toLowerCase() );
    setdatapropductnew(newData)
  }
  return (

    <View style={styles.Container}>
      <Modal
        isVisible={modalSort}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackButtonPress={() => { setModalSort(!modalSort) }}
        onBackdropPress={() => { setModalSort(!modalSort) }}
        backdropColor={COLORS.BLACK}
        backdropOpacity={0.5}
        style={{ flex: 1 }}
      >
        <View style={{
          position: 'absolute',
          height: 185 * rateh,
          width: 185 * ratew,
          backgroundColor: COLORS.WHITE,
          borderRadius: 8,
          top: 132 * rateh,
          right: -20 * ratew,
          alignItems: 'center',
        }}
        >
          <Text style={{ ...TextStyles.optionBold, marginTop: 14 * rateh }}>Sort</Text>

          <View>
            <TouchableOpacity onPress={() => sortprice(true)} onPressOut={() => { setModalSort(!modalSort) }}>
              <Text style={{ ...TextStyles.optionNormal, marginTop: 6 * rateh }}>Giá: từ thấp đến cao</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortprice(false)} onPressOut={() => { setModalSort(!modalSort) }}>
              <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rateh }}>Giá: từ cao đến thấp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { sorttext(true) }} onPressOut={() => { setModalSort(!modalSort) }}>
              <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rateh }}>Tên: A-> Z</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { sorttext(false) }} onPressOut={() => { setModalSort(!modalSort) }}>
              <Text style={{ ...TextStyles.optionNormal, marginTop: 10 * rateh }}>Tên: Z-> A</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal

        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={modalSort2}
        onBackButtonPress={() => { setModalSort2(!modalSort2) }}
        onBackdropPress={() => { setModalSort2(!modalSort2) }}
        backdropColor={COLORS.BLACK}
        backdropOpacity={0.5}
        style={{ flex: 1 }}

      >
        <View style={{
          position: 'absolute',
          height: 420 * rateh,
          width: 290 * ratew,
          backgroundColor: COLORS.WHITE,
          borderRadius: 8,
          top: 132 * rateh,
          left: -10,
        }}
        >
          <Text style={[TextStyles.regular, {
            color: COLORS.ORANGE, marginHorizontal: 30, marginVertical: 15,
          }]}
          >
            Bộ lọc
          </Text>
          {checkboxValue.map((checkbox, i) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }} key={i}>
              <CheckBox
                style={{ borderWidth: 1 }}
                value={checkbox.checked}
                onClick={(value) => checkboxHandler(value, i)}
              />
              <Text>{checkbox.label}</Text>
            </View>
          ))}

        </View>

      </Modal>

      <HeaderBar navigation={navigation} iconLeft={ICONS.iconBack} iconRight={ICONS.Calendar} textHeader="Sản phẩm cho chó" linkRight="DetailService" />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('SreachDetalisScreen')}>

          <View style={styles.sreach}>
            <Image source={ICONS.Search} style={{ resizeMode: 'contain' }} />
            <TouchableOpacity style={{ width: '80%', height: '100%' }} onPress={() => navigation.navigate('SreachDetalisScreen')}>
              <TextInput style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <Image source={ICONS.iconGroup} style={{ resizeMode: 'contain' }} />

          </View>
        </TouchableOpacity>
        <View style={styles.fiuter}>

          <TouchableOpacity onPress={() => { setshowgird(!showgird) }} style={{ width: '100%', height: '100%' }}>

            <Image source={showgird ? ICONS.iconFrame : ICONS.ServiceGrid} style={{ width: '130%', height: '110%', resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.topbottom}>
        <TouchableOpacity onPress={() => { setModalSort2(!modalSort2) }}>
          <View style={{
            width: 85 * ratew, height: 40 * rateh, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10, backgroundColor: COLORS.WHITE,
          }}
          >

            <Image source={ICONS.Fill} style={{ width: 20 * ratew, height: 20 * rateh, resizeMode: 'contain' }} />
            <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>Bộ lọc</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModalSort(!modalSort) }}>
          <View style={{
            width: 85 * ratew, height: 40 * rateh, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10, backgroundColor: COLORS.WHITE,
          }}
          >
            <Text style={[TextStyles.semiBold, { color: COLORS.ORANGE }]}>Sắp xếp</Text>
            <Image source={ICONS.Sort} style={{ width: 20 * ratew, height: 20 * rateh, resizeMode: 'contain' }} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <FlatList
          data={datapropductnew}
          key={colFlat}
          numColumns={colFlat}
          renderItem={({ item }) => (showgird
            ? <GridProductComponent list={item} navigation={navigation} link="DetalisScreen" />
            : <ListViewProductComponent list={item} navigation={navigation} link="DetalisScreen" />)}
          showsVerticalScrollIndicator={false}

          keyExtractor={(item) => item.key}
        />
      </View>

    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(ProductScreen)

const styles = StyleSheet.create({

  Container: {
    flex: 1,

  },
  top: {
    marginTop: 10 * rateh,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,

  },
  sreach: {
    borderRadius: 30,
    flex: 9,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13 * ratew,

  },
  fiuter: {
    flex: 1,
    marginLeft: 15 * ratew,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbottom: {
    marginTop: 10 * rateh,
    height: 45 * rateh,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15 * ratew,
    justifyContent: 'space-between',
  },

})
