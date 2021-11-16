<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-5 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">College and Basic Education</h5>
                <p class="mb-4"><small>Manage colleges below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <router-link to="basiceducandcolleges/create" class="btn btn-purple btn-sm me-2 d-flex align-items-center"><i class="bi bi-plus-circle me-2"></i> Add Entry</router-link>
              <div class="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input type="text" v-model="search_college" class="form-control" id="floatingSearchCollege" placeholder="Search here">
                  <label  for="floatingSearchCollege" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="colleges.data == 0">No college or basic education found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isCollegeSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{colleges.from}} to {{colleges.to}} out of {{colleges.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Name</th>
                    <th scope="col" class="text-nowrap">Dean</th>
                    <th scope="col" class="text-nowrap">Abbreviation</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(college, i) in colleges.data" :key="i">
                    <td class="cursor-pointer" @click.prevent="collegeInfo = college; $bvModal.show('collegeInfoModal')">{{college.name}}</td>
                    <td class="cursor-pointer text-nowrap" @click.prevent="collegeInfo = college; $bvModal.show('collegeInfoModal')">{{college.dean}}</td>
                    <td class="cursor-pointer" @click.prevent="collegeInfo = college; $bvModal.show('collegeInfoModal')">{{college.abbreviation}}</td>
                    <td>
                      <div class="d-flex">
                        <button @click.prevent="setUpdateData(college)" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteCollege = college.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="colleges.data">
              <pagination :showDisabled="true" :align="'right'" :data="colleges"  @pagination-change-page="collegeSearch">>
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <!-- DELETE MODAL --->
  <b-modal id="deleteModal" centered title="Confirm Delete">
      <p class="">Are you sure you want to delete this?</p>
      <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="danger" v-on:click.prevent="destroyCollege" :disabled="isLoading">
          Delete
      </b-button>
      </template>
  </b-modal>

  <b-modal id="collegeInfoModal" scrollable centered title="College Information">
      <h5 class="mt-1">Name: {{collegeInfo.name}}</h5>
      <h5 :class="collegeInfo.dean ? '':'text-muted'">Dean: {{collegeInfo.dean ? collegeInfo.dean : 'No data found'}}</h5>
      <div v-if="collegeInfo.goals != 0">
        <h5 class="mt-3">Goals: </h5>
        <p class="mt-1" v-for="(goal, i) in collegeInfo.goals" :key="i">{{i + 1}}. {{goal.goal}}</p>
      </div>
      <div v-if="collegeInfo.objectives != 0">
        <h5 class="mt-3">Objectives: </h5>
        <p class="mt-1" v-for="(objective, i) in collegeInfo.objectives" :key="i">{{i + 1}}. {{objective.objective}}</p>
      </div>
      <template #modal-footer = {cancel} >
        <b-button variant="secondary" @click="cancel()"> Close </b-button>
      </template>
  </b-modal>
 </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

export default {
    data(){
      return {
        collegeInfo: {
          name: '',
          dean: '',
          objective: {
            objective: ''
          }
        },
        initialLoading: false,
        isLoading: false,
        isSearching: false,
        isCollegeSearching: false,
        search_college: '',
        college: {
            name: '',
            dean: '',
            abbreviation: ''
        },
        goal: {
            academic: '',
            goal_content: '',
        },
        goalUpdate: {
            academic: '',
            goal_content: '',
        },
        objective: {
            academic: '',
            objective_content: '',
        },
        objectiveUpdate: {
            academic: '',
            objective_content: '',
        },
        updateCollege: {
            name: '',
            abbreviation: '',
            dean: '',
        },
        deleteCollege: '',
        search_goal: '',
        search_objective: '',
      }
  },
  props: {
    disabledOption: {
      type: String,
      default: 'Select education',
    },
  },
    filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  computed: {
     ...mapState('auth', ['user']),
     ...mapState('universityinfo', ['colleges']),
  },
  watch: {
    search_college(before, after){
      this.debouncedCollegeSearch()
    },
  },
  created: function () {
    this.debouncedCollegeSearch = _.debounce(this.collegeSearch, 800)
  },
  async mounted(){
    document.title = "Colleges and Basic Education - Touchless Information Management"
    this.initialLoading = true
    await this.$store.dispatch('universityinfo/getCollege', 1);
    this.initialLoading = false
  },
  methods: {
    setUpdateData(data){
      this.$store.commit('universityinfo/SET_UPDATE_COLLEGE', data)
      this.$router.push('basiceducandcolleges/update')
    },
    async destroyCollege(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteCollege', this.deleteCollege)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getCollege', 1);
            this.$toast.success('College deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async getCollege(page){
       await this.$store.dispatch('universityinfo/getCollege', page);
    },
    async searchCollege(page){
      this.isCollegeSearching = true
      let data = {
        search: this.search_college
      }
      await this.$store.dispatch('universityinfo/searchCollege', {page: page, data: data})
      this.isCollegeSearching = false
    },
    collegeSearch(page = 1){
      if(this.search_college == ''){
        this.getCollege(page)
      }
      else {
        this.searchCollege(page)
      }
    },
  },
}
</script>