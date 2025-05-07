import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TAB_DATA } from '@constants'
import { Sizes, Typography, colors } from '@theme'
import { IRenderTabIconType } from '@types'

import { styles } from './tabNavigator.styles'

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  const insets = useSafeAreaInsets()
  const renderScreen = () =>
    TAB_DATA.map(item => {
      const { component, icon: Icon, name } = item

      const renderIcon = ({ focused }: IRenderTabIconType) => {
        const tabLabelIconColor = focused ? colors.palette.vividViolet : colors.palette.black
        const labelStyle = [styles.label, { color: tabLabelIconColor }]

        return (
          <View style={[styles.iconContainer, { paddingBottom: insets.bottom - Sizes.Size_20 }]}>
            <Icon color={tabLabelIconColor} height={24} width={24} />
            <Text style={labelStyle}>{name}</Text>
          </View>
        )
      }

      return (
        <Tab.Screen
          component={component}
          key={name}
          name={name}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: renderIcon,
          }}
        />
      )
    })

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
      }}>
      {renderScreen()}
    </Tab.Navigator>
  )
}
