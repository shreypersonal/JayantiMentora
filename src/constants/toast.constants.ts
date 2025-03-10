import { colors } from '@theme'
import { getStatusBarHeight } from '@utils'

import { IS_IOS } from './common.constants'

export enum ToastPreset {
  Error = 'error',
  Success = 'success',
  Warning = 'Warning',
}

export const TOAST_COLOR: { [toastType: string]: string } = {
  [ToastPreset.Error]: colors.astrict,
  [ToastPreset.Success]: colors.secondary,
  [ToastPreset.Warning]: colors.pendingTagText,
}

export const TOAST_ANIMATION_DURATION = 2000
export const TOAST_ANIMATION_SPEED = 1
export const TOAST_BOUNCE_INTENSITY = 1
export const TOAST_DURATION = 2100
export const TOAST_END_POSITION = IS_IOS ? getStatusBarHeight() + 5 : getStatusBarHeight()
export const TOAST_START_POSITION = -100
