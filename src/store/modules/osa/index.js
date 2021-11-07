import API from '../../base'

export default {
  namespaced: true,
  state: {
    faqs: [],
    contacts: [],
    organizations: [],
    posts: [],
    schedule: '',
  },
  getters: {
  },
  mutations: {
    SET_ARCHIVED(state, data) {
      state.posts = data
    },
    SET_SCHEDULE(state, data) {
      state.schedule = data
    },
    SET_ORGANIZATIONS(state, data) {
      state.organizations = data
    },
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
    SET_TELEPHONE_DIRECTORIES(state, data){
     state.contacts = data
    },
    PUSH_NEW_TELEPHONE(state, data){
      state.contacts.data.push(data)
    },
    DELETE_TEL(state, id){
      state.contacts.data = state.contacts.data.filter(contacts => {
        return contacts.id !== id;
      });
    },
  },
  actions: {
    async getFaq({commit}, page){
      const res = await API.get(`/user/faqs?page=${page}`).then(res => {
        commit('SET_FAQS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchFaqs({commit}, {page, data}){
      const res = await API.post(`/user/search/faqs?page=${page}`, data).then(res => {
        commit('SET_FAQS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveFaq({commit}, data){
      const res = await API.post(`/user/faqs`, data).then(res => {
        commit('PUSH_NEW_FAQ', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateFaq({commit}, data){
      const res = await API.put(`/user/faqs/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteFaq({commit}, id){
      const res = await API.delete(`/user/faqs/destroy/${id}`).then(res => {
        commit('DELETE_FAQ', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

     /** TELEPHONE */
     async getTel({commit}, page){
      const res = await API.get(`/user/tel_directory?page=${page}`).then(res => {
       commit('SET_TELEPHONE_DIRECTORIES', res.data)
 
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },
     async saveTel({commit}, data){
      const res = await API.post(`/user/new_telephone`, data).then(res => {
        commit('PUSH_NEW_TELEPHONE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateTel({commit}, data){
      const res = await API.put(`/user/telephone/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteTel({commit}, id){
      const res = await API.delete(`/user/telephone/destroy/${id}`).then(res => {
        commit('DELETE_TEL', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchTel({commit}, {page, data}){
      const res = await API.post(`/user/search/telephone?page=${page}`, data).then(res => {
        commit('SET_TELEPHONE_DIRECTORIES', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

    /** ORGANIZATION */
    async getOrganizations({commit}, page){
      const res = await API.get(`/user/osa/organizations?page=${page}`).then(res => {
       commit('SET_ORGANIZATIONS', res.data)
 
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },

    /** ARCHIVED */
    async getArchived({commit}, page){
      const res = await API.get(`/user/osa/archived?page=${page}`).then(res => {
       commit('SET_ARCHIVED', res.data)
 
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },

     /** SET DELETE SCHEDULE */
    async saveSchedule({commit}, data){
    const res = await API.post(`/user/setSchedule`, data).then(res => {  
        return res;
      }).catch(err => {
      return err.response;
      })

      return res;
    },
    async getSchedule({commit}){
    const res = await API.post(`/user/getSchedule`).then(res => {  
        commit('SET_SCHEDULE', res.data)
        return res;
      }).catch(err => {
      return err.response;
      })

      return res;
    }
  }
}