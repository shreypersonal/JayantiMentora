import { NotificationsSettingsItemType } from '@models'

export interface INotificationsSettingsDataType {
  category: string
  key: keyof INotificationsSettingsType
  notificationStatus: boolean
}

export interface INotificationsSettingsType extends NotificationsSettingsItemType {
  propertyUpdateNotification?: boolean
}
