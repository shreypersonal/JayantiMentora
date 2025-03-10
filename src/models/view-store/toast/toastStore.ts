import { types } from 'mobx-state-tree'

import { ToastPreset } from '@constants'

const ToastStore = types
  .model('ToastStore', {
    message: types.maybeNull(types.string),
    preset: types.enumeration([ToastPreset.Error, ToastPreset.Warning, ToastPreset.Success]),
    showToast: types.boolean,
  })
  .actions(self => ({
    popToast(message = '', preset = ToastPreset.Success) {
      self.message = message
      self.preset = preset
      self.showToast = true
    },
    onClose() {
      self.message = null
      self.showToast = false
    },
  }))

export default ToastStore
