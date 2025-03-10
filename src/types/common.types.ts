/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ViewStyle } from 'react-native'

import { NavigationAction } from '@react-navigation/native'

import { ApiMessage, ButtonPreset, RouteName, ValidationModalPreset } from '@constants'

import { FurnishPropertyStatus, RentalRequestStatus } from './api.types'

export interface INavigation {
  // dispatch actions for navigation
  dispatch: (action: NavigationAction | ((state: NavigationAction) => NavigationAction)) => void
  // navigates back to the last screen
  goBack: () => void
  // navigates to particular screen
  navigate: (value: string, params?: any) => void
  // navigate to screen and remove current screen from stack
  reset: (args: { index: number; routes: Array<{ name: string }> }) => void
}

export interface IButtonDataType {
  icon?: React.ElementType
  navigationParams?: any
  onPress?: () => void
  preset?: ButtonPreset
  routeName?: RouteName
  style?: ViewStyle
  title: string
}

export interface IShowModalParamsType {
  key?: string
  preset?: ValidationModalPreset
}

export interface IUpdateProjectPayloadType {
  deviceId?: Array<string>
  furnishPropertyStatus?: FurnishPropertyStatus
  propertyUpdateNotification?: boolean
  rentalRequestStatus?: RentalRequestStatus
  surveyPostponeCount?: number
}

export interface IUpdateProjectParamsType {
  hideLoader?: boolean
  errorModalKey?: ApiMessage
  payload: IUpdateProjectPayloadType
  successCallback?: () => void
  successModalKey?: ApiMessage
}

export interface IFetchDataParamsType {
  isInitialCall?: boolean
  isRefreshCall?: boolean
}

export interface ITransformDataForDropDownParamsType {
  data: Array<any>
  id: string
  title: string
}
