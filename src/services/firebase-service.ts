import Config from 'react-native-config'

import AsyncStorage from '@react-native-async-storage/async-storage'
import auth, { firebase } from '@react-native-firebase/auth'
import messaging from '@react-native-firebase/messaging'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { log } from '@config'
import { AsyncStorageKeys } from '@constants'
import appleAuth from '@invertase/react-native-apple-authentication'

const firebaseAuth = auth()

// To configure google sign in
GoogleSignin.configure({
  webClientId: Config.GOOGLE_WEB_CLIENT_ID,
})

export const confirmToken = async (token: string) => {
  let isAuthenticated = false
  try {
    const res = await firebaseAuth.signInWithCustomToken(token)
    log.info('Firebase auth response', res)
    isAuthenticated = true
  } catch (e) {
    log.error('Firebase auth error in ', e)
    isAuthenticated = false
  }
  return isAuthenticated
}

const getAccessToken = async () => {
  if (firebaseAuth && firebaseAuth.currentUser) {
    const user = firebaseAuth.currentUser
    if (user) {
      const accessToken = await user.getIdToken(true)
      return accessToken
    }
  }
  return null
}

const resetPassword = async (emailId: string) => {
  await firebaseAuth.sendPasswordResetEmail(emailId)
}

const handleLogout = async () => {
  await firebaseAuth.signOut()
  const isGoogleLogIn = await AsyncStorage.getItem(AsyncStorageKeys.IsGoogleLogIn)
  if (isGoogleLogIn === 'true') {
    await GoogleSignin.revokeAccess()
    AsyncStorage.multiSet([
      [AsyncStorageKeys.IsGoogleLogIn, 'false'],
      [AsyncStorageKeys.IsUserLoggedIn, 'false'],
    ])
  }
}

// eslint-disable-next-line consistent-return
const reauthenticateUser = (currentPassword: string) => {
  const user = firebaseAuth.currentUser
  if (user && user.email) {
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
    return user.reauthenticateWithCredential(credentials)
  }
}

const handleChangePassword = async ({
  oldPassword,
  newPassword,
  successCallback,
  errorCallback,
}: {
  oldPassword: string
  newPassword: string
  successCallback: () => void
  errorCallback: () => void
}) => {
  try {
    const user = firebaseAuth.currentUser
    await reauthenticateUser(oldPassword)
    if (user) {
      await user.updatePassword(newPassword)
      successCallback()
    }
  } catch (error) {
    log.error('handleChangePassword error:', error)
    errorCallback()
  }
}

// Handles Google Sign-In
const signInWithGoogle = async (handleLoginError: (error: string) => void) => {
  let isAuthenticated = false
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const response = await firebaseAuth.signInWithCredential(googleCredential)
    log.info('Google SignIn Response', response)
    if (response) {
      isAuthenticated = true
    }
  } catch (error) {
    handleLoginError(`${error}`)
    await GoogleSignin.revokeAccess()
    isAuthenticated = false
    log.error('Google SignIn Error', error)
  }
  return isAuthenticated
}

// Handles Apple Sign-In
export const signInWithApple = async (handleLoginError: (error: string) => void) => {
  let isAuthenticated = false

  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
    })

    const { identityToken, nonce } = appleAuthRequestResponse
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)
    const response = await auth().signInWithCredential(appleCredential)
    log.info('Apple SignIn Response', response)
    if (response) {
      isAuthenticated = true
    }
  } catch (error) {
    handleLoginError(`${error}`)
    isAuthenticated = false
    log.error('Apple SignIn Error', error)
  }

  return isAuthenticated
}

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  if (enabled) {
    log.info('Authorization status:', authStatus)
  }
}

const getFCMToken = async () => {
  await requestUserPermission()
  const fcmToken = await messaging().getToken()
  if (fcmToken) {
    log.warn('FCM Token', fcmToken)
    return fcmToken
  }
  return ''
}

export {
  firebaseAuth,
  getAccessToken,
  handleChangePassword,
  handleLogout,
  resetPassword,
  signInWithGoogle,
  getFCMToken,
}
