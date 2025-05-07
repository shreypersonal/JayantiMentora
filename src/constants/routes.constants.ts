import { AcademicCapIcon, HomeIcon, BuildingStorefrontIcon } from 'react-native-heroicons/outline'

import { Lectures, Home, Store } from '@screens'

export enum RouteName {
  Home = 'Home',
  Login = 'Login',
  Store = 'Store',
  Lectures = 'Lectures',
  TabNavigator = 'TabNavigator',
}

export const TAB_DATA = [
  { name: 'Home', component: Home, icon: HomeIcon },
  { name: 'Store', component: Store, icon: BuildingStorefrontIcon },
  { name: 'Lectures', component: Lectures, icon: AcademicCapIcon },
]
