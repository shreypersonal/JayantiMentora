import { PaymentStatus } from '@constants'

export interface ICarouselItemType {
  amount: number
  date: string
  dueDate: string
  id: number
  status: PaymentStatus
}
