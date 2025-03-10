import { Dimensions, Platform, StatusBar } from 'react-native'

import { IS_IOS } from '../constants/common.constants'

const STATUSBAR_DEFAULT_HEIGHT = 20
const STATUSBAR_X_HEIGHT = 44
const STATUSBAR_IP12_HEIGHT = 47
const STATUSBAR_IP12MAX_HEIGHT = 47
const STATUSBAR_IP14PRO_HEIGHT = 49

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const IP12_WIDTH = 390
const IP12_HEIGHT = 844

const IP12MAX_WIDTH = 428
const IP12MAX_HEIGHT = 926

const IP14PRO_WIDTH = 393
const IP14PRO_HEIGHT = 852

const IP14PROMAX_WIDTH = 430
const IP14PROMAX_HEIGHT = 932

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT
let isIPhoneX = false
let isIPhoneXMax = false
let isIPhone12 = false
let isIPhone12Max = false
let isIPhoneWithMonobrow = false
let isIPhoneWithDynamicIsland = false

if (IS_IOS && !Platform.isTV) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    isIPhoneWithMonobrow = true
    isIPhoneX = true
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    isIPhoneWithMonobrow = true
    isIPhoneXMax = true
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    isIPhoneWithMonobrow = true
    isIPhone12 = true
    statusBarHeight = STATUSBAR_IP12_HEIGHT
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    isIPhoneWithMonobrow = true
    isIPhone12Max = true
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT
  } else if (
    (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) ||
    (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT)
  ) {
    isIPhoneWithDynamicIsland = true
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT
  }
}

export const IS_IPHONE_X = () => isIPhoneX
export const IS_IPHONE_X_MAX = () => isIPhoneXMax
export const IS_IPHONE_12 = () => isIPhone12
export const IS_IPHONE_12_MAX = () => isIPhone12Max
export const IS_IPHONE_WITH_MONOBROW = () => isIPhoneWithMonobrow
export const IS_IPHONE_WITH_DYNAMIC_ISLAND = () => isIPhoneWithDynamicIsland

export function getStatusBarHeight(skipAndroid = false) {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  })
}
