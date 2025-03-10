import { Dimensions, Platform } from 'react-native'

import moment from 'moment'

import { Sizes, colors } from '@theme'

import { RouteName } from './routes.constants'

// This is used to avoid show Session Expired modal in case of no user found
export const SessionExpiredException: { [key: string]: RouteName } = {
  [RouteName.Login]: RouteName.Login,
  [RouteName.ForgotPassword]: RouteName.ForgotPassword,
  [RouteName.DefaultDrawer]: RouteName.DefaultDrawer,
}

export enum AutoComplete {
  Off = 'off',
  On = 'on',
}

export enum LoaderSize {
  Large = 32,
  Medium = 24,
  Small = 16,
}

export enum FileTypes {
  Image = 'image',
  Pdf = 'pdf',
  Video = 'video',
}

export enum FontSize {
  Bold = 'bold',
  Fat = 'fat',
  Roman = 'roman',
}

export enum ButtonPreset {
  BlueKite = 'blueKite',
  BlueKiteSmall = 'blueKiteSmall',
  GreenLarge = 'greenLarge',
  GreenSmall = 'greenSmall',
  LightGreen = 'lightGreen',
  Red = 'red',
  White = 'white',
}

export enum DateComparisonUnit {
  Day = 'day',
  Days = 'days',
}

export enum DateFormatPreset {
  DateTimeFormat = 'MMM DD YYYY, hh:mm a',
  DayMonthFormat = 'DD MMM',
  DayMonthYearFormat = 'DD-MM-YYYY',
  DefaultFormat = 'YYYY-MM-DD',
  FormatWithSlash = 'DD/MM/YYYY',
  FullDate = 'YYYY-MM-DD HH:mm:ss',
  FullDateFormat = 'MMM DD, YYYY',
  FullDateMonthFormat = 'DD MMM YYYY',
  FullDateWithTime = 'YYYY-MM-DDTHH:mm:ssZ',
  FullDateWithTimeFormat = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  FullMonth = 'MMM',
  In12HrFormat = 'YYYY-MM-DD h:mm A',
  Month = 'M',
  MonthYearFormat = 'MMMM YYYY',
}

export enum TimeFormatPreset {
  FullDateWithTime = 'YYYY-MM-DDTHH:mm:ssZ',
  In12HrFormat = 'hh:mm A',
  In24HrFormat = 'HH:mm:ss',
}

export enum DateTimeMode {
  Date = 'date',
  Time = 'time',
}

