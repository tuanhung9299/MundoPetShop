import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,

} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import InputSpinner from 'react-native-input-spinner'
import ICONS from '../../../assets/icons'

const dataDespricito = [
  {
    key: '1',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '2',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '3',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
  {
    key: '4',
    name: 'mai thanh nhan',
    despricitoL: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit',

  },
]
const dataImages = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
]
const Tab = createMaterialTopTabNavigator()

const { width, height } = Dimensions.get('window')
// const { height } = width * 0.6
const ratew = width / 360
const rateh = height / 640
const number = 0

const ServiceDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>

        <TouchableOpacity

          onPress={() => navigation.navigate('PurchaseScreen')}
        >

          <Image
            style={{
              width: 30 * ratew,
              height: 30 * rateh,
              resizeMode: 'contain',
            }}
            source={ICONS.iconBack}
          />

        </TouchableOpacity>

        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}> Chi tiet san pham</Text>

        <TouchableOpacity

          onPress={() => navigation.navigate('CartScreen')}
        >

          <Image
            style={{
              width: 30 * ratew,
              height: 30 * rateh,
              resizeMode: 'contain',
            }}
            source={ICONS.Carts}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Silder}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height: 255 * rateh, paddingVertical: 10 * rateh }}
        >
          {dataImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{
                width,
                height: 255 * rateh,
                resizeMode: 'center',
              }}
            />
          ))}
        </ScrollView>
        <View style={styles.iconsiler}>
          <Image
            style={{ width: 20 * ratew, height: 5 * rateh }}
            source={ICONS.Silder}
          />
          <Image
            style={{ marginLeft: 10 * ratew, width: 7 * ratew, height: 7 * rateh }}
            source={ICONS.icondot}
          />
          <Image
            style={{ marginLeft: 10 * ratew, width: 7 * ratew, height: 7 * rateh }}
            source={ICONS.icondot}
          />
        </View>
      </View>
      <Text
        style={{
          marginLeft: 10 * ratew,
          marginTop: 7 * rateh,
          width: '100%',
          height: 22 * rateh,
          marginRight: 80 * ratew,
          fontSize: 18,
          fontWeight: '600',

        }}
      >
        NUTRI PLAN thịt hộp cho mèo vị cá ngừ ...
      </Text>
      <Text
        style={{
          marginLeft: 10 * ratew,
          marginTop: 7 * rateh,
          width: '100%',
          height: 18 * rateh,
          color: '#B5B5B5',
          fontSize: 14,

        }}
      >
        NUTRI PLAN - Hàn Quốc
      </Text>
      <Text
        style={{
          marginLeft: 10 * ratew,
          marginTop: 7 * rateh,
          width: '100%',
          height: 18 * rateh,
          fontSize: 18,
          color: '#F47422',
        }}
      >
        250.000đ
      </Text>
      <View style={{
        marginTop: 10 * rateh, flex: 1, backgroundColor: 'green',
      }}
      >

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#F47422',
            inactiveTintColor: '#B5B5B5',
            pressColor: 'grey',
            tabStyle: { borderEndColor: 'orange' },
            indicatorStyle: {
              backgroundColor: 'orange',
            },
          }}
        >
          <Tab.Screen name="Dat Hang" component={OderScreen} />
          <Tab.Screen name="Mo Ta" component={desprictoe} />
          <Tab.Screen name="Binh Luan" component={CCCC} />
          {/* <Tab.Screen name="Đang hoàn thành" cocomponent={CCCC} /> */}
        </Tab.Navigator>

      </View>

    </View>
  )
}

const OderScreen = () => {
  // const [isSelected, setSelection] = useState(false)
  // const [shouldShow, setShouldShow] = useState(true)
  return (
    <View style={styles.odertainer}>
      <View style={styles.odertop}>

        <TouchableOpacity style={{
          width: 120 * ratew,
          height: 40 * rateh,

          backgroundColor: '#F0F0F0',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
        >
          <Text style={{ fontFamily: 'San Francisco', fontSize: 17, fontWeight: 'bold' }}>Goi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          borderRadius: 5, marginLeft: 15 * ratew, width: 120 * ratew, height: 40 * rateh, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <Text style={{ fontFamily: 'San Francisco', fontSize: 17, fontWeight: 'bold' }}>Thung</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.odercenter}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>So luong</Text>
        <InputSpinner

          max={20}
          min={1}
          step={1}
          width={180 * ratew}
          value={number}

          colorLeft="#F0F0F0"
          colorRight="#F47422"
          buttonStyle={{
            borderRadius: 3,
            width: 40 * ratew,
            height: 40 * rateh,
          }}
          inputStyle={{ fontSize: 17 }}
          textColor="#000000"
          style={{
            marginLeft: 70 * ratew, justifyContent: 'center', alignItems: 'center',
          }}
        />
      </View>
      <View style={styles.oderbottom}>
        <View style={{ width: '50%', height: '60%', paddingHorizontal: 15 * ratew }}>
          <TouchableOpacity style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D2D2D2',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,

          }}
          >
            <Text style={{
              fontFamily: 'San Francisco', fontSize: 17, fontWeight: 'bold', color: '#FFFFFF',
            }}
            >
              Them Vao Gio
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '50%', height: '60%', paddingRight: 15 * ratew }}>
          <TouchableOpacity style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D2D2D2',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,

          }}
          >
            <Text style={{
              fontFamily: 'San Francisco', fontSize: 17, fontWeight: 'bold', color: '#FFFFFF',
            }}
            >
              Mua Ngay
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const desprictoe = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{
        color: '#000000', paddingVertical: 10 * rateh, paddingHorizontal: 10 * ratew, fontSize: 15,
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  )
}

const renderItem = ({ item }) => (
  <View style={{
    width: '100%', height: 100, flexDirection: 'row', paddingHorizontal: 15 * ratew, paddingVertical: 15 * rateh,
  }}
  >
    <View style={{ flex: 2 }}>
      <Image style={{
        borderRadius: 30, backgroundColor: 'gray', width: 45 * ratew, height: 45 * rateh,
      }}
      />
    </View>
    <View style={{ flex: 8 }}>
      <View style={{ flex: 4, flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>

      </View>

      <View style={{ flex: 6 }}>
        <Text style={{}}>{item.despricitoL}</Text>
      </View>

    </View>
  </View>
)
// export default renderItem

const CCCC = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataDespricito}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    width: '100%',
    height: 70 * rateh,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F47422',
  },
  Silder: {
    width,
    height: 255,

  },
  iconsiler: {
    width: '100%',
    height: 20 * rateh,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  checkbox: {
    //     alignSelf: 'center',
  },
  odertainer:
  {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  odertop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15 * ratew,

  },

  odercenter: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10 * ratew,
  },
  oderbottom: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },

})
export default ServiceDetailScreen
