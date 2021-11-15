import API from '../../base'

export default {
  namespaced: true,
  state: {
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
  },
  actions: {
    async getAllActivityLogs({commit}, page){
      const res = await API.get(`admin/activity-logs?page=${page}`).then(res => {
        commit('SET_ACTIVITY_LOG', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}