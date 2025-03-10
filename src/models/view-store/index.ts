import { Instance } from 'mobx-state-tree'

import { ViewStore } from './viewStore'
import { ViewStoreData } from './viewStoreData'

export { ViewStore, ViewStoreData }

export type ViewStoreType = Instance<typeof ViewStore>

export * from './toast'
