import { ExploreGoaPreset } from '@constants'

export interface IAreaDataItemType {
  areaId: number
  areaName: string
}

export interface ICategoryNavigationParamsType {
  url?: string
  preset?: ExploreGoaPreset
  category?: string
}

export interface IExploreGoaListParamsType extends ICategoryNavigationParamsType {
  categoryId: number
}

export interface ILiveEventNavigationParamsType {
  title: string
}
