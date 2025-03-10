import { AnimationObject } from 'lottie-react-native'

import { PaymentStatus } from '@constants'

export type PayUParamsType = {
  amount: string
  email: string
  firstName: string
  key: string
  phone: string
  productInfo: string
}

export interface IPaymentStatusParamsType {
  amount: string
  description: string
  isCatamaranBooking?: boolean
  status: PaymentStatus
}

export interface IPaymentMethodsParamsType {
  amount?: number
  id: number
  isCatamaranBooking?: boolean
  onPaymentSuccess?: () => void
  paymentInfo?: string
}

export interface IPaymentStatusDataType {
  buttonTitle: string
  lottieSource?: string | AnimationObject
  title: string
}

export interface IAccountDataItem {
  showCopyIcon?: boolean
  label: string
  value?: string | number
}

export interface IAccountData {
  data: IAccountDataItem[]
  key: string
  title: string
}
export interface IPaymentStatusType {
  backgroundColor: string
  color: string
}

export interface IOverdueDropDownType {
  title: string
  value: number
}
