import API from '../../base'

export default {
  namespaced: true,
  state: {
    members: [],
    posts: [],
    advisers: [],
    orgmembers: {
      data: {
        
      }
    }
  },
  getters: {
  },
  mutations: {
    SET_ADVISERS(state, data) {
      state.advisers = data
    },
    SET_ORG_MEMBERS(state, data) {
      state.orgmembers = data
    },
    SET_MEMBERS(state, data) {
      state.members = data
    },
    SET_POST(state, data) {
      state.posts = data
    },
    UPDATE_MEMBER_STATUS(state, id){
      for(let i = 0; i < state.members.data.length; i++){
        if(state.members.data[i].user.id == id){
          state.members.data[i].user.status = 'Approved'
        }
      }
    },
    UPDATE_ORG_MEMBER_STATUS(state, id){
      for(let i = 0; i < state.orgmembers.data.length; i++){
        if(state.orgmembers.data[i].user.id == id){
          state.orgmembers.data[i].user.status = 'Approved'
        }
      }
    },
  },
  actions: {
    async getMembers({commit}, page){
      const res = await API.get(`/user/members?page=${page}`).then(res => {
        commit('SET_MEMBERS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getAccPosts({commit}, data){
      const res = await API.get(`/user/post`, data).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approveMember({commit}, data){
      console.log(data)
      const res = await API.put(`/user/approveMember/${data.id}`).then(res => {
        commit('UPDATE_MEMBER_STATUS', data.id)
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    async searchMember({commit}, {page, data}){
      const res = await API.post(`/user/search/members?page=${page}`, data).then(res => {
        commit('SET_MEMBERS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteMember({commit}, id){
      const res = await API.delete(`/user/members/${id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    
    /// ORGANIZATION MEMBERS FROM DEPARTMENT SECTION
    //
    async retrieveDepMembers({commit}){
      const res = await API.get(`/admin/organization/advisers`).then(res => {
        commit('SET_ADVISERS', res.data)
        return res;
      }).catch(err => {
        return err.response;
      })
      
      return res;
    },
    async organizationMembers({commit}){
      const res = await API.get(`/admin/organization`).then(res => {
        commit('SET_ORG_MEMBERS', res.data)
        return res;
      }).catch(err => {
        return err.response;
      })
      
      return res;
    },
    async searchOrgMembers({commit}, {page, data}){
      const res = await API.post(`/admin/organization/search?page=${page}`, data).then(res => {
        commit('SET_ORG_MEMBERS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approveOrgMember({commit}, data){
      console.log(data)
      const res = await API.put(`/user/approveOrgMember/${data.id}`).then(res => {
        commit('UPDATE_ORG_MEMBER_STATUS', data.id)
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    async setOrgAdviser({commit}, data){
      const res = await API.post(`/admin/organization/set/adviser`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteOrgMember({commit}, id){
      const res = await API.delete(`/admin/organization/${id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
  }
}