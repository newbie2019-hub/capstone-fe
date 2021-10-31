<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">College and Basic Education</h5>
                <p class="mb-4"><small>Manage colleges below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <button v-on:click.prevent="$bvModal.show('newCollegeModal')" class="btn btn-purple btn-sm me-2"><i class="bi bi-plus-circle"></i> Add Entry</button>
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
                    <td >{{college.name}}</td>
                    <td class="text-nowrap">{{college.dean}}</td>
                    <td>{{college.abbreviation}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="updateCollege = college; $bvModal.show('updateCollegeModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
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
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4 mt-3">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Goals</h5>
                <p class="mb-4"><small>Manage goals below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <button v-on:click.prevent="$bvModal.show('newGoalModal')" class="btn btn-purple btn-sm me-2"><i class="bi bi-plus-circle"></i> New Goal</button>
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input type="text" v-model="search_goal" class="form-control" id="floatingSearchGoal" placeholder="Search here">
                  <label  for="floatingSearchGoal" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="goals.data == 0" class="text-center">No goals found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isGoalSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{goals.from}} to {{goals.to}} out of {{goals.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Goals</th>
                    <th scope="col" class="text-nowrap">For</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(goal, i) in goals.data" :key="i">
                    <td >{{goal.goal}}</td>
                    <td class="text-nowrap">{{goal.college.name}} ({{goal.college.abbreviation}})</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="goalUpdate = goal; $bvModal.show('updateGoalModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteGoal = goal.id; $bvModal.show('deleteGoalModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="goals.data">
              <pagination :showDisabled="true" :align="'right'" :data="goals"  @pagination-change-page="goalSearch">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4 mt-3">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Objectives</h5>
                <p class="mb-4"><small>Manage objectives below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newObjectiveModal')" class="btn btn-purple"><i class="bi bi-card-checklist"></i> New Objective</button>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_objective" class="form-control" id="floatingSearchObjective" placeholder="Search here">
                  <label  for="floatingSearchObjective" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="objectives.data == 0" class="text-center">No objectives found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isObjectiveSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{objectives.to}} out of {{objectives.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Objectives</th>
                    <th scope="col" class="text-nowrap">For</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(objective, i) in objectives.data" :key="i">
                    <td >{{objective.objective}}</td>
                    <td class="text-nowrap">{{objective.college.name}} ({{objective.college.abbreviation}})</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="objectiveUpdate = JSON.parse(JSON.stringify(objective)); $bvModal.show('updateObjectiveModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteObjective = objective.id; $bvModal.show('deleteObjectiveModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="objectives.data">
              <pagination :showDisabled="true" :align="'right'" :data="objectives"  @pagination-change-page="objectiveSearch">>
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW COLLEGES MODAL --->
    <b-modal id="newCollegeModal" centered title="New College">
        <div class="form-floating mb-4 mt-3 ">
        <input v-model="college.name" type="text" class="form-control" id="newCollegeName" placeholder="" autocomplete="off">
        <label class="text-muted" for="newCollegeName">Name</label>
        </div>
        <div class="form-floating mb-4 mt-3 ">
        <input v-model="college.dean" type="text" class="form-control" id="newCollegeDean" placeholder="" autocomplete="off">
        <label class="text-muted" for="newCollegeDean">Dean <small>(not applicable for Basic Education)</small></label>
        </div>
        <div class="form-floating mb-2 mt-3 ">
        <input v-model="college.abbreviation" type="text" class="form-control text-uppercase" id="newCollegeAbbreviation" placeholder="name@example.com" autocomplete="off">
        <label class="text-muted" for="newCollegeAbbreviation">Abbreviation</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveCollege" :disabled="isLoading">
            Save
        </b-button>
        </template>
    </b-modal>

    <!-- UPDATE COLLEGES MODAL --->
    <b-modal id="updateCollegeModal" centered title="Update Contact">
        <div class="form-floating mb-4 mt-3 ">
        <input v-model="updateCollege.name" type="text" class="form-control" id="updateCollegeName" placeholder="name@example.com" autocomplete="off">
        <label class="text-muted" for="updateCollegeName">Name</label>
        </div>
        <div class="form-floating mb-4 mt-3 ">
        <input v-model="updateCollege.dean" type="text" class="form-control" id="updateCollegeDean" placeholder="name@example.com" autocomplete="off">
        <label class="text-muted" for="updateCollegeDean">Dean <small>(not applicable for Basic Education)</small></label>
        </div>
        <div class="form-floating mb-2 mt-3 ">
        <input v-model="updateCollege.abbreviation" type="text" class="form-control text-uppercase" id="updateCollegeAbbreviation" placeholder="name@example.com" autocomplete="off">
        <label class="text-muted" for="updateCollegeAbbreviation">Abbreviation</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateColleges" :disabled="isLoading">
            Update
        </b-button>
        </template>
    </b-modal>

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

    <b-modal id="deleteGoalModal" centered title="Confirm Delete">
        <p class="">Are you sure you want to delete this goal?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyGoal" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>

    <b-modal id="newGoalModal" centered title="New Goal">
        <label for="newGoalFor">College/Basic Education</label>
        <select v-model="goal.academic" class="form-select" id="newGoalFor">
        <option disabled value="" v-text="disabledOption"></option>
          <option v-for="(college, j) in colleges.data" :key="j" :value="college.id" :selected="selected">{{college.name}}</option>
        </select>
        <div class="form-floating mb-4 mt-4">
        <textarea v-model="goal.goal_content" type="text" class="form-control" id="newGoal" placeholder="name@example.com" autocomplete="off" style="height: 100px !important;"></textarea>
        <label class="text-muted" for="newGoal">Type your goal here</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveGoal" :disabled="isLoading">
            Save Goal
        </b-button>
        </template>
    </b-modal>

    <b-modal id="updateGoalModal" centered title="Update Goal">
        <div class="form-floating mb-4 mt-4 ">
        <textarea v-model="goalUpdate.goal" type="text" class="form-control" id="" placeholder="Enter your new goal here" autocomplete="off" style="height: 100px !important;"></textarea>
        <label class="text-muted" for="">Update your goal here</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateGoal" :disabled="isLoading">
            Update Goal
        </b-button>
        </template>
    </b-modal>

    <b-modal id="deleteObjectiveModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this objective?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyObjective" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>

    <b-modal id="newObjectiveModal" centered title="New Objective">
        <label for="newObjectiveFor">College/Basic Education</label>
        <select v-model="objective.academic" class="form-select" id="newObjectiveFor">
        <option disabled value="" v-text="disabledOption"></option>
          <option v-for="(college, j) in colleges.data" :key="j" :value="college.id" :selected="selected">{{college.name}}</option>
        </select>
        <div class="form-floating mb-4 mt-4">
        <textarea v-model="objective.objective_content" type="text" class="form-control" id="newObjective" placeholder="name@example.com" style="height: 80px !important;"></textarea>
        <label class="" for="newObjective">Type your Objective here</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveObjective" :disabled="isLoading">
            Save Objective
        </b-button>
        </template>
    </b-modal>

    <b-modal id="updateObjectiveModal" centered title="Update Objective">
        <div class="form-floating mb-4 mt-4 ">
        <textarea v-model="objectiveUpdate.objective" type="text" class="form-control" id="" placeholder="Update your objective" style="height: 80px !important;"></textarea>
        <label class="" for="">Enter your updated objective</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateObjective" :disabled="isLoading">
            Update Objective
        </b-button>
        </template>
    </b-modal>
 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

export default {
    data(){
    return {
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       isGoalSearching: false,
       isCollegeSearching: false,
       isObjectiveSearching: false,
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
       deleteGoal: '',
       deleteObjective: '',
       search_goal: '',
       search_objective: '',
       selected: '1'
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
     ...mapState('universityinfo', ['colleges', 'goals', 'objectives']),
  },
  watch: {
    search_college(before, after){
      this.debouncedCollegeSearch()
    },
    search_goal(before, after){
      this.debouncedGoalSearch()
    },
    search_objective(before, after){
      this.debouncedObjectiveSearch()
    },
  },
  created: function () {
    this.debouncedCollegeSearch = _.debounce(this.collegeSearch, 1000)
    this.debouncedGoalSearch = _.debounce(this.goalSearch, 1000)
    this.debouncedObjectiveSearch = _.debounce(this.objectiveSearch, 1000)
  },
  async mounted(){
    document.title = "Goals and Objetives - Touchless Information Management"
    this.initialLoading = true
    await this.$store.dispatch('universityinfo/getCollege', 1);
    await this.$store.dispatch('universityinfo/getGoal', 1);
    await this.$store.dispatch('universityinfo/getObjective', 1);
    this.initialLoading = false
  },
  methods: {
    async saveCollege(){
      if(this.college.name == '') return this.$toast.error('Name is required!');  
      if(this.college.abbreviation == '') return this.$toast.error('Abbreviation is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveCollege', this.college)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCollege', 1);
        this.$toast.success('College added successfully!')
        this.$bvModal.hide('newCollegeModal')
        this.college = {name: '', abbreviation: '', dean: ''}
      }
      this.isLoading = false
    },
    async updateColleges(){
      if(this.updateCollege.name == '') return this.$toast.error('Name is required!');  
      if(this.updateCollege.abbreviation == '') return this.$toast.error('Abbreviation is required!');
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateCollege', this.updateCollege)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCollege', 1);
        this.$toast.success('College updated successfully!')
        this.$bvModal.hide('updateCollegeModal')
        this.updateCollege = {name: '', abbreviation: '', dean: ''}
      }
      this.isLoading = false
    },
    async updateGoal(){
      if(this.goalUpdate.goal == '') return this.$toast.error('Goal is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateGoal', this.goalUpdate)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getGoal', 1);
        this.$toast.success('Goal updated successfully!')
        this.$bvModal.hide('updateGoalModal')
        this.goalUpdate = {goal: ''}
      }
      this.isLoading = false
    },
    async updateObjective(){
      if(this.objectiveUpdate.objective == '') return this.$toast.error('Objective is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateObjective', this.objectiveUpdate)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getObjective', 1);
        this.$toast.success('Objective updated successfully!')
        this.$bvModal.hide('updateObjectiveModal')
        this.objectiveUpdate = {objective: ''}
      }
      this.isLoading = false
    },
    async destroyCollege(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteCollege', this.deleteCollege)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getCollege', 1);
            await this.$store.dispatch('universityinfo/getGoal', 1);
            this.$toast.success('College deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async destroyGoal(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteGoal', this.deleteGoal)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getGoal', 1);
            this.$toast.success('Goal deleted successfully!')
            this.$bvModal.hide('deleteGoalModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async destroyObjective(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteObjective', this.deleteObjective)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getObjective', 1);
            this.$toast.success('Objective deleted successfully!')
            this.$bvModal.hide('deleteObjectiveModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async getCollege(page){
       await this.$store.dispatch('universityinfo/getCollege', page);
    },
    async getObjective(page){
       await this.$store.dispatch('universityinfo/getObjective', page);
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
    async getGoal(page){
       await this.$store.dispatch('universityinfo/getGoal', page);
    },
    async searchGoal(page){
      this.isGoalSearching = true
      let data = {
        searchgoal: this.search_goal
      }
      await this.$store.dispatch('universityinfo/searchGoal', {page: page, data: data})
      this.isGoalSearching = false
    },
    async searchObjective(page){
      this.isObjectiveSearching = true
      let data = {
        searchobjective: this.search_objective
      }
      await this.$store.dispatch('universityinfo/searchObjective', {page: page, data: data})
      this.isObjectiveSearching = false
    },
    goalSearch(page = 1){
      if(this.search_goal == ''){
        this.getGoal(page)
      }
      else {
        this.searchGoal(page)
      }
    },
    objectiveSearch(page = 1){
      if(this.search_objective == ''){
        this.getObjective(page)
      }
      else {
        this.searchObjective(page)
      }
    },
    async saveGoal(){
      if(this.goal.academic == 0) return this.$toast.error('Education is required!');  
      if(this.goal.goal_content == '') return this.$toast.error('Goal is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveGoal', this.goal)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getGoal', 1);
        this.$toast.success('Goal added successfully!')
        this.$bvModal.hide('newGoalModal')
        this.goal = {goal: ''}
      }
      this.isLoading = false
    },
    async saveObjective(){
      if(this.objective.academic == 0) return this.$toast.error('Education is required!');  
      if(this.objective.objective_content == '') return this.$toast.error('Objective is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveObjective', this.objective)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getObjective', 1);
        this.$toast.success('Objective added successfully!')
        this.$bvModal.hide('newObjectiveModal')
        this.objective = {objective: ''}
      }
      this.isLoading = false
    },
  },
}
</script>