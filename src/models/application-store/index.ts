import { Instance } from 'mobx-state-tree'

import { ApplicationStore } from './applicationStore'
import { ApplicationStoreData } from './applicationStoreData'

export { ApplicationStore, ApplicationStoreData }
export type ApplicationStoreType = Instance<typeof ApplicationStore>
