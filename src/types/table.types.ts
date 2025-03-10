export interface ITableDataType {
  data: Array<string | number | null>
  id: number
  key: string
  title: string
}

export interface IRowDataType {
  index: number
  item: ITableDataType
}
