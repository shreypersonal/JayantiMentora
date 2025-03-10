import React from 'react'

export interface IAppHeaderIconDataType {
  icon: React.JSX.ElementType
  iconColor: string
  isNotificationCountVisible?: boolean
  onPress: () => void
}
