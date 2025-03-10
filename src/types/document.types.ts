import { IDropdownItemData } from '@types'

export interface IDocumentListParamsType {
  categoryId: number
  categoryName: string
  previousProjectId?: number
}

export interface IDocumentListingDataType {
  addBy: string
  addTime: string
  documentUrl: string
  id: number
  title: string
}

export interface IUploadDocumentsFormDataType {
  documentCategory: Array<IDropdownItemData>
  uri: string
  title: string
}

export interface IGetDocumentParamsType {
  categoryId: number
  isInitialFetch?: boolean
  isRefresh?: boolean
}
