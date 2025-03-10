import { ServiceRequestType } from '@constants'

import { IDropdownItemData } from './textInput.types'

export interface IAirportServiceRequestPayloadType {
  airportId: string
  numberOfLuggage: number
  numberOfPax: number
  requestDate: string
  requestTime: string
}

export interface ICatamaranFormDataType {
  date: string
  pax: Array<IDropdownItemData>
  slots: Array<IDropdownItemData>
}

export interface ICatamaranServiceRequestPayloadType {
  bookInDate: string
  cost?: string
  numberOfPax: number
  slotId: number
}

export interface IAirportPickupFormDataType {
  airportName: Array<IDropdownItemData>
  arrivalTime: string
  isTnCAgreed?: boolean
  luggage: string
  numberOfPax: string
  pickupDate: string
}

export interface ILaundryServiceRequestPayloadType {
  comments: string
  requestDate: string
  requestTime: string
}

export interface IServiceParamsType {
  preset: ServiceRequestType
}

export type ServiceFormDataType =
  | IAirportServiceRequestPayloadType
  | ICatamaranServiceRequestPayloadType
  | ILaundryServiceRequestPayloadType

export interface IServiceFormProps {
  onSubmit: (data: ServiceFormDataType, successCallback?: () => void) => void
}

export interface IPastRequestDataType {
  airportName: string
  bookInDate: string
  comments: string
  fromTime: string
  id: number
  numberOfLuggage: string
  numberOfPax: string
  requestDate: string
  requestStatus: string
  requestTime: string
}

export interface IPastRequestParamsType {
  isInitialFetch?: boolean
  isRefresh?: boolean
  type: ServiceRequestType
}
