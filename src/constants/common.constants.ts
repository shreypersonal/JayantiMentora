import { Dimensions, Platform } from 'react-native'

export enum ResizeMode {
  Contain = 'contain',
  Cover = 'cover',
  None = 'none',
  Stretch = 'stretch',
}

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')
export const IS_IOS = Platform.OS === 'ios'
