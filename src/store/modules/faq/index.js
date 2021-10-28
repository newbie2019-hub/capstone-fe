import API from '../../base'

export default {
  namespaced: true,
  state: {
    faqs: []
  },
  getters: {
  },
  mutations: {
    SET_FAQS(state, data) {
      state.faqs = data
    },
    PUSH_NEW_FAQ(state, data){
      state.faqs.data.push(data)
    },
    DELETE_FAQ(state, id){
      state.faqs.data = state.faqs.data.filter(faqs => {
        return faqs.id !== id;
      });
    },
  },
  actions: {
    async getFaq({commit}, page){
      const res = await API.get(`/admin/faqs?page=${page}`).then(res => {
        commit('SET_FAQS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchFaqs({commit}, {page, data}){
      const res = await API.post(`/admin/search/faqs?page=${page}`, data).then(res => {
        commit('SET_FAQS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveFaq({commit}, data){
      const res = await API.post(`/admin/faqs`, data).then(res => {
        commit('PUSH_NEW_FAQ', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateFaq({commit}, data){
      const res = await API.put(`/admin/faqs/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteFaq({commit}, id){
      const res = await API.delete(`/admin/faqs/destroy/${id}`).then(res => {
        commit('DELETE_FAQ', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}