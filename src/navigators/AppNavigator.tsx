import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { RouteName } from '@constants'
import { TabNavigator } from '@navigators'
import { RootStackParamList } from '@types'

export type AppStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

const AppNavigator = () => {
  const AppStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'pink' },
      }}>
      <AppStack.Screen name={RouteName.TabNavigator} component={TabNavigator} />
    </AppStack.Navigator>
  )
}

export { AppNavigator }
