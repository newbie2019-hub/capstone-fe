import API from '../../base'

export default {
  namespaced: true,
  state: {
    posts: [],
    post_types: [],
    updatepost: [],
  },
  getters: {
  },
  mutations: {
    APPROVE_POST(state, data) {
      for(let i = 0; i < state.posts.data.length; i++){
        if(state.posts.data[i].id == data.id){
          state.posts.data[i].status = 'Approved'
        }
      }
    },
    SET_UPDATE_POST(state, data){
      state.updatepost = data
    },
    SET_POST(state, data) {
      state.posts = data
    },
    PUSH_NEW_POST(state, data){
      state.posts.data.push(data)
    },
    DELETE_POST(state, id){
      state.posts.data = state.posts.data.filter(posts => {
        return posts.id !== id;
      });
    },
  },
  actions: {
    async getPost({commit}, page){
      const res = await API.get(`/user/posts?page=${page}`).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchPost({commit}, {page, data}){
      const res = await API.post(`/user/search/post?page=${page}`, data).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approvePost({commit}, data){
      const res = await API.put(`/user/post/approve/${data.id}`, data).then(res => {
        commit('APPROVE_POST', data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approveOrgMemberPost({commit}, data){
      const res = await API.put(`/user/post/approve/${data.id}`, data).then(res => {
        // commit('APPROVE_POST', data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approveMemberPost({commit}, data){
      const res = await API.put(`/user/post/approve/${data.id}`).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async savePost({commit}, data){
      const res = await API.post(`/user/post`, data).then(res => {
        commit('PUSH_NEW_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updatePost({commit}, data){
      const res = await API.put(`/user/posts/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deletePost({commit}, id){
      const res = await API.delete(`/user/post/destroy/${id}`).then(res => {
        commit('DELETE_POST', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteOrgMemberPost({commit}, id){
      const res = await API.delete(`/user/post/destroy/${id}`).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

    async getUserPosts({commit}, page){
      const res = await API.get(`/admin/posts?page=${page}`).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUserPosts({commit}, {page, data}){
      const res = await API.post(`/admin/posts/search?page=${page}`, data).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteUserPost({commit}, id){
      const res = await API.delete(`/admin/posts/${id}`).then(res => {
        commit('DELETE_POST', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async restoreUserPost({commit}, id){
      const res = await API.put(`/admin/posts/restore/${id}`).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}