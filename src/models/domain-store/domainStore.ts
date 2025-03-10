import { types } from 'mobx-state-tree'

const DomainStore = types.model('DomainStore', {
  isUserLoggedIn: types.boolean,
})

export default DomainStore
