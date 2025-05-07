import { LogBox, SafeAreaView, StatusBar } from 'react-native'

import { observer } from 'mobx-react-lite'

import { MSTStoreProvider } from '@models'
import { RootNavigator } from '@navigators'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { commonStyles } from '@theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styles from 'app.styles'

LogBox.ignoreAllLogs() // Ignore all log notifications

const App = observer(() => {
  return (
    <GestureHandlerRootView style={commonStyles.flex_1}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <SafeAreaView style={[commonStyles.flex_1, { backgroundColor: '#5F2DED' }]}>
          <RootNavigator isUserLoggedIn />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
})

const AppWrapper = () => {
  LogBox.ignoreLogs(['new NativeEventEmitter']) // Ignore log notification by message
  return (
    <MSTStoreProvider>
      <App />
    </MSTStoreProvider>
  )
}

export default AppWrapper
