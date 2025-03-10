/* eslint-disable @typescript-eslint/no-explicit-any */
import { SheetManager } from 'react-native-actions-sheet'

import moment from 'moment'

import {
  CURRENT_DATE,
  DateFormatPreset,
  EXTRA_SPACES_REGEX,
  FontSize,
  IND_CURRENCY,
  IS_IOS,
  MONTH_DROPDOWN_DATA,
  NA,
  TimeFormatPreset,
} from '@constants'
import { translate } from '@locales'
import { Typography } from '@theme'
import { IBottomSheetType, IDropdownItemData, ITransformDataForDropDownParamsType } from '@types'

import enJson from '../locales/en.json'

export const getFont = (fontSize = FontSize.Bold) => {
  let fontStyle = {
    fontFamily: Typography.secondary[fontSize],
  }
  if (IS_IOS && fontSize === FontSize.Bold) {
    fontStyle = {
      fontFamily: 'Dala Prisma',
      fontWeight: '700',
    }
  } else if (IS_IOS && fontSize === FontSize.Fat) {
    fontStyle = {
      fontFamily: 'Dala Prisma',
      fontWeight: '600',
    }
  } else if (IS_IOS && fontSize === FontSize.Roman) {
    fontStyle = {
      fontFamily: 'Dala Prisma',
      fontWeight: '500',
    }
  }
  return fontStyle
}
export const formatAmountToINR = (amount: number | null | string, showSymbol = true): string => {
  if (amount !== null && !Number.isNaN(Number(amount))) {
    const symbol = showSymbol ? IND_CURRENCY : ''
    const newAmount = amount ? Math.abs(Number(amount)) : 0

    const isNegative = amount && Number(amount) < 0
    let finalAmount: string

    if (newAmount >= 10000000) {
      const realAmount = newAmount / 10000000
      const [integerPart, fractionalPart] = realAmount.toFixed(2).split('.')
      const formattedInteger = integerPart.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,')

      finalAmount =
        fractionalPart === '00'
          ? `${formattedInteger} ${translate('common.crores')}`
          : `${formattedInteger}.${fractionalPart} ${translate('common.crores')}`
    } else {
      const [integerPart, fractionalPart] = newAmount.toFixed(2).split('.')
      const formattedInteger = integerPart.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,')

      finalAmount =
        fractionalPart === '00' ? `${formattedInteger}` : `${formattedInteger}.${fractionalPart}`
    }

    return isNegative ? `-${symbol}${finalAmount}` : `${symbol}${finalAmount}`
  }

  return ''
}

/**
 * Converts keys of an object from snake_case to camelCase recursively
 * @param obj Input object whose key need to be converted
 * @returns Object with keys converted to camelCase
 */
export const convertKeysToCamelCase = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item))
  }

  return Object.keys(obj).reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    const value = obj[key]

    acc[camelCaseKey] =
      typeof value === 'object' && value !== null ? convertKeysToCamelCase(value) : value

    return acc
  }, {})
}

export const closeBottomSheet = async () => {
  await SheetManager.hide('VIBottomSheet')
}

export const openBottomSheet = (props: IBottomSheetType) => {
  const {
    buttonPreset,
    buttonTitle,
    children,
    isOpen,
    onCancel,
    onConfirm,
    showConfirmButton = true,
    title,
  } = props

  SheetManager.show('VIBottomSheet', {
    payload: {
      buttonPreset,
      buttonTitle,
      children,
      isOpen,
      onCancel,
      onConfirm,
      showConfirmButton,
      title,
    },
  })
}

export const getMessage = (errorCode: string) => {
  const { content } = enJson
  const isCodeExist = Object.prototype.hasOwnProperty.call(content, errorCode)
  const message = isCodeExist
    ? translate(`content.${errorCode}.message`)
    : translate('content.DEFAULT.message')
  return message
}

/**
 * Transforms an array of data objects to an array with 'id' and 'title' properties for use in dropdowns.
 * @param data Array of objects to be transformed
 * @param id Property name to be used as the 'id'
 * @param title Property name to be used as the 'title'
 * @returns Transformed array of objects with 'id' and 'title' properties
 */
export const transformDataForDropDown = (params: ITransformDataForDropDownParamsType) => {
  const { data, id, title } = params
  return data.map((item: any) => ({
    id: item[id].toString() ?? '',
    title: item[title].toString() ?? '',
  }))
}

export const toSnakeCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase()

export const convertKeysToSnakeCase = (data: any): any => {
  let res = data
  if (Array.isArray(data)) {
    res = data.map(convertKeysToSnakeCase)
  } else if (data !== null && typeof data === 'object') {
    res = Object.entries(data).reduce((acc, [key, value]) => {
      const newKey = toSnakeCase(key)
      acc[newKey] = convertKeysToSnakeCase(value)
      return acc
    }, {} as { [key: string]: any })
  }
  return res
}

