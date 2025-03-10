/* eslint-disable @typescript-eslint/no-explicit-any */
import { types } from 'mobx-state-tree'

export const ApiStoreItem = types.model('ApiStoreItem', {
  error: types.maybeNull(types.frozen()),
  hasNextData: types.boolean,
  id: types.identifier,
  isError: types.boolean,
  isLoading: types.boolean,
  isRefresh: types.boolean,
})

export const ApiStatusStore = types
  .model('ApiStatusStore', {
    apiStatus: types.map(ApiStoreItem),
  })
  .actions(self => {
    const setApiStatus = (data: {
      error?: any
      hasNextData?: boolean
      id: string
      isError?: boolean
      isLoading?: boolean
      showFooterLoader?: boolean
      isRefresh?: boolean
    }) => {
      const previousData = self.apiStatus.get(data.id)
      const {
        id,
        error = previousData?.error || {},
        isError = previousData?.isError ?? false,
        isLoading = previousData?.isLoading ?? false,
        hasNextData = previousData?.hasNextData ?? false,
        isRefresh = previousData?.isRefresh ?? false,
      } = data
      self.apiStatus.set(id, {
        error,
        hasNextData,
        id,
        isError,
        isLoading,
        isRefresh,
      })
    }

    const getApiStatus = (id: string) => {
      if (self.apiStatus.get(id)) {
        return self.apiStatus.get(id)
      }
      const data = {
        error: {},
        hasNextData: false,
        id,
        isError: false,
        isLoading: false,
        showFooterLoader: false,
        isRefresh: false,
      }
      setApiStatus(data)
      return self.apiStatus.get(id)
    }

    return { getApiStatus, setApiStatus }
  })

export const apiStatusData = {}
