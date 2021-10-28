import API from '../../base'

export default {
  namespaced: true,
  state: {
    accounts: [],
    summary: [],
  },
  getters: {
    GET_RECENT_ACCOUNTS(state) {
      return state.accounts;
    }
  },
  mutations: {
    SET_RECENT_ACCOUNTS(state, data) {
      state.accounts = data
    },
    SET_SUMMARY(state, data) {
      state.summary = data
    },
    REMOVE_ACC(state, id){
      state.accounts = state.accounts.filter(acc => {
        return acc.id !== id;
      });
    }
  },
  actions: {
    async recentAccounts({commit}, payload){
      const res = await API.get('/admin/accounts', payload).then(res => {
        commit('SET_RECENT_ACCOUNTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async removeAccount({commit}, id){
      const res = await API.delete(`/admin/accounts/destroy/${id}`).then(res => {
        commit('REMOVE_ACC', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async summary({commit}){
     const res = await API.get('/admin/summary').then(res => {
       commit('SET_SUMMARY', res.data)

       return res;
     }).catch(err => {
       return err.response
     })

     return res;
    }
  }
}