import { createStore } from 'vuex';

export default createStore({
    state: {
      contacts: [
        {
          prenom: 'Martin',
          num: '0680717127'
        },
        {
          prenom: 'Marc',
          num: '0645367865'
        }
      ],
      calls: [
        {
          number: '0680717127',
          date: '21/01/2023'
        },
        {
          number: '0645367865',
          date: '21/01/2023'
        },
        {
          number: '0674382759',
          date: '23/01/2023'
        }
      ],
      CallNumber: '',
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact) {
      state.contacts.push(contact)
    },
    addCalls(state, call){
      state.calls.unshift(call)
    },
    addJournalEntry(state, call) {
      state.calls.unshift(call)
    }

  },
  actions: {
    addJournalEntry({ commit }, call) {
      commit('addJournalEntry', call)
    }
  },
  modules: {
  }
})
