import API from '../../base/'

export default {
  namespaced: true,
  state: {
    organizations: {},
    departments: {},
    org_roles: {},
    dep_roles: {},
  },
  getters: {
    
  },
  mutations: {
    SET_ORGANIZATIONS(state, data) {
      state.organizations = data
    },
    SET_DEPARTMENTS(state, data) {
      state.departments = data
    },
    SET_DEPARTMENTS_ROLE(state, data) {
      state.dep_roles = data
    },
    SET_ORGANIZATIONS_ROLE(state, data) {
      state.org_roles = data
    },
    DELETE_ORG_ROLE(state, id){
     state.org_roles.data = state.org_roles.data.filter(org_role => {
       return org_role.id !== id;
     });
    },
    DELETE_DEP_ROLE(state, id){
     state.dep_roles.data = state.dep_roles.data.filter(dep_role => {
       return dep_role.id !== id;
     });
    },
    PUSH_NEW_ORG_ROLE(state, data){
     state.org_roles.data.push(data)
    },
    PUSH_NEW_DEP_ROLE(state, data){
     state.dep_roles.data.push(data)
    },
    UPDATE_DEP_ROLE(state, data){
     for(let i = 0; i < state.dep_roles.data.length; i++){
      if(state.dep_roles.data[i].id == data.role_id){
       state.dep_roles.data[i].role = data.role
      }
     }
    },
    UPDATE_ORG_ROLE(state, data){
     for(let i = 0; i < state.org_roles.data.length; i++){
      if(state.org_roles.data[i].id == data.id){
       state.org_roles.data[i].role = data.role
      }
     }
    },
    PUSH_NEW_DEPARTMENT(state, data){
     state.departments.data.push(data)
    },
    PUSH_NEW_ORGANIZATION(state, data){
     state.organizations.data.push(data)
    },
    UPDATE_DEPARTMENT(state, data){
     for(let i = 0; i < state.departments.data.length; i++){
      if(state.departments.data[i].id == data.id){
       state.departments.data[i].name = data.name
      }
     }
    },
    UPDATE_ORGANIZATION(state, data){
     for(let i = 0; i < state.organizations.data.length; i++){
      if(state.organizations.data[i].id == data.organization_id){
       state.organizations.data[i].organization = data.organization
       state.organizations.data[i].abbreviation = data.abbreviation
      }
     }
    },
    DELETE_ORGANIZATION(state, id){
     state.organizations.data = state.organizations.data.filter(organization => {
       return organization.id !== id;
     });
    },
    DELETE_DEPARTMENT(state, id){
     state.departments.data = state.departments.data.filter(department => {
       return department.id !== id;
     });
    },
    
  },
  actions: {
    async getOrganizations({commit}, page){
      const res = await API.get(`/admin/organizations?page=${page}`).then(res => {
        commit('SET_ORGANIZATIONS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getDepartments({commit}, page){
      const res = await API.get(`/admin/departments?page=${page}`).then(res => {
        commit('SET_DEPARTMENTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getRoleDepartments({commit}, page){
      const res = await API.get(`/admin/departments/roles?page=${page}`).then(res => {
        commit('SET_DEPARTMENTS_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getRoleOrganizations({commit}, page){
      const res = await API.get(`/admin/organizations/roles?page=${page}`).then(res => {
        commit('SET_ORGANIZATIONS_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

    /** DEP AND ORG */
    async saveDepartment({commit}, data){
      const res = await API.post(`/admin/departments`, data).then(res => {
        commit('PUSH_NEW_DEPARTMENT', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateDepartment({commit}, data){
      const res = await API.put(`/admin/departments/${data.id}`, data).then(res => {
        commit('UPDATE_DEPARTMENT', data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteDepartment({commit}, {id, data}){
     let department = {
      department_id: data
     }
     const res = await API.post(`/admin/departments/${id}`, department).then(res => {
       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async searchOrganization({commit}, {page, data}){
      const res = await API.post(`admin/search/organization?page=${page}`, data).then(res => {
        commit('SET_ORGANIZATIONS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveOrganization({commit}, data){
      const res = await API.post(`/admin/organizations`, data).then(res => {
        commit('PUSH_NEW_ORGANIZATION', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateOrganization({commit}, data){
     const res = await API.put(`/admin/organizations/${data.id}`, data).then(res => {
       commit('UPDATE_ORGANIZATION', data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async deleteOrganization({commit}, {id, data}){
     let organization = {
      organization_id: data
     }
     const res = await API.post(`/admin/organizations/${id}`, organization).then(res => {
       commit('DELETE_ORGANIZATION', id)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async searchDepartment({commit}, {page, data}){
      const res = await API.post(`/admin/search/department?page=${page}`, data).then(res => {
        commit('SET_DEPARTMENTS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

    /** ROLE DEP AND ORG */
    async saveDepRole({commit}, role){
      const res = await API.post(`/admin/departments/role`, role).then(res => {
        commit('PUSH_NEW_DEP_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveOrgRole({commit}, role){
      const res = await API.post(`/admin/organizations/role`, role).then(res => {
        commit('PUSH_NEW_ORG_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateDepRole({commit}, data){
      const res = await API.put(`/admin/departments/role/${data.role_id}`, data).then(res => {
        commit('UPDATE_DEP_ROLE', data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateOrgRole({commit}, data){
      const res = await API.put(`/admin/organizations/role/${data.id}`, data).then(res => {
        commit('UPDATE_ORG_ROLE', data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteOrgRole({commit}, {id, role}){
     let role_id = {
      role_id: role
     }
      const res = await API.post(`/admin/organizations/role/${id}`, role_id).then(res => {
        commit('DELETE_ORG_ROLE', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteDepRole({commit}, {id, role}){
      let role_id = {
       role_id: role
      }
      const res = await API.post(`/admin/departments/role/${id}`, role_id).then(res => {
        commit('DELETE_DEP_ROLE', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchDepartmentRole({commit}, {page, data}){
      const res = await API.post(`/admin/search/department/role?page=${page}`, data).then(res => {
        commit('SET_DEPARTMENTS_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchOrganizationRole({commit}, {page, data}){
      const res = await API.post(`/admin/search/organization/role?page=${page}`, data).then(res => {
        commit('SET_ORGANIZATIONS_ROLE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
  }
}