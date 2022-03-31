import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')
const screenScale = width / 360
const ratew = width / 360
const rateh = height / 640

export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  PURPLE: '#951B80',
  GRAY: '#f2f2f2',
  DARK_GRAY: '#B5B5B5',
  DARK_WHITE: '#F5F5F5',
  BLUE: '#60C6FF',
  PRIMARY_RED: '#FB7181',
  PRIMARY_GREEN: '#53D1B6',
  ORANGE: '#F47422',
  DARK_GRAY2: '#CECECE',
  LIGHT_GRAY: '#E2E2E2',
  DARK_GRAY3: '#D2D2D2',
  Color_Status: {
    Wait: '#F2CC8E',
    completing: '#FFA34F',
    completed: '#60C6FF',
    Cancel: '#F05360',
  },
  RED: '#FF0000',
}
export const Fonts = {
  sans: {
    regular: {
      fontFamily: 'OpenSans-Regular',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
    },
    semiBold: {
      fontFamily: 'OpenSans-SemiBold',

    },
    italic: {
      fontFamily: 'OpenSans-Italic',
    },
  },
  roboto: {
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
    },
    italic: {
      fontFamily: 'Roboto-Italic',
    },
  },
}

export const TextStyles = {
  regular: {
    ...Fonts.sans.regular,
    fontSize: 14,
  },
  bold: {
    ...Fonts.sans.bold,
    fontSize: 14,
  },
  large: {
    ...Fonts.sans.regular,
    fontSize: 20,
  },
  largeBold: {
    ...Fonts.sans.bold,
    fontSize: 20,
  },
  optionNormal: {
    ...Fonts.regular,
    fontSize: 18,
  },
  optionBold: {
    ...Fonts.sans.bold,
    fontSize: 16,
  },
  semiBold: {
    ...Fonts.sans.semiBold,
    fontSize: 14,

  },
  medium: {
    ...Fonts.medium,
    fontSize: 14,
  },
  min: {
    ...Fonts.regular,
    fontSize: 12,
  },
  roboto: {
    ...Fonts.roboto.regular,
    fontSize: 14,
  },
}
export const MessageStyles = {
  error: {
    style: { backgroundColor: COLORS.PRIMARY_RED, alignItems: 'center' },
    duration: 2000,
    titleStyle: TextStyles.bold,
  },
  success: {
    style: { backgroundColor: COLORS.PRIMARY_GREEN, alignItems: 'center' },
    duration: 2000,
    titleStyle: TextStyles.bold,

  },
}

export const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    marginTop: 8 * screenScale,

  },
  viewContainer: {
    marginTop: 10 * screenScale,
    marginBottom: 20 * screenScale,
    marginHorizontal: 15 * screenScale,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10 * screenScale,
  },
  viewInsideViewContainer: {
    marginHorizontal: 15 * screenScale,
    marginVertical: 16 * screenScale,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  titleInputPhoneNumber: {
    fontSize: 12 * screenScale,
    ...Fonts.regular,
    color: COLORS.BLACK,
  },
  textInput: {
    color: COLORS.BLACK,
    fontSize: 12 * screenScale,
    ...Fonts.semiBold,
  },
  textPassword: {
    fontSize: 12 * screenScale,
    color: COLORS.BLACK,
    ...Fonts.regular,
  },

  titleInputPassword: {
    marginHorizontal: 15 * screenScale,
    marginBottom: 20 * screenScale,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  viewCoverTouchable: {
    marginTop: 80 * screenScale,
  },
  viewInsideTouchable: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: 10 * screenScale,
    marginHorizontal: 75 * screenScale,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50 * screenScale,
  },
  textTouchableSignIn: {
    color: COLORS.WHITE,
    ...Fonts.semiBold,
    fontSize: 14 * screenScale,
  },
  touchableGoBack: {
    marginLeft: 15 * screenScale,
  },
  imageBack: {
    width: 24 * screenScale,
    height: 24 * screenScale,
  },
  viewTouchableHeader: {
    flex: 1, alignItems: 'center', marginRight: (15 + 18) * screenScale,
  },
  viewCoverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },

})
export const stylesEmployeeDetailScreen = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: COLORS.GRAY,
  },
  separate: {
    width,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.BLACK,
  },
  viewCoverImageAndName: {
    alignItems: 'center',
    marginBottom: 10 * screenScale,
    paddingTop: 10 * screenScale,
    paddingBottom: 10 * screenScale,
    backgroundColor: COLORS.WHITE,
  },
  imageItem: {
    width: 24 * screenScale,
    height: 24 * screenScale,
    marginRight: 20 * screenScale,
    marginLeft: 15 * screenScale,
  },
  textItem: { fontSize: 15 * screenScale },

  styleFlatList: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 15 * screenScale,
    paddingHorizontal: 9 * screenScale,
    borderRadius: 15 * screenScale,
    marginBottom: 15 * screenScale,
    marginTop: 15 * screenScale,
  },
  viewCoverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12 * screenScale,
  },
})
export const stylesUserScreen = StyleSheet.create({

  separate: {
    width,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.DARK_GRAY,
  },
  viewCoverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12 * screenScale,
  },
  imageItem: {
    width: 24 * screenScale,
    height: 24 * screenScale,
    marginRight: 20 * screenScale,
    marginLeft: 15 * screenScale,
  },

  textItem: { fontSize: 15 * screenScale },
  container: {
    flex: 1, backgroundColor: COLORS.GRAY,
  },
  viewCoverImageAndName: {
    alignItems: 'center',
    marginBottom: 10 * screenScale,
    paddingTop: 10 * screenScale,
    paddingBottom: 10 * screenScale,
    backgroundColor: COLORS.WHITE,
  },
  imageAvatar: {
    width: 82 * screenScale,
    height: 82 * screenScale,
    borderRadius: 41 * screenScale,

  },
  textName: {
    marginTop: 15,
    ...Fonts.semiBold,
    fontSize: 18,

  },
  styleFlatList: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 15 * screenScale,
    paddingHorizontal: 9 * screenScale,
    borderRadius: 15 * screenScale,
    marginBottom: 15 * screenScale,
  },
})

