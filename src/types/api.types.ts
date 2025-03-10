import { InventoryItemStatus, RequestType } from '@constants'
import { QuestionDataItemType } from '@models'

export interface ICreateSurveyPayload {
  survey_data: QuestionDataItemType[]
}

export interface IApiParamsType {
  endpoint: string
  isTbkApi?: boolean
  request: RequestType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestData?: any
}

export interface IBookAStayPayloadType {
  checkInDate: string
  checkOutDate: string
  location: string
  noOfGuests: number
}

export interface ISubmitFeedbackPayloadType {
  comment: string
  title: string
}

export interface SiteVisitRequestPayload {
  comments: string
  request_date: string
  request_time: string
}

export interface ILoginUserPayload {
  device_id: string
  device_type: string
  fcm_token: string
  password: string
  user_email?: string
  user_mobile?: string
}

export interface IUploadDocumentPayloadType {
  categoryId: string
  documentUrl: string
  title: string
}

export enum ProjectStatus {
  Completed = 'COMPLETED',
  OnGoing = 'ONGOING',
}

export enum FurnishPropertyStatus {
  NOT_STARTED = 'NOT_STARTED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
}

export enum ProjectType {
  Apartment = 'APARTMENT',
  Villa = 'VILLA',
}

export enum SurveyCategoryType {
  Rating = 'rating',
  Text = 'text',
  YesNo = 'yes/no',
}
export interface IGetCleaningDataParamsType {
  cleaningTypeId?: string
  isRefresh?: boolean
  month: number
  year: number
}

export interface IInventoryItemType {
  comment?: string
  id: number
  imageUrl: string
  itemName: string
  status: InventoryItemStatus
  updatedAt: string
}

export interface IGetExploreGoaParamsType {
  areaId?: number
  categoryId: number
  initialCall?: boolean
  isRefreshCall?: boolean
  offset?: number
}

export enum PaymentDemandType {
  Catamaran = 'CATAMARAN',
  Construction = 'CONSTRUCTION',
  InteriorFurnishing = 'INTERIOR_FURNISHING',
  MaintenancePayment = 'MAINTENANCE_PAYMENT',
  NonBudgetedDemand = 'NON_BUDGETED_DEMAND',
  Other = 'OTHER',
}

export interface IGetTransactionParamsType {
  isRefresh?: boolean
  payload: number
}

export interface IGetDemandPaymentParamsType {
  initialCall?: boolean
  isRefresh?: boolean
  payload: string | undefined
}

export enum RentalRequestStatus {
  Completed = 'COMPLETED',
  NotStarted = 'NOT_STARTED',
  Processing = 'PROCESSING',
}

export interface IMonthlyRevenuePayload {
  checkinmonth: string
  checkinyear: number
}

export interface ICreateTransactionParamType {
  demandId: number
  amount: number
}

export interface ICreateBlockDatePayload {
  checkindate: string
  checkoutdate: string
  comment?: string
}

export interface IUnblockDatePayload {
  booking_id: number | undefined
}

export interface ISendMailPayload {
  emailType: string
  link?: string
  name: string
  receiverAddress: string
}

export interface IForgotPasswordPayload {
  userEmail: string
}

export enum EmailTypeStatus {
  ChangePassword = 'change_password_confirmation',
  ForgotPassword = 'forgot_password',
}
