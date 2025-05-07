import React from 'react'

import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native'

import { observer } from 'mobx-react-lite'

import { RootStackParamList } from '@types'

import { AppNavigator } from './AppNavigator'
import { AuthNavigator } from './AuthNavigator'

interface IRootNavigatorProps {
  /** isUserLoggedIn: is a required prop that determines user is logged in or not  */
  isUserLoggedIn: boolean
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

const RootNavigator = observer((props: IRootNavigatorProps) => {
  const { isUserLoggedIn } = props

  let component: React.JSX.Element = <AppNavigator />

  if (!isUserLoggedIn) {
    component = <AuthNavigator />
  }

  return <NavigationContainer>{component}</NavigationContainer>
})

export { RootNavigator }
