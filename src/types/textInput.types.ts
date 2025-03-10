import React from 'react'

export interface IIconDataType {
  icon: React.JSX.ElementType
  iconColor?: string
  isDisabled?: boolean
  onIconPress?: () => void
}

export interface IDropdownItemData {
  id: string
  title: string
}

export interface IDropdownDataType {
  index: number
  item: IDropdownItemData
}

export enum ChangePasswordInput {
  ConfirmNewPassword = 'confirmNewPassword',
  NewPassword = 'newPassword',
  OldPassword = 'oldPassword',
}

export enum LoginInput {
  Password = 'password',
  UserEmail = 'userEmail',
  UserMobile = 'userMobile',
}

export enum SiteVisitInput {
  Comments = 'comments',
  RequestDate = 'requestDate',
  RequestTime = 'requestTime',
}

export enum FeedbackInput {
  Description = 'description',
  Title = 'title',
}

export enum BookAStayInput {
  CheckInDate = 'checkInDate',
  CheckOutDate = 'checkOutDate',
  NoOfGuests = 'noOfGuests',
  Location = 'location',
}
