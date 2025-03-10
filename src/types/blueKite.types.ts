import { IDropdownItemData } from './textInput.types'

export interface IInsightsDetailsType {
  insightValue: string | number
  title: string
}

export interface BookAStayRequestType {
  checkInDate: string
  checkOutDate: string
  location: Array<IDropdownItemData>
  noOfGuests: string
}

export interface YearlyRevenueItem {
  [key: string]:
    | string
    | number
    | null
    | Array<{ expensesName: string | null; amount: number | null }>

  balanceAmount: string | number | null
  expensesDetail: Array<{ expensesName: string | null; amount: number | null }>
  filanlPayOut: string | number | null
  forMonth: string | number | null
  forYear: string | number | null
  netRevenue: string | number | null
  paymentMade: string | number | null
  totalAdjustedPreviousAmount: string | number | null
  totalBooking: string | number | null
  totalExpenses: string | number | null
  totalGst: string | number | null
  totalMiscellaneous: string | number | null
  totalNight: string | number | null
  totalOwnerAddtionalRevenue: string | number | null
  totalOwnerAmount: string | number | null
  totalOwnerInvoiceAmount: string | number | null
  totalOwnerTotalRevenue: string | number | null
  totalTds: string | number | null
  totalTdsAddtional: string | number | null
  totalTdsApplicableOn: string | number | null
}

export interface IBlockDatesData {
  booked: Array<string | null>
  blocked: Array<string | null>
  blockedAdmin: Array<string | null>
  // blockedTentative: Array<string|null>
}

export interface IInsightCardDataItemType {
  id: string
  title: string
  value: string | number
}
