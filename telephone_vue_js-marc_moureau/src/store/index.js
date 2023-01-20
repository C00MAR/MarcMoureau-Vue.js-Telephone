import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        prenom: 'Martin',
        num: '0680717127'
      }
    ]
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact) {
      state.contacts.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
