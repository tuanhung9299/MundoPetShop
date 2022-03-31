import React, { useEffect, useState } from 'react'
import {
  Text, View, StyleSheet, Image, Dimensions, FlatList, TextInput, TouchableOpacity,
} from 'react-native'
import CheckBox from 'react-native-check-box'
import Modal from 'react-native-modal'
import Accordion from 'react-native-collapsible/Accordion'
import { connect } from 'react-redux'
import HeaderBar from '../../components/HeaderBar'
import ICONS from '../../../assets/icons'
import { COLORS, TextStyles } from '../../../assets/styles'
import { dataProduct } from '../../utils'
//
// component View 
import { GridProductComponent, ListViewProductComponent } from '../../components'

const { width, height } = Dimensions.get('window')
const ratew = width / 360
const rateh = height / 640

const datacheck = [
  {
    id: '0',
    checked: false,
    lablel: 'Sản phẩm cho chó',
    values: 'Chó',
    sub: [
      {
        id: '1',
        label: 'Chó nhỏ',
        values: 'Nhỏ',
        checkedsub: false,
      },
      {
        id: '2',
        label: 'Chó lớn',
        values: 'Lớn',
        checkedsub: false,
      },
    ],
  },
  {
    id: '1',
    checked: false,
    lablel: 'Sản phẩm cho mèo',
    values: 'Mèo',
    sub: [
      {
        id: '3',
        label: 'Mèo Nhỏ',
        values: 'Nhỏ',
        checkedsub: false,
      },
      {
        id: '4',
        label: 'Mèo Lớn',
        values: 'Lớn',
        checkedsub: false,
      },
    ],
  },
  {
    id: '2',
    checked: false,
    lablel: 'Sản phẩm cho thú  cưng nhỏ',
    values: 'Thú cưng nhỏ',
    sub: [
      {
        id: '5',
        label: 'Thú cưng nhỏ vừa',
        values: 'Nhỏ',
        checkedsub: false,
      },
      {
        id: '6',
        label: 'Thú cưng nhỏ lớn',
        values: 'Lớn',
        checkedsub: false,
      },
    ],
  },
  {
    id: '3',
    checked: false,
    lablel: 'Sản phẩm cho cá',
    values: 'Cá',
    sub: [
      {
        id: '7',
        label: 'Cá Nhỏ',
        values: 'Nhỏ',
        checkedsub: false,
      },
      {
        id: '8',
        label: 'Cá Lớn',
        values: 'Lớn',
        checkedsub: false,
      },
    ],
  },
  {

    id: '4',
    checked: false,
    lablel: 'Sản phẩm cho chim',
    values: 'Chim',
    sub: [
      {
        id: '9',
        label: 'Chim Nhỏ',
        values: 'Nhỏ',
        checkedsub: false,
      },
      {
        id: '10',
        label: 'Chim lớn',
        values: 'Lớn',
        checkedsub: false,
      },
    ],
  },
]

