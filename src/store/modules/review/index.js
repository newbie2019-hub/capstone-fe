import API from '../../base'

export default {
  namespaced: true,
  state: {
    reviews: []
  },
  getters: {
  },
  mutations: {
    SET_RATES(state, data) {
      state.reviews = data
    }
  },
  actions: {
    async getReview({commit}, page){
      const res = await API.get(`/admin/rates?page=${page}`).then(res => {
        commit('SET_RATES', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    
  }
}