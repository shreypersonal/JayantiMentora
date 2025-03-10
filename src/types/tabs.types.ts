import React from 'react'

export interface ITabDataType {
  child: React.ReactNode
  key: string
  title: string
}
export interface ITabItemType {
  index: number
  item: ITabDataType
}