const ProductScreen2 = ({ navigation }) => {
  const [colFlat, setColFlat] = useState(2)
  const [modalSort, setModalSort] = useState(false)
  const [modalSort2, setModalSort2] = useState(false)
  const [sreachFilter, setSreachFilter] = useState([])
  const [sreachFilterSub, setSreachFilterSub] = useState([])

  // list view and gridview
  const [showgird, setshowgird] = useState(true)
  useEffect(() => {
    if (showgird) { setColFlat(2) } else setColFlat(1)
  }, [showgird])

  const [sort, setsort] = useState(false)

  const sortprice = (sort) => {
    // const data=dataProduct
    if (!sort) { datapropductnew.sort((a, b) => { return b.price - a.price }) } else { datapropductnew.sort((a, b) => { return a.price - b.price }) }
  }
  const sorttext = (sort) => {
    // const data=dataProduct
    datapropductnew.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })
    if (!sort) {
      datapropductnew.reverse()
    }
  }

  const [check, setcheck] = useState(datacheck)
  const [checked, setChecked] = useState([])
  const [show, setshow] = useState([])
  const [checkedsub, setChecksub] = useState([])
  const [activeSections, setActiveSections] = useState([])
  const [checked2, setChecked2] = useState([])
  const [datapropductnew, setdatapropductnew] = useState(dataProduct)
  const [allcheck, setAllCheck] = useState([])

  const renderHeader = (section) => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 15 * ratew, paddingVertical: 4 }}>
        <CheckBox
          isChecked={section.checked}
          onClick={() => {
            // const newIds = [...checked]
            // const index = newIds.indexOf(section.id)
            // if (index > -1) {
            //   newIds.splice(index, 1)
            // } else {
            //   newIds.push(section.id)
            // }
            // setChecked(newIds)
            // // setAllCheck(true)
            // const newdata=[...check]
            const newdata = check.map((item) => {
              if (item.id === section.id) {
                const newdatas = {
                  ...item,
                  checked: !item.checked,
                }
                const data = sreachFilter
                if (item.checked === false) {
                  data.push(item.values)

                  setSreachFilter(data)
                } else {
                  const index2 = data.indexOf(item.values)
                  data.splice(index2, 1)

                  setSreachFilter(data)
                }
                return newdatas
              }

              return item
            })

            setcheck(newdata)
          }}
        />

        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 17 }}>{section.lablel}</Text>
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

            <CheckBox
              isChecked={checked2.includes(item.id)}
              onClick={() => {
                const newIds = [...checked2]
                const index = newIds.indexOf(item.id)
                if (index > -1) {
                  newIds.splice(index, 1)
                } else {
                  newIds.push(item.id)
                }
                setChecked2(newIds)

                if (checked2.includes(item.id) === false) {
                  const data = sreachFilterSub

                  data.push(item.values)
                  console.log(sreachFilterSub)
                  setSreachFilterSub(data)
                }
                if (checked2.includes(item.id) === true) {
                  const data = sreachFilterSub
                  const index2 = data.indexOf(item.values)

                  data.splice(index2, 1)
                  console.log(sreachFilterSub)
                  setSreachFilterSub(data)
                }
              }}
            />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>{item.label}</Text>

          </View>
        )
      })

    )
  }

  const filter1 = (text) => {
    const filteredUsers = dataProduct.filter((item) => {
      const textData = sreachFilter
      const textData2 = sreachFilterSub

      if (textData.length > 0) {
        if (textData2.length > 0) {
          return textData2.find((item2) => item.name.toLowerCase().indexOf(item2.toLowerCase()) > -1) && textData.find((item2) => item.name.toLowerCase().indexOf(item2.toLowerCase()) > -1)
        }
        return textData.find((item2) => item.name.toLowerCase().indexOf(item2.toLowerCase()) > -1)
      }
    })

    setdatapropductnew(filteredUsers)

    for (let index = 0; index < check.length; index++) {
      if (check[index].checked === true) {
        setdatapropductnew(filteredUsers)
        return
      }
    }
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
          <Text style={{
            fontSize: 22, fontWeight: 'bold', color: COLORS.ORANGE, marginHorizontal: 30, marginVertical: 15,
          }}
          >
            Bộ lọc
          </Text>
          <View>

            <Accordion
              sections={check}
              activeSections={activeSections}
              // renderSectionTitle={renderSectionTitle}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={updateSections}
              underlayColor="false"
            />

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

              <TouchableOpacity
                onPress={() => {
                  filter1(sreachFilter, sreachFilterSub)
                }}
                onPressOut={() => { setModalSort2(!modalSort2) }}
                style={{
                  width: 125 * ratew, height: 50 * rateh, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.ORANGE, borderRadius: 10,
                }}
              >

                <Text style={{ color: COLORS.WHITE, fontSize: 18 }}>Lọc</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>

      <HeaderBar navigation={navigation} iconLeft={ICONS.iconBack} iconRight={ICONS.Calendar} textHeader="Sản phẩm" linkRight="DetailService" />

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
            width: 100 * ratew, height: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10, backgroundColor: COLORS.WHITE,
          }}
          >

            <Image source={ICONS.Fill} style={{ width: 25 * ratew, height: 25 * rateh, resizeMode: 'contain' }} />
            <Text style={{ color: COLORS.ORANGE, fontSize: 20, fontWeight: '500' }}>Bộ lọc</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModalSort(!modalSort) }}>
          <View style={{
            width: 110 * ratew, height: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10, backgroundColor: COLORS.WHITE,
          }}
          >
            <Text style={{ color: COLORS.ORANGE, fontSize: 20 * ratew, fontWeight: '500' }}>Sắp xếp</Text>
            <Image source={ICONS.Sort} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{
        fontSize: 18, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 10,
      }}
      >
        Sản phẩm nổi bật
      </Text>

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
    addItemToCart: (product) => dispatch({ type: 'ADD_To_Cart', payload: product }),
  }
}

export default connect(null, mapDispatchToProps)(ProductScreen2)

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
