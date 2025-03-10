import { FileTypes } from '@constants'

export interface ProgressRequestType {
  comments: string
  requestDate: string
  requestTime: string
}

export interface ProgressFileItemType {
  date: string
  fileType: FileTypes
  index: number
  thumbnailUrl: string
  url: string
}
