import API from '../../base'

export default {
  namespaced: true,
  state: {
    logsummary: '',
    adminlogs: {
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
    },
    logs: []
  },
  getters: {
  },
  mutations: {
    SET_ACTIVITY_LOG(state, data) {
      state.logs = data
    },
    SET_ADMIN_ACTIVITY_LOG(state, data) {
      state.adminlogs = data
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
    async getAdminLogs({commit}, page){
      const res = await API.get(`admin/accountlogs?page=${page}`).then(res => {
        commit('SET_ADMIN_ACTIVITY_LOG', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchAdminLogs({commit}, {page, data}){
      const res = await API.post(`/admin/search/accountlogs?page=${page}`, data).then(res => {
        commit('SET_ADMIN_ACTIVITY_LOG', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}