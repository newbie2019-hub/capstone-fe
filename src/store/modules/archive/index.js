import API from '../../base/'

export default {
  namespaced: true,
  state: {
    unit_accounts: {
      data: '',
    },
    org_accounts: {
      data: '',
    },
    accounts: [],
    update_account: {
      useraccount: {
        userinfo: {
          first_name: '',
          middle_name: '',
          last_name: '',
          contact_number: '',
        }
      }
    },
  },
  getters: {

  },
  mutations: {
  SET_ACCOUNTS(state, data){
    state.accounts = data
  },
  SET_ORG_ACCOUNTS(state, data){
    state.org_accounts = data
  },
  SET_UNIT_ACCOUNTS(state, data){
    state.unit_accounts = data
  },
  },
  actions: {
    async unitAccounts({commit}, page){
     const res = await API.get('/admin/archive/unit_accounts?page=' + page).then(res => {
       commit('SET_UNIT_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async orgAccounts({commit}, page){
     const res = await API.get('/admin/archive/org_accounts?page=' + page).then(res => {
       commit('SET_ORG_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async searchOrgAccount({commit}, {page, data}){
      const res = await API.post(`/admin/archive/search/orgAccounts?page=${page}`, data).then(res => {
        commit('SET_ORG_ACCOUNTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUnitAccount({commit}, {page, data}){
      const res = await API.post(`/admin/archive/search/depAccounts?page=${page}`, data).then(res => {
        commit('SET_UNIT_ACCOUNTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}