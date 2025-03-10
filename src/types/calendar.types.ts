import { DateData } from 'react-native-calendars'
import { DayState } from 'react-native-calendars/src/types'

export interface ISelectedDatesType {
  blockedBy?: string
  endDate: string
  startDate: string
}

interface IPeriodBlock {
  color?: string
  endingDay?: boolean
  startingDay?: boolean
}

export interface IMarkDateItem {
  disableTouchEvent: boolean
  periods: Array<IPeriodBlock>
}

export interface IMarkedDates {
  [date: string]: IMarkDateItem
}

export enum ICalendarDropdownType {
  Month = 'month',
  Year = 'year',
}

export interface ICleaningDataType {
  cleaningDoneDates: Array<string>
  multiServiceDates: Array<string>
}

export interface IDayComponentProps {
  date?: DateData
  state?: DayState
}