export enum EventType {
  Dismissed = 'dismissed',
  Set = 'set',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum KeyboardPreset {
  Default = 'default',
  EmailAddress = 'email-address',
  Numeric = 'numeric',
  PhonePad = 'phone-pad',
}

export enum AutoCapitalize {
  Characters = 'characters',
  None = 'none',
  Sentences = 'sentences',
  Words = 'words',
}

export enum InputPreset {
  DatePicker = 'datePicker',
  Default = 'default',
  Dropdown = 'dropdown',
  Multiline = 'multiline_text',
  Numeric = 'numeric',
  Password = 'password',
  TimePicker = 'timePicker',
}

export enum ModalAnimationType {
  Fade = 'fade',
  None = 'none',
  Slide = 'slide',
}

export enum ResizeMode {
  Contain = 'contain',
  Cover = 'cover',
  None = 'none',
  Stretch = 'stretch',
}

export enum ScreenScaleSize {
  one = 1,
  three = 3,
}

export enum TextAlign {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum CheckboxPreset {
  Circle = 'circle',
  Square = 'square',
  BlueKite = 'blueKite',
}

export enum AccordionPreset {
  ArrowIcon = 'arrowIcon',
  ViewButton = 'viewButton',
}

export enum NoDataScreens {
  AllProjects = 'ALL_PROJECTS',
  CleaningService = 'CLEANING_SERVICE',
  CleaningType = 'CLEANING_TYPE',
  DocumentList = 'DOCUMENT_LIST',
  Documents = 'DOCUMENTS',
  Gallery = 'GALLERY',
  MisSummary = 'MIS_SUMMARY',
  MonthlyExpenses = 'MONTHLY_EXPENSES',
  MonthlyInvoices = 'MONTHLY_INVOICES',
  MonthlyRevenue = 'MONTHLY_REVENUE',
  MyInventory = 'MY_INVENTORY',
  MyInvoices = 'MY_INVOICES',
  MyPayments = 'MY_PAYMENTS',
  MyTeam = 'MY_TEAM',
  Notifications = 'NOTIFICATIONS',
  PastFeedbacks = 'PAST_FEEDBACKS',
  PastRaiseARequests = 'PAST_RAISE_A_REQUESTS',
  PastRequests = 'PAST_REQUESTS',
  Plans = 'PLANS',
  Progress = 'PROGRESS',
  ServiceRequests = 'SERVICE_REQUESTS',
  SiteVisitRequest = 'SITE_VISIT_REQUEST',
  Testimonials = 'TESTIMONIALS',
  Transactions = 'TRANSACTIONS',
  YearlyRevenue = 'YEARLY_REVENUE',
}

export enum AsyncStorageKeys {
  IsGoogleLogIn = 'IS_GOOGLE_LOG_IN',
  IsUserLoggedIn = 'IS_USER_LOGGED_IN',
  Notification = 'NOTIFICATION',
}

export enum ValidationModalPreset {
  BlueKiteSuccess = 'blueKiteSuccess',
  Error = 'error',
  Success = 'success',
}

// Here we'll keep one minute down in case of TO and one minute up in case of FROM
export enum TimeSchedule {
  TIME_10_00_PM = '10:01 PM',
  TIME_7_30_PM = '7:31 PM',
  TIME_8_00_AM = '7:59 AM',
  TIME_9_00_AM = '8:59 AM',
}

export enum TimeFormat {
  AM = 'AM',
  PM = 'PM',
}

export enum TextTransform {
  Capitalize = 'capitalize',
  None = 'none',
}

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')
export const ACTIVE_OPACITY = 0.8
export const IS_ANDROID = Platform.OS === 'android' // This is used in BAR_STYLE, so declared just above it
export const BAR_STYLE = IS_ANDROID ? 'dark-content' : 'default'
export const BOTTOM_OFFSET = 16
export const DEFAULT_API_LIMIT = 10
export const API_LIMIT_20 = 20
export const DEFAULT_API_OFFSET = 0
export const DOT = '\u2022'
export const EXTRA_KEYBOARD_SPACE = -100
export const EXTRA_KEYBOARD_SPACE_ANDROID = -10
export const EXTRA_KEYBOARD_SPACE_IOS = -40
export const HIT_SLOP_FIVE = { top: 5, bottom: 5, left: 5, right: 5 }
export const HIT_SLOP_TEN = { top: 10, bottom: 10, left: 10, right: 10 }
export const HIT_SLOP_TWENTY = { top: 20, bottom: 20, left: 20, right: 20 }
export const HOURS = 'hours'
export const HTTP_ERROR = 'httpError'
export const IND_CURRENCY = '₹'
export const INPUT_ICON_DIMENSION = 24
export const IS_IOS = Platform.OS === 'ios'
export const KEYBOARD_OPENING_TIME = 10
export const KEYBOARD_SCROLL_HEIGHT = 128

export const DEFAULT_IMPORTANT_NUMBER = [
  {
    categoryId: 0,
    categoryName: 'Important Numbers',
  },
]

// TODO: need discussion
export const MAX_DATE = moment()
  .local()
  .year(moment().local().year() + 1)
  .month(11)
  .date(31)
  .toDate()
export const MAX_CHECK_OUT_DATE = moment()
  .local()
  .year(moment().local().year() + 2)
  .month(0)
  .date(1)
  .toDate()

export const MAX_EMAIL_LENGTH = 320
export const MAX_INPUT_CHARACTER_LENGTH = 500
export const MAX_MOBILE_LENGTH = 20
export const MAX_NUMBER_OF_LINES = 5
export const MAX_PASSWORD_LENGTH = 20
export const MAX_PHONE_DIGITS = 10
export const MIN_PASSWORD_LENGTH = 6
export const NA = 'N/A'
export const ONE_KB = 1024
export const SCREEN_TAP_COUNT = 2
export const SEPARATOR = '|'
export const STATUS_BAR_BACKGROUND_COLOR = IS_ANDROID ? colors.shadow : ''
export const TAB_BAR_HEIGHT = IS_IOS ? Sizes.Size_74 : Sizes.Size_64
export const TAB_ICON_HEIGHT = 24
export const TAB_ICON_WIDTH = 24
export const TELEPHONE_LINKING_URL = 'tel:'
export const TOUCHABLE_OPACITY = 1
export const UTC_OFFSET = '+05:30'
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width
