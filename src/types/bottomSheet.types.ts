import React from 'react'

import { ButtonPreset } from '@constants'

export interface IBottomSheetDataType {
  item: string
}

export interface IBottomSheetType {
  buttonPreset?: ButtonPreset
  buttonTitle?: string
  children: React.ReactNode
  isCapitalize?: boolean
  isOpen?: boolean
  onCancel?: () => void
  onConfirm?: () => void
  showConfirmButton?: boolean
  title?: string
}
