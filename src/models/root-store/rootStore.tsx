import { ReactNode, createContext, useContext } from 'react'

import { Instance, cast, types } from 'mobx-state-tree'

import { ApplicationStore, ApplicationStoreData } from '../application-store'
import { DomainStore, DomainStoreData } from '../domain-store'
import { ViewStore, ViewStoreData } from '../view-store'

interface MSTStoreProviderProps {
  children: ReactNode
}

const RootStore = types
  .model('RootStore', {
    applicationStore: ApplicationStore,
    domainStore: DomainStore,
    viewStore: ViewStore,
  })
  .actions(self => {
    const resetDomainStore = () => {
      self.domainStore = cast(DomainStoreData)
    }
    return { resetDomainStore }
  })

const createStore = () => {
  const applicationStore = ApplicationStore.create(ApplicationStoreData)
  const domainStore = DomainStore.create(DomainStoreData)
  const viewStore = ViewStore.create(ViewStoreData)

  const store = RootStore.create({ applicationStore, domainStore, viewStore })

  return store
}

const mstStore = createStore()

const MSTStoreContext = createContext(mstStore)

const useStore = () => {
  const mstStoreContext = useContext(MSTStoreContext)
  return mstStoreContext
}

const MSTStoreProvider = ({ children }: MSTStoreProviderProps) => (
  <MSTStoreContext.Provider value={mstStore}>{children}</MSTStoreContext.Provider>
)

export { MSTStoreContext, MSTStoreProvider, RootStore, mstStore, useStore }
export type RootStoreType = Instance<typeof RootStore>
