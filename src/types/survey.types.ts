import { SurveyCategoryType } from './api.types'

export interface IRatingType {
  emoji: string
  label: string
  value: number
}

export interface ISurveyDataType {
  answer: string | number
  category: SurveyCategoryType
  questionId: number
}
