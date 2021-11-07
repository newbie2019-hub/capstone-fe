import API from '../../base'

export default {
  namespaced: true,
  state: {
    accounts: [],
    summary: [],
    post_summary: [],
  },
  getters: {
  },
  mutations: {
    SET_RECENT_ACCOUNTS(state, data) {
      state.accounts = data
    },
    SET_POST_SUMMARY(state, data) {
      state.post_summary = data
    },
    SET_SUMMARY(state, data) {
      state.summary = data
    },
  },
  actions: {
    async getOSAPostSummary({commit}){
      const res = await API.get(`/user/osa/post`).then(res => {
        commit('SET_POST_SUMMARY', res.data)

        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    async recentAccounts({commit}){
        const res = await API.get('/user/accountSummary').then(res => {
          commit('SET_RECENT_ACCOUNTS', res.data)

          return res;
        }).catch(err => {
        return err.response;
        })

        return res;
    },
    async summary({commit}){
        const res = await API.get('/user/summary').then(res => {
          commit('SET_SUMMARY', res.data)

          return res;
        }).catch(err => {
        return err.response;
        })

        return res;
    },

  }
}