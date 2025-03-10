import { SupportItem } from '@constants'

import { IDropdownItemData } from './textInput.types'

export interface IRaiseARequestFormDataType {
  complaint: string
  description: string
  fileUrl: string
  issue: Array<IDropdownItemData>
  natureOfComplaint: Array<IDropdownItemData>
}

export interface ISupportDataType {
  preset: SupportItem
}

export interface IPastFeedbackDataType {
  addTime: string
  comment: string
  id: number
  title: string
}

export interface IRaisedRequestParamType {
  id: number
}
