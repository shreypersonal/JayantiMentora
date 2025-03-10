import { SectionListData } from 'react-native'

import { GalleryImagesDataType } from '@models'

import { IImageSliderDataType } from './imageGallery.types'

export interface IGalleryViewParamsType {
  data: Array<IImageSliderDataType>
  defaultIndex?: number
  showTitle?: boolean
}

export interface IGalleryAPIDataType {
  date: string
  images: Array<{
    title: string
    url: string
  }>
}

export type SectionListGalleryDataItemType = SectionListData<GalleryImagesDataType>
