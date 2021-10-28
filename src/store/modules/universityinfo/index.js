import API from '../../base/'

export default {
  namespaced: true,
  state: {
    officials: [],
    info: [],
    core_values: [],
    contacts: [],
    colleges: [],
    courses: [],
    course_objectives: [],
    goals: [],
    objectives: [],
    update_official: ''
  },
  getters: {
  },
  mutations: {
    SET_SCHOOL_OFFICIALS(state, data) {
      state.officials = data
    },
    SET_SCHOOL_INFO(state, data){
      state.info = data
    },
    SET_CORE_VALUES(state, data){
     state.core_values = data
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
    SET_COLLEGE(state, data){
     state.colleges = data
    },
    PUSH_NEW_COLLEGE(state, data){
      state.colleges.data.push(data)
    },
    DELETE_COLLEGE(state, id){
      state.colleges.data = state.colleges.data.filter(colleges => {
        return colleges.id !== id;
      });
    },
    SET_COURSE(state, data){
     state.courses = data
    },
    PUSH_NEW_COURSE(state, data){
      state.courses.data.push(data)
    },
    DELETE_COURSE(state, id){
      state.courses.data = state.courses.data.filter(courses => {
        return courses.id !== id;
      });
    },
    SET_COURSE_OBJECTIVE(state, data){
     state.course_objectives = data
    },
    PUSH_NEW_COURSE_OBJECTIVE(state, data){
      state.course_objectives.data.push(data)
    },
    DELETE_COURSE_OBJECTIVE(state, id){
      state.course_objectives.data = state.course_objectives.data.filter(course_objectives => {
        return course_objectives.id !== id;
      });
    },
    SET_GOAL(state, data){
     state.goals = data
    },
    PUSH_NEW_GOAL(state, data){
      state.goals.data.push(data)
    },
    DELETE_GOAL(state, id){
      state.goals.data = state.goals.data.filter(goals => {
        return goals.id !== id;
      });
    },
    SET_OBJECTIVE(state, data){
     state.objectives = data
    },
    PUSH_NEW_OBJECTIVE(state, data){
      state.objectives.data.push(data)
    },
    SET_UPDATE_ACCOUNT(state, {data}){
      state.update_official = data
    },
  },
  actions: {
    async getUniOfficials({commit}, page){
      const res = await API.get(`/admin/school_officials?page=${page}`).then(res => {
        commit('SET_SCHOOL_OFFICIALS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getUniInfo({commit}){
     const res = await API.get('/admin/university_info').then(res => {
      commit('SET_SCHOOL_INFO', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async getCoreValues({commit}){
     const res = await API.get('/admin/corevalues').then(res => {
      commit('SET_CORE_VALUES', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async getTel({commit}, page){
     const res = await API.get(`/admin/tel_directory?page=${page}`).then(res => {
      commit('SET_TELEPHONE_DIRECTORIES', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async saveOfficial({commit}, data){
      const res = await API.post(`/admin/school_officials`, data).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateOfficial({commit}, data){
      const res = await API.put(`/admin/school_officials/${data.id}`, data).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchUniversityOfficial({commit}, {page, data}){
      const res = await API.post(`/admin/school_officials/search?page=${page}`, data).then(res => {
        commit('SET_SCHOOL_OFFICIALS', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },

    /** TELEPHONE */
    async saveTel({commit}, data){
      const res = await API.post(`/admin/new_telephone`, data).then(res => {
        commit('PUSH_NEW_TELEPHONE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateTel({commit}, data){
      const res = await API.put(`/admin/telephone/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteTel({commit}, id){
      const res = await API.delete(`/admin/telephone/destroy/${id}`).then(res => {
        commit('DELETE_TEL', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchTel({commit}, {page, data}){
      const res = await API.post(`/admin/search/telephone?page=${page}`, data).then(res => {
        commit('SET_TELEPHONE_DIRECTORIES', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getCollege({commit}, page){
     const res = await API.get(`/admin/college?page=${page}`).then(res => {
      commit('SET_COLLEGE', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async saveCollege({commit}, data){
      const res = await API.post(`/admin/new_college`, data).then(res => {
        commit('PUSH_NEW_COLLEGE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateCollege({commit}, data){
      const res = await API.put(`/admin/college/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteCollege({commit}, id){
      const res = await API.delete(`/admin/college/destroy/${id}`).then(res => {
        commit('DELETE_COLLEGE', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchCollege({commit}, {page, data}){
      const res = await API.post(`/admin/search/college?page=${page}`, data).then(res => {
        commit('SET_COLLEGE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getCourse({commit}, page){
      const res = await API.get(`/admin/course?page=${page}`).then(res => {
       commit('SET_COURSE', res.data)
 
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },
    async saveCourse({commit}, data){
      const res = await API.post(`/admin/new_course`, data).then(res => {
        commit('PUSH_NEW_COURSE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateCourse({commit}, data){
      const res = await API.put(`/admin/course/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteCourse({commit}, id){
      const res = await API.delete(`/admin/course/destroy/${id}`).then(res => {
        commit('DELETE_COURSE', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchCourse({commit}, {page, data}){
      const res = await API.post(`/admin/search/course?page=${page}`, data).then(res => {
        commit('SET_COURSE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getCourseObjective({commit}, page){
      const res = await API.get(`/admin/courseobjective?page=${page}`).then(res => {
       commit('SET_COURSE_OBJECTIVE', res.data)
 
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },
    async saveCourseObjective({commit}, data){
      const res = await API.post(`/admin/new_course_objective`, data).then(res => {
        commit('PUSH_NEW_COURSE_OBJECTIVE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateCourseObjective({commit}, data){
      const res = await API.put(`/admin/courseobjective/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteCourseObjective({commit}, id){
      const res = await API.delete(`/admin/courseobjective/destroy/${id}`).then(res => {
        commit('DELETE_COURSE_OBJECTIVE', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchCourseObjective({commit}, {page, data}){
      const res = await API.post(`/admin/search/courseobjective?page=${page}`, data).then(res => {
        commit('SET_COURSE_OBJECTIVE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getGoal({commit}, page){
     const res = await API.get(`/admin/goal?page=${page}`).then(res => {
      commit('SET_GOAL', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async saveGoal({commit}, data){
      const res = await API.post(`/admin/new_goal`, data).then(res => {
        commit('PUSH_NEW_GOAL', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateGoal({commit}, data){
      const res = await API.put(`/admin/goal/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteGoal({commit}, id){
      const res = await API.delete(`/admin/goal/destroy/${id}`).then(res => {
        commit('DELETE_GOAL', id)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async searchGoal({commit}, {page, data}){
      const res = await API.post(`/admin/search/goal?page=${page}`, data).then(res => {
        commit('SET_GOAL', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getObjective({commit}, page){
     const res = await API.get(`/admin/objective?page=${page}`).then(res => {
      commit('SET_OBJECTIVE', res.data)

       return res;
     }).catch(err => {
      return err.response;
     })

     return res;
    },
    async saveObjective({commit}, data){
      const res = await API.post(`/admin/new_objective`, data).then(res => {
        commit('PUSH_NEW_OBJECTIVE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateObjective({commit}, data){
      const res = await API.put(`/admin/objective/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteObjective({commit}, id){
      const res = await API.delete(`/admin/objective/destroy/${id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    async searchObjective({commit}, {page, data}){
      const res = await API.post(`/admin/search/objective?page=${page}`, data).then(res => {
        commit('SET_OBJECTIVE', res.data)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveMission({commit}, data){
      const res = await API.put(`/admin/mission/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveVision({commit}, data){
      const res = await API.put(`/admin/vision/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async saveCV({commit}, data){
      const res = await API.put(`/admin/corevalues/${data.id}`, data).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async deleteOfficial({commit}, data){
      const res = await API.delete(`/admin/school_officials/${data.id}`).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })
 
      return res;
     },

  }
}