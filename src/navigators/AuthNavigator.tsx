import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { RouteName } from '@constants'
import { Login } from '@screens'
import { RootStackParamList } from '@types'

export type AuthStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <AuthStack.Navigator initialRouteName={RouteName.Login} screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={RouteName.Login} component={Login} />
    </AuthStack.Navigator>
  )
}

export { AuthNavigator }
