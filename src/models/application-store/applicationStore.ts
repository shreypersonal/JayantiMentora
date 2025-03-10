import { types } from 'mobx-state-tree'

const ApplicationStore = types.model('ApplicationStore', {
  isApplicationStore: types.boolean,
})

export { ApplicationStore }
