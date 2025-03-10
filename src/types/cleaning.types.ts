import type { CleaningItemType } from '@models'

export interface ICleaningTypeParamsType {
  month: number
  year: number
}

export interface ICleaningServiceParamsType {
  data: CleaningItemType
}

export interface ICleaningImageCardParamsType {
  heading: string
  id: number
  imagesUrls: Array<string>
  imageUrl: string
  index: number
}
