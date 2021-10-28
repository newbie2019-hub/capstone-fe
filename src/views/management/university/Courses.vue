<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Courses Offered</h5>
                <p class="mb-4"><small>Manage courses below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newCourseModal')" class="btn btn-purple"><i class="bi bi-book"></i> Add Course</button>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_course" class="form-control" id="floatingSearchCollege" placeholder="Search here">
                  <label  for="floatingSearchCollege" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="courses.data == 0">No course found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isCourseSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{courses.from}} to {{courses.to}} out of {{courses.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Course</th>
                    <th scope="col" class="text-nowrap">College</th>
                    <th scope="col" class="text-nowrap">Abbreviation</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(course, i) in courses.data" :key="i">
                    <td >{{course.course_name}}</td>
                    <td >{{course.college.name}}</td>
                    <td>{{course.course_abbreviation}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="updateCourse = course; $bvModal.show('updateCourseModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteCourse = course.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="courses.data">
              <pagination :showDisabled="true" :align="'right'" :data="courses"  @pagination-change-page="courseSearch">>
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Course Objectives</h5>
                <p class="mb-4"><small>Manage course objectives below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newCourseObjectiveModal')" class="btn btn-purple"><i class="bi bi-book"></i> Add Objective</button>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_course_objective" class="form-control" id="floatingSearchCollege" placeholder="Search here">
                  <label  for="floatingSearchCollege" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="course_objectives.data == 0">No objectives found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isCourseObjectiveSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{course_objectives.from}} to {{course_objectives.to}} out of {{course_objectives.total}} data</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th scope="col" class="text-nowrap">Objective</th>
                    <th scope="col" class="text-nowrap">Course</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(courseobj, i) in course_objectives.data" :key="i">
                    <th>{{course_objectives.from + i}}</th>
                    <td >{{courseobj.course_objective}}</td>
                    <td >{{courseobj.course.course_name}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="updateCourseObjective = courseobj; $bvModal.show('updateCourseObjectiveModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteCourseObjective = courseobj.id; $bvModal.show('deleteObjectiveModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="course_objectives.data">
              <pagination :showDisabled="true" :align="'right'" :data="course_objectives"  @pagination-change-page="courseObjectiveSearch">>
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW COURSE MODAL --->
    <b-modal id="newCourseModal" centered title="New Course">
        <div class="form-floating mb-4 mt-3 ">
        <input v-model="course.name" type="text" class="form-control" id="newCourseName" placeholder="" autocomplete="off">
        <label class="text-muted" for="newCourseName">Course</label>
        </div>
        <div class="form-floating mb-2 mt-4 ">
        <input v-model="course.abbreviation" type="text" class="form-control text-uppercase" id="newCourseAbbreviation" placeholder="" autocomplete="off">
        <label class="text-muted" for="newCourseAbbreviation">Abbreviation</label>
        </div>
        <select v-model="course.college" class="form-select" id="newGoalFor">
        <option disabled value="" v-text="disabledOption"></option>
          <option v-for="(college, j) in colleges.data" :key="j" :value="college.id">{{college.name}}</option>
        </select>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveCourse" :disabled="isLoading">
            Save
        </b-button>
        </template>
    </b-modal>

    <b-modal id="newCourseObjectiveModal" centered title="New Course">
        <div class="form-floating mb-4 mt-3 ">
        <textarea v-model="course_objective.objective" type="text" class="form-control" id="newCourseObjectiveName" placeholder="" autocomplete="off" style="height: 100px !important;"></textarea>
        <label class="text-muted" for="newCourseObjectiveName">Course Objective</label>
        </div>
        <select v-model="course_objective.college" class="form-select" id="newGoalFor">
        <option disabled value="" v-text="disabledOption1"></option>
          <option v-for="(cor, i) in courses.data" :key="i" :value="cor.id">{{cor.course_name}}</option>
        </select>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveCourseObjective" :disabled="isLoading">
            Save
        </b-button>
        </template>
    </b-modal>

    <!-- UPDATE COURSE MODAL --->
    <b-modal id="updateCourseModal" centered title="Update Course">
        <div class="form-floating mb-4 mt-3 ">
          <input v-model="updateCourse.college.name" type="text" class="form-control" id="updateCourseName" placeholder="name@example.com" disabled readonly>
          <label class="text-muted" for="updateCourseName">For</label>
        </div>
        <div class="form-floating mb-4 mt-3 ">
          <input v-model="updateCourse.course_name" type="text" class="form-control" id="updateCourseName" placeholder="name@example.com">
          <label class="text-muted" for="updateCourseName">Name</label>
        </div>
        <div class="form-floating mb-2 mt-3 ">
        <input v-model="updateCourse.course_abbreviation" type="text" class="form-control text-uppercase" id="updateCourseAbbreviation" placeholder="name@example.com">
        <label class="text-muted" for="updateCourseAbbreviation">Abbreviation</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateCourses" :disabled="isLoading">
            Update
        </b-button>
        </template>
    </b-modal>
    
    <b-modal id="updateCourseObjectiveModal" centered title="Update Course Objective">
        <div class="form-floating mb-4 mt-3 ">
          <textarea v-model="updateCourseObjective.course_objective" type="text" class="form-control" id="updateCourseObjective" placeholder="name@example.com" style="height: 100px !important;"></textarea>
          <label class="text-muted" for="updateCourseObjective">Course Objective</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateCoursesObjective" :disabled="isLoading">
            Update
        </b-button>
        </template>
    </b-modal>

    <!-- DELETE MODAL --->
    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyCourse" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>

    <b-modal id="deleteObjectiveModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyCourseObjective" :disabled="isLoading">
            Delete
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
       search_course: '',
       search_course_objective: '',
       isCourseSearching: false,
       isCourseObjectiveSearching: false,
       course: {
           name: '',
           college: '',
           abbreviation: ''
       },
       course_objective: {
           objective: '',
           college: '',
       },
       updateCourse: {
           name: '',
           abbreviation: '',
           college: {}
       },
       updateCourseObjective: {
           objective: ''
       },
       deleteCourse: '',
       deleteCourseObjective: '',
    }
  },
  props: {
    disabledOption: {
      type: String,
      default: 'Select college',
    },
    disabledOption1: {
      type: String,
      default: 'Select course',
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  computed: {
     ...mapState('auth', ['user']),
     ...mapState('universityinfo', ['courses', 'colleges', 'course_objectives']),
  },
  watch: {
    search_course(before, after){
      this.debouncedCourseSearch()
    },
    search_course_objective(before, after){
      this.debouncedCourseObjectiveSearch()
    }
  },
  created: function () {
    this.debouncedCourseSearch = _.debounce(this.courseSearch, 1000)
    this.debouncedCourseObjectiveSearch = _.debounce(this.courseObjectiveSearch, 1000)
  },
  async mounted(){
    this.initialLoading = true
    document.title = 'Course Management - Touchless Information Management'
    await this.$store.dispatch('universityinfo/getCourse', 1);
    await this.$store.dispatch('universityinfo/getCourseObjective', 1);
    await this.$store.dispatch('universityinfo/getCollege', 1);
    this.initialLoading = false
  },
  methods: {
    async saveCourse(){
      if(this.course.name == '') return this.$toast.error('Course Name is required!');  
      if(this.course.abbreviation == '') return this.$toast.error('Course Abbreviation is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveCourse', this.course)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCourse', 1);
        this.$toast.success('Course added successfully!')
        this.$bvModal.hide('newCourseModal')
        this.course = {name: '', abbreviation: ''}
      }
      this.isLoading = false
    },
    async saveCourseObjective(){
      if(this.course_objective.objective == '') return this.$toast.error('Course Objective is required!');
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveCourseObjective', this.course_objective)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCourseObjective', 1);
        this.$toast.success('Course Objecive added successfully!')
        this.$bvModal.hide('newCourseObjectiveModal')
        this.course_objective = {objective: ''}
      }
      this.isLoading = false
    },
    async updateCourses(){
      if(this.updateCourse.name == '') return this.$toast.error('Course Name is required!');  
      if(this.updateCourse.abbreviation == '') return this.$toast.error('Course Abbreviation is required!');
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateCourse', this.updateCourse)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCourse', 1);
        this.$toast.success('Course updated successfully!')
        this.$bvModal.hide('updateCourseModal')
        this.updateCourse = {name: '', abbreviation: ''}
      }
      this.isLoading = false
    },
    async updateCoursesObjective(){
      if(this.updateCourseObjective.objective == '') return this.$toast.error('Course Objective is required!'); 
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateCourseObjective', this.updateCourseObjective)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getCourseObjective', 1);
        this.$toast.success('Course objective updated successfully!')
        this.$bvModal.hide('updateCourseObjectiveModal')
        this.updateCourseObjective = {objective: ''}
      }
      this.isLoading = false
    },
    async destroyCourse(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteCourse', this.deleteCourse)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getCourse', 1);
            this.$toast.success('Course deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async destroyCourseObjective(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteCourseObjective', this.deleteCourseObjective)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getCourseObjective', 1);
            this.$toast.success('Course Objective deleted successfully!')
            this.$bvModal.hide('deleteObjectiveModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async getCourse(page){
       await this.$store.dispatch('universityinfo/getCourse', page);
    },
    async getCourseObjective(page){
       await this.$store.dispatch('universityinfo/getCourseObjective', page);
    },
    async searchCourse(page){
      this.isCourseSearching = true
      let data = {
        search: this.search_course
      }
      await this.$store.dispatch('universityinfo/searchCourse', {page: page, data: data})
      this.isCourseSearching = false
    },
    async searchCourseObjective(page){
      this.isCourseObjectiveSearching = true
      let data = {
        search: this.search_course_objective
      }
      await this.$store.dispatch('universityinfo/searchCourseObjective', {page: page, data: data})
      this.isCourseObjectiveSearching = false
    },
    courseSearch(page = 1){
      if(this.search_course == ''){
        this.getCourse(page)
      }
      else {
        this.searchCourse(page)
      }
    },
    courseObjectiveSearch(page = 1){
      if(this.search_course_objective == ''){
        this.getCourseObjective(page)
      }
      else {
        this.searchCourseObjective(page)
      }
    },
  },
 
}
</script>