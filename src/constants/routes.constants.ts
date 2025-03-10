import { DocumentIcon, HomeIcon, PhoneIcon } from 'react-native-heroicons/outline'

import { Courses, Home, Profile } from '@screens'

export enum RouteName {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  Courses = 'Courses',
  TabNavigator = 'TabNavigator',
}

export const TAB_DATA = [
  { name: 'home', component: Home, icon: HomeIcon },
  { name: 'Profile', component: Courses, icon: DocumentIcon },
  { name: 'Courses', component: Profile, icon: PhoneIcon },
]