export const stylesChangePassword = StyleSheet.create({
  viewContainer: {
    marginTop: 10 * screenScale,
    marginBottom: 20 * screenScale,
    marginHorizontal: 15 * screenScale,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10 * screenScale,
  },
  viewInsideViewContainer: {
    marginHorizontal: 15 * screenScale,
    marginVertical: 16 * screenScale,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  titleInputPhoneNumber: {
    fontSize: 12 * screenScale,
    ...Fonts.regular,
    color: COLORS.BLACK,
  },
  textInput: {
    color: COLORS.BLACK,
    fontSize: 12 * screenScale,
    ...Fonts.semiBold,
  },
  textPassword: {
    fontSize: 12 * screenScale,
    color: COLORS.BLACK,
    ...Fonts.regular,
  },

  titleInputPassword: {
    marginHorizontal: 15 * screenScale,
    marginBottom: 20 * screenScale,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },

})
export const stylesFeeRequirement = StyleSheet.create({

  styleFlatList: {
    paddingHorizontal: 15 * screenScale,
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 15 * screenScale,
  },
})
export const stylesAddCustomer = StyleSheet.create({

  styleFlatList: {
    marginHorizontal: 15 * screenScale,
    marginTop: 15 * screenScale,
    paddingHorizontal: 15 * screenScale,
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 15 * screenScale,
  },
  viewBackGroundWhiteAvatar: {
    backgroundColor: COLORS.WHITE,
  },
  viewCoverAvatar: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 82 * screenScale,
    height: 82 * screenScale,
  },
  imageAvatar: {
    width: 82 * screenScale,
    height: 82 * screenScale,
    borderRadius: 41 * screenScale,
  },
  viewIconEdit: {
    width: 24 * screenScale,
    height: 24 * screenScale,
    backgroundColor: COLORS.GRAY,
    borderRadius: 12,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,

  },
  imageIconEdit: {
    width: 12 * screenScale,
    height: 12 * screenScale,
    tintColor: COLORS.BLACK,
  },

})

export const stylesProfileScreen = StyleSheet.create({

  container: {
    flex: 1,
  },
  separate: {
    width,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.DARK_GRAY,
  },
  itemCover: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15 * screenScale,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 14 * screenScale,
    color: COLORS.BLACK,
  },
  textValue: {
    fontSize: 14 * screenScale,
    color: COLORS.BLACK,
    ...Fonts.semiBold,
  },

  imageBack: {
    width: 18 * screenScale,
    height: 18 * screenScale,
    marginLeft: 15 * screenScale,

  },

  viewBackGroundWhiteAvatar: {
    backgroundColor: COLORS.WHITE,
  },
  viewCoverAvatar: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 82 * screenScale,
    height: 82 * screenScale,

  },
  imageAvatar: {
    width: 82 * screenScale,
    height: 82 * screenScale,
    borderRadius: 41 * screenScale,

  },
  viewIconEdit: {
    width: 24 * screenScale,
    height: 24 * screenScale,
    backgroundColor: COLORS.GRAY,
    borderRadius: 12,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,

  },
  imageIconEdit: {
    width: 12 * screenScale,
    height: 12 * screenScale,
    tintColor: COLORS.BLACK,
  },
  styleFlatList: {
    marginHorizontal: 15 * screenScale,
    marginTop: 15 * screenScale,
    paddingHorizontal: 9 * screenScale,
    backgroundColor: COLORS.WHITE,
    borderRadius: 15 * screenScale,
  },
})
