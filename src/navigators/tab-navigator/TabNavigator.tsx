import React from 'react'
import { Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TAB_DATA, TAB_ICON_HEIGHT, TAB_ICON_WIDTH } from '@constants'
import { Typography, colors } from '@theme'
import { IRenderTabIconType } from '@types'

import { styles } from './tabNavigator.styles'

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  const renderScreen = () =>
    TAB_DATA.map(item => {
      const { component, icon: Icon, name } = item

      const renderIcon = ({ focused }: IRenderTabIconType) => {
        const tabLabelIconColor = focused ? colors.secondary : colors.description
        const tabLabelFontFamily = focused ? Typography.primary.bold : Typography.primary.medium
        const labelStyle = [
          styles.label,
          { color: tabLabelIconColor, fontFamily: tabLabelFontFamily },
        ]
        const borderTopColor = focused ? colors.secondary : colors.inputBorder
        const iconContainerStyle = [styles.iconContainer, { borderTopColor }]

        return (
          <View style={iconContainerStyle}>
            <Icon color={tabLabelIconColor} height={TAB_ICON_HEIGHT} width={TAB_ICON_WIDTH} />
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
