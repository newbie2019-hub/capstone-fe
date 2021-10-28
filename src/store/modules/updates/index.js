import API from '../../base'

export default {
  namespaced: true,
  state: {
    posts: [],
    post_types: [],
  },
  getters: {
  },
  mutations: {
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
    async getUpdates({commit}, page){
      const res = await API.get(`/admin/posts?page=${page}`).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUpdate({commit}, {page, data}){
      const res = await API.post(`/admin/search/post?page=${page}`, data).then(res => {
        commit('SET_POST', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveUpdate({commit}, data){
      const res = await API.post(`/admin/post`, data).then(res => {
        commit('PUSH_NEW_POST', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updatePost({commit}, data){
      const res = await API.put(`/admin/update/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deletePost({commit}, id){
      const res = await API.delete(`/admin/post/destroy/${id}`).then(res => {
        commit('DELETE_POST', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}