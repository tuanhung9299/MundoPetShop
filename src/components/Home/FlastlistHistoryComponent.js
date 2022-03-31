// /* eslint-disable new-cap */
// import React from 'react'
// import {
//   View,
//   Text,
//   Dimensions,
// } from 'react-native'
// import moment from 'moment/min/moment-with-locales'
// import newmoment from 'moment'
// import { COLORS } from '../../../assets/styles'
// import { DATARECEIVED } from '../../utils'
// import { isMoment } from 'moment'

// const { width, height } = Dimensions.get('window')
// const ratew = width / 360
// const rateh = height / 640
// /// /////////////////////
// const arrdate = []
// for (let i = 0; i < DATARECEIVED.length; i++) {
//   arrdate.push(DATARECEIVED[i].date)
// }
// const arrSet = [...new Set(arrdate)]

// for (let i = 0; i < DATARECEIVED.length; i++) {
//   for (let j = 0; j < arrdate.length; j++) {
//     if (DATARECEIVED[i].date === arrSet[j]) {
//       console.log(j)
//     }
//   }
// }
// function date (arr) {
//     for (const key in arr) {

//     }
// }
// const renderPoint = ({ item }) => (
//   <View style={{ flex: 1 }}>
//     <View style={{ marginLeft: 10 * ratew, marginRight: 210 * ratew, paddingTop: 10 * rateh }}>
//       <Text style={{ color: COLORS.DARK_GRAY }}>{item.date}</Text>
//     </View>
//     <View style={{
//       width: 360 * ratew,
//       height: 60 * rateh,
//     }}
//     >
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 11 * rateh,
//         marginTop: 10 * rateh,
//         borderColor: COLORS.DARK_GRAY,
//         borderBottomWidth: 1,
//         marginLeft: 14 * ratew,
//         marginRight: 11 * ratew,
//       }}
//       >
//         <View style={{}}>
//           <Text style={{ fontSize: 14, fontWeight: '400' }}>{item.title}</Text>
//           <Text style={{ color: COLORS.DARK_GRAY, fontSize: 12, paddingTop: 4 }}>{item.time}</Text>
//         </View>
//         <View>
//           <Text style={{
//             color: COLORS.ORANGE,
//             fontSize: 14,
//             fontWeight: 'bold',
//           }}
//           >
//             {item.point}
//           </Text>
//         </View>
//       </View>
//     </View>
//   </View>
// )
// export default renderPoint
