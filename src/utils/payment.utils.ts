import Config from 'react-native-config'

import { PAYMENT_CATEGORY, PaymentType } from '@constants'
import { translate } from '@locales'
import { AccountDetailItemType } from '@models'

export const getAccountDetail = (data: AccountDetailItemType[], paymentInfo: PaymentType) => {
  const accountDetail = data.find(item => item.category === PAYMENT_CATEGORY[paymentInfo])

  const NEFTAccountNumber = accountDetail?.accountNumber
  const NEFTIfscCode = accountDetail?.ifscCode
  const NEFTAccountHolderName = accountDetail?.beneficiaryName
  const RTGSAccountNumber = accountDetail?.accountNumber

  const formattedData = [
    {
      data: [
        {
          label: translate('screens.payment-method.account-detail-card.account-number'),
          value: NEFTAccountNumber,
        },
        {
          label: translate('screens.payment-method.account-detail-card.ifsc-code'),
          value: NEFTIfscCode,
        },
        {
          label: translate('screens.payment-method.account-detail-card.account-holder-name'),
          value: NEFTAccountHolderName,
        },
      ],
      key: translate('screens.payment-method.account-detail-card.title'),
      title: translate('screens.payment-method.account-detail-card.title'),
    },
    {
      data: [
        {
          label: translate('screens.payment-method.account-detail-card.account-number'),
          value: NEFTAccountNumber,
          showCopyIcon: true,
        },
      ],
      key: translate('screens.payment-method.account-detail-card.neft'),
      title: translate('screens.payment-method.account-detail-card.neft'),
    },
    {
      data: [
        {
          label: translate('screens.payment-method.account-detail-card.account-number'),
          value: RTGSAccountNumber,
          showCopyIcon: true,
        },
      ],
      key: translate('screens.payment-method.account-detail-card.rtgs'),
      title: translate('screens.payment-method.account-detail-card.rtgs'),
    },
  ]

  return formattedData
}

// TODO: These static values for testing purpose, will remove static values for PayU Params
// TODO :- need to use spread operator and variable phone number length
export const getPayUParams = (payload: {
  firstName: string
  email: string
  phone: string
  productInfo: string
  amount: string
  transactionId: string
}) => {
  const { amount, firstName, email, phone, productInfo, transactionId } = payload
  const mobileNumber = phone.slice(-10)

  return {
    key: Config.PAYU_KEY,
    amount,
    productInfo,
    firstName,
    email,
    phone: mobileNumber,
    transactionId,
    ios_surl: 'https://cbjs.payu.in/sdk/success', // TODO: need to change
    ios_furl: 'https://cbjs.payu.in/sdk/failure', // TODO: need to change
    android_surl: 'https://cbjs.payu.in/sdk/success', // TODO: need to change
    android_furl: 'https://cbjs.payu.in/sdk/failure', // TODO: need to change
    environment: Config.PAYU_ENVIRONMENT,
    userCredential: `${Config.PAYU_KEY}:${mobileNumber}`,
  }
}