export const getNoDataValues = (key: string) => {
  const { collection } = enJson
  const isCodeExist = Object.prototype.hasOwnProperty.call(collection, key)
  let value = {
    title: translate('collection.DEFAULT.title'),
    message: translate('collection.DEFAULT.message'),
  }
  if (isCodeExist) {
    value = {
      title: translate(`collection.${key}.title`),
      message: translate(`collection.${key}.message`),
    }
  }
  return value
}

export const mbToBytes = (mb: number) => mb * 1024 * 1024
/**
 * validateRegex is used to validate the value with respective regex
 * @param value: entered value
 * @param regexType: given regex
 * @returns it return boolean value
 */
export const validateRegex = (value: string | number, regexType: any) => regexType.test(value)

/**
 * Returns a Date object representing the current date with specified hours and minutes set to 0.
 * @param hours A string representing hours in 24-hour format.
 * @returns A Date object with hours, minutes, seconds, and milliseconds set based on the input hours.
 */
export const getMinDate = (hours: string | number) => {
  const utcTime = moment().local().add(hours, 'hours').toDate()
  return utcTime
}

/**
 * converts time in the requested format
 * @param time string
 * @param TimeFormatPreset  string(optional)
 * @param timeConvertType string(optional)
 */
export const timeFormatter = (
  time: string,
  timeFormatType = TimeFormatPreset.In24HrFormat,
  timeConvertType = TimeFormatPreset.In12HrFormat,
) => {
  const newTime = moment(time, timeConvertType).local()
  return newTime.isValid() ? newTime.format(timeFormatType) : NA
}

/**
 * converts date in the requested format
 * @param date string
 * @param DateFormatPreset string(optional)
 * @param dateConvertType string(optional)
 */
export const dateFormatter = (
  date: Date | string,
  dateFormatType = DateFormatPreset.FullDateFormat,
  dateConvertType = DateFormatPreset.DefaultFormat,
) => {
  const newDate = moment(date, dateConvertType)
  return newDate.isValid() ? newDate.format(dateFormatType) : NA
}

// TODO:: need discussion on this
export const getDocumentNameFromPath = (filePath: string) => {
  const documentName = (filePath.split('/').pop() || '').split('?')[0]
  return documentName
}

export const removeExtraSpaces = (value: string) => value.replace(EXTRA_SPACES_REGEX, ' ').trim()

export const getValidationModalValue = (key?: string) => {
  const { modal } = enJson
  const isCodeExist = key ? Object.prototype.hasOwnProperty.call(modal, key) : false
  let value = {
    title: translate('modal.DEFAULT.title'),
    message: translate('modal.DEFAULT.message'),
  }
  if (isCodeExist) {
    value = {
      title: translate(`modal.${key}.title`),
      message: translate(`modal.${key}.message`),
    }
  }
  return value
}

export const convertKbToMb = (sizeInKb: number) => {
  const kilobytesIn1Mb = 1024
  const sizeInMb = parseFloat((sizeInKb / kilobytesIn1Mb).toFixed(2))

  return `${sizeInMb} MB`
}

export const convertBytesToKB = (bytes: number) => bytes / 1024

/**
 * Generates the month dropdown data based on the selected year.
 * If the selected year is the current year, it filters the months up to the current month.
 * Otherwise, it returns all months.
 *
 * @param selectedYear - The year selected by the user as a string.
 * @returns An array of month objects for the dropdown, filtered based on the selected year.
 */
export const getMonthDropdownData = (selectedYear: string) => {
  const currentMonth = CURRENT_DATE.getMonth() + 1
  const currentYear = CURRENT_DATE.getFullYear()

  const isCurrentYearSelected = +selectedYear === currentYear

  const monthData = isCurrentYearSelected
    ? MONTH_DROPDOWN_DATA.filter(month => +month.id <= currentMonth)
    : MONTH_DROPDOWN_DATA

  return monthData
}

/**
 * This function generates an array of year dropdown data based on the specified minimum year.
 * @param minYear: number
 * @returns Array<{id:string, title:string}>
 */
export const getYearDropdownData = (financialYears: Array<IDropdownItemData>) => {
  const updatedData = financialYears
  if (financialYears.length) {
    const currentYear = CURRENT_DATE.getFullYear()
    const recentYear = +financialYears[0].id
    if (currentYear !== recentYear) {
      const id = currentYear.toString()
      const title = currentYear.toString()
      updatedData.unshift({ id, title })
    }
  }

  return updatedData
}
