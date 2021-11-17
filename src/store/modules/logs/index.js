import API from '../../base'

export default {
  namespaced: true,
  state: {
    logsummary: '',
    logs: {
     data: [
      {
       user: {
        userinfo: {
         first_name: '',
         last_name: '',
        }
       }
      }
     ]
    }
  },
  getters: {
  },
  mutations: {
    SET_ACTIVITY_LOG(state, data) {
      state.logs = data
    },
    SET_ACTIVITY_LOG_SUMMARY(state, data) {
      state.logsummary = data
    },
  },
  actions: {
    async summary({commit}){
      const res = await API.get(`user/summary/activity-logs`).then(res => {
        commit('SET_ACTIVITY_LOG_SUMMARY', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getAllActivityLogs({commit}, page){
      const res = await API.get(`admin/activity-logs?page=${page}`).then(res => {
        commit('SET_ACTIVITY_LOG', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchActivityLog({commit}, {page, data}){
      const res = await API.post(`/admin/search/activity-logs?page=${page}`, data).then(res => {
        commit('SET_ACTIVITY_LOG', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getAllUserActivityLogs({commit}, page){
      const res = await API.get(`user/activity-logs?page=${page}`).then(res => {
        commit('SET_ACTIVITY_LOG', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUserActivityLog({commit}, {page, data}){
      const res = await API.post(`/user/search/activity-logs?page=${page}`, data).then(res => {
        commit('SET_ACTIVITY_LOG', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}