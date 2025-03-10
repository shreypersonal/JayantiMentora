import { Instance } from 'mobx-state-tree'

import { ApiStatusStore } from './apiStatusStore'

export { ApiStatusStore }

export type ApiStatusStoreType = Instance<typeof ApiStatusStore>
