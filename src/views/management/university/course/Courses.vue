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
            </div>
            <div class="d-flex justify-content-end mt-2">
              <router-link to="/home/courses/new" class="btn btn-purple btn-sm me-2 d-flex align-items-center"><i class="bi bi-plus-circle me-2"></i> Add Course</router-link>
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
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
                    <th scope="col" class="text-nowrap">Abbreviation</th>
                    <th scope="col" class="text-nowrap">College</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(course, i) in courses.data" :key="i">
                    <td class="cursor-pointer" @click.prevent="courseInfo = course; $bvModal.show('courseInfoModal');">{{course.course_name}}</td>
                    <td class="cursor-pointer" @click.prevent="courseInfo = course; $bvModal.show('courseInfoModal');">{{course.course_abbreviation}}</td>
                    <td class="cursor-pointer" @click.prevent="courseInfo = course; $bvModal.show('courseInfoModal');">{{course.college.name}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="setUpdateCourse(course)" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
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

    <b-modal id="courseInfoModal" centered title="Course Information">
        <h5>Course Info</h5>
        <p class="mt-1">Name: {{courseInfo.course_name}}</p>
        <p class="">Abbreviation: {{courseInfo.course_abbreviation}}</p>
        <p class="">College: {{courseInfo.college.name}}</p>
        <h5 class="mt-3">Course Objectives: </h5>
        <p class="mt-2" v-for="(objective, i) in courseInfo.objectives" :key="i">{{i + 1}}. {{objective.course_objective}}</p>
        <template #modal-footer = {cancel} >
        <b-button variant="secondary" @click="cancel()"> Close </b-button>
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
       courseInfo: {
         college: {
           name: '',
         }
       },
       isCourseSearching: false,
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
  },
  created: function () {
    this.debouncedCourseSearch = _.debounce(this.courseSearch, 1000)
  },
  async mounted(){
    this.initialLoading = true
    document.title = 'Course Management - Touchless Information Management'
    await this.$store.dispatch('universityinfo/getCourse', 1);
    await this.$store.dispatch('universityinfo/getCollege', 1);
    this.initialLoading = false
  },
  methods: {
    setUpdateCourse(data){
      this.$store.commit('universityinfo/SET_UPDATE_COURSE', data)
      this.$router.push('/home/courses/update')
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
    async getCourse(page){
       await this.$store.dispatch('universityinfo/getCourse', page);
    },
    async searchCourse(page){
      this.isCourseSearching = true
      let data = {
        search: this.search_course
      }
      await this.$store.dispatch('universityinfo/searchCourse', {page: page, data: data})
      this.isCourseSearching = false
    },
    courseSearch(page = 1){
      if(this.search_course == ''){
        this.getCourse(page)
      }
      else {
        this.searchCourse(page)
      }
    },
  },
 
}
</script>