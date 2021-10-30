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
  UPDATE_ORGACC_STATUS(state, id){
    for(let i = 0; i < state.org_accounts.data.length; i++){
      if(state.org_accounts.data[i].id == id){
        state.org_accounts.data[i].status = 'Approved'
      }
    }
  },
  UPDATE_UNITACC_STATUS(state, id){
    for(let i = 0; i < state.unit_accounts.data.length; i++){
      if(state.unit_accounts.data[i].id == id){
        state.unit_accounts.data[i].status = 'Approved'
      }
    }
  },
  SET_UPDATE_ACCOUNT(state, {data, type}){
    state.update_account = data
    state.update_account.type = type
  },
   
  },
  actions: {
    async approveAccount({commit}, id){
      const res = await API.put(`/admin/approve_account/${id}`).then(res => {
        commit('dashboard/REMOVE_ACC', id, {root: true})
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async approveAccountType({commit}, id){
      const res = await API.put(`/admin/approve_account/${id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    async deleteAccount({commit}, id){
      const res = await API.delete(`/admin/accounts/destroy/${id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    async allAccounts({commit}){
     const res = await API.get('/admin/all_accounts').then(res => {
       commit('SET_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async unitAccounts({commit}, page){
     const res = await API.get('/admin/unit_accounts?page=' + page).then(res => {
       commit('SET_UNIT_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async pendingUnitAccounts({commit}, page){
     const res = await API.get('/admin/pending/unit_accounts?page=' + page).then(res => {
       commit('SET_UNIT_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async approvedUnitAccounts({commit}, page){
     const res = await API.get('/admin/approved/unit_accounts?page=' + page).then(res => {
       commit('SET_UNIT_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    
    async orgAccounts({commit}, page){
     const res = await API.get('/admin/org_accounts?page=' + page).then(res => {
       commit('SET_ORG_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async approvedOrgAccounts({commit}, page){
     const res = await API.get(`/admin/approved/org_accounts?page=${page}`).then(res => {
       commit('SET_ORG_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async pendingOrgAccounts({commit}, page){
     const res = await API.get('/admin/pending/org_accounts?page=' + page).then(res => {
       commit('SET_ORG_ACCOUNTS', res.data)
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async searchOrgAccount({commit}, {page, data}){
      const res = await API.post(`/admin/search/orgAccounts?page=${page}`, data).then(res => {
        commit('SET_ORG_ACCOUNTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateAccount({commit}, data){
      const res = await API.post(`auth/admin/userUpdate/${data.id}`, data).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUnitAccount({commit}, {page, data}){
      const res = await API.post(`/admin/search/depAccounts?page=${page}`, data).then(res => {
        commit('SET_UNIT_ACCOUNTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}