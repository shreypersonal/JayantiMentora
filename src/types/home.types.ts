import React from 'react'

import { DashboardCardPreset, DashboardPreset } from '@constants'

export interface ICategoryCardType {
  cardPreset?: DashboardPreset
  description?: string
  icon?: React.JSX.ElementType
  id: number
  navigationParams?: object
  preset?: DashboardCardPreset
  routeName?: string
  subTitle?: string
  title?: string
}
