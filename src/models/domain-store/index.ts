import { Instance } from 'mobx-state-tree'

import DomainStore from './domainStore'
import { DomainStoreData } from './domainStoreData'

export { DomainStore, DomainStoreData }
export type DomainStoreType = Instance<typeof DomainStore>
