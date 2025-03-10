import { Instance } from 'mobx-state-tree'

import ToastStore from './toastStore'

export { ToastStore }

export type ToastStoreType = Instance<typeof ToastStore>
