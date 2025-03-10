/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { NativeEventEmitter } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import PayUBizSdk from 'payu-non-seam-less-react'

import { log } from '@config'
import { PaymentStatus, RouteName } from '@constants'
import { useStore } from '@models'
import { INavigation } from '@types'

interface IUsePayUListenersProps {
  /** isCatamaranBooking: is an optional prop that determines whether it is catamaran booking or not */
  isCatamaranBooking?: boolean
  /** onPaymentSuccess: is an optional prop that trigger an action an action on successful payment */
  onPaymentSuccess?: () => void
}

export const usePayUListeners = (props: IUsePayUListenersProps) => {
  const { isCatamaranBooking = false, onPaymentSuccess } = props

  const navigation = useNavigation<INavigation>()
  const [isPaymentLoading, setIsPaymentLoading] = useState(false)
  const { domainStore } = useStore()
  const { paymentStore } = domainStore
  const { generatePayUHash, clearPayUHash } = paymentStore

  const navigateToStatusScreen = (event: any) => {
    const payUResponse = JSON.parse(event.payuResponse)
    if (payUResponse?.status.toUpperCase() === PaymentStatus.Success && onPaymentSuccess) {
      onPaymentSuccess()
    }
    navigation.navigate(RouteName.PaymentStatus, {
      amount: payUResponse?.amount,
      description: payUResponse?.productinfo,
      isCatamaranBooking,
      status: payUResponse?.status,
    })
  }

  const onPaymentProcessComplete = () => {
    setIsPaymentLoading(false)
  }

  const onPaymentResult = (event: any) => {
    clearPayUHash()
    navigateToStatusScreen(event)
  }

  const onPaymentCancel = () => {
    clearPayUHash()
    onPaymentProcessComplete()
  }

  const onError = (error: any) => {
    onPaymentCancel()
    log.error('PayU Error :', error)
  }

  const generateHash = async (event: any) => {
    const { hashString, hashName } = event
    setIsPaymentLoading(true)
    await generatePayUHash(hashString, hash => {
      const result = { [hashName]: hash }
      PayUBizSdk.hashGenerated(result)
    })
  }

  useEffect(() => {
    let eventEmitter
    if (PayUBizSdk && typeof PayUBizSdk.addListener === 'function') {
      eventEmitter = new NativeEventEmitter(PayUBizSdk)
    } else {
      eventEmitter = new NativeEventEmitter()
    }

    const paymentSuccessListener = eventEmitter.addListener('onPaymentSuccess', onPaymentResult)
    const paymentFailureListener = eventEmitter.addListener('onPaymentFailure', onPaymentResult)
    const paymentCancelListener = eventEmitter.addListener('onPaymentCancel', onPaymentCancel)
    const errorListener = eventEmitter.addListener('onError', onError)
    const generateHashListener = eventEmitter.addListener('generateHash', generateHash)

    return () => {
      paymentSuccessListener.remove()
      paymentFailureListener.remove()
      paymentCancelListener.remove()
      errorListener.remove()
      generateHashListener.remove()
      eventEmitter.removeAllListeners(PayUBizSdk)
      onPaymentProcessComplete()
    }
  }, [])

  return isPaymentLoading
}
