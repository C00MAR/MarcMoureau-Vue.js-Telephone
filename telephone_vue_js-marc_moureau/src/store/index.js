import { createStore } from 'vuex';

export default createStore({
    state: {
      contacts: [
        {
          prenom: 'Martin',
          num: '0680717127'
        },
        {
          prenom: 'uhhu',
          num: '0000'
        }
      ],
      calls: [
        {
          number: '0680717127',
          date: '00'
        },
        {
          number: '0000',
          date: '151515'
        },
        {
          number: '00',
          date: '11'
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
