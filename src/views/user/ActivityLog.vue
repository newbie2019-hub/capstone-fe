<template>
 <div>
   <div class="container pe-sm-0 ps-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card pe-5 ps-5 pb-4 pt-5 mb-4">
       <div class="d-flex flex-column me-auto mt-2">
        <h5>Activity Logs</h5>
        <p class="mb-4"><small>Listed below are your logs </small></p>
       </div>
       <div class="d-flex justify-content-end mt-2">
        <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
          <div class="input-group form-floating mb-3">
          <input
            type="text"
            v-model="search"
            class="form-control"
            id="floatingSearchDep"
            placeholder="Search here"
          />
          <label for="floatingSearchDep" class="">Search</label>
          <button class="btn btn-purple"><i class="bi bi-search"></i></button>
          </div>
        </div>
       </div>
       <div class="table-responsive mt-3">
         <b-skeleton-table
          :rows="6"
          :columns="5"
          :table-props="{ bordered: false, striped: true }"
          v-if="initialLoading || isSearching"
         ></b-skeleton-table>
        <table class="table table-hover" v-else>
        <caption>Showing {{logs.from}} to {{logs.to}} out of {{logs.total}} accounts</caption>
        <thead >
         <tr>
          <th scope="col" class="text-nowrap">ID</th>
          <th scope="col" class="text-nowrap">Activity</th>
          <th scope="col" class="text-nowrap">Event Type</th>
          <th scope="col">Description</th>
          <th scope="col" class="text-nowrap">Date and Time</th>
         </tr>
        </thead>
        <tbody>
          <tr v-for="(log, i) in logs.data" :key="i" class="cursor-pointer" @click.prevent="selectedLog = log; $bvModal.show('logInfoModal')">
            <th>{{i + 1}}</th>
            <td>{{log.log_name}}</td>
            <td><small><b-badge :variant="badgeEvent(log.event)" pill>{{log.event}}</b-badge></small></td>
            <td>{{log.description}}</td>
            <td>{{log.created_at | moment}}</td>
          </tr>
          <tr v-if="logs.data == 0">
            <td class="text-center pt-3 pb-3" colspan="6">No data available</td>
          </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="logs.data">
      <pagination :showDisabled="true" :align="'right'"
        :data="logs"
        @pagination-change-page="getLogs">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
      </pagination>
     </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
import moment from 'moment'
const _ = require('lodash');

export default {
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  data(){
    return {
      initialLoading: false,
      selectedLog: {
        user: {
          userinfo: {
            first_name: '',
            last_name: '',   
          }
        },
        properties: {
          old: {
            data: ''
          },
          attributes: {
            data: ''
          }
        }
      },
      search: '',
      isSearching: false,
    }
  },
  watch: {
    search(){
      this.debouncedActivityLogSearch()
    }
  },
  created: function () {
    this.debouncedActivityLogSearch = _.debounce(this.activityLogSearch, 800)
  },
  async mounted() {
    this.initialLoading = true
    document.title = "Activity Logs - Management"
    await this.$store.dispatch('logs/getAllUserActivityLogs', 1)
    this.initialLoading = false
  },
  methods: {
    badgeEvent(event){
      switch (event) {
        case 'created':
          return 'success'
        case 'deleted':
          return 'danger'
        case 'updated':
          return 'primary'
        case 'login success':
          return 'success'
        case 'login failed':
          return 'danger'
        default:
          break;
      }
    },
    async getLogs(page = 1){
      await this.$store.dispatch('logs/getAllUserActivityLogs', page)
    },
    async searchActivityLog(page){
       this.isSearching = true
       let data = {
         search: this.search
       }
       await this.$store.dispatch('logs/searchUserActivityLog', {page: page, data: data})
       this.isSearching = false
    },
    activityLogSearch(page = 1){
      if(this.search == ''){
        this.getLogs(page)
      }
      else {
        this.searchActivityLog(page)
      }
    },
  },
  computed: {
    ...mapState('logs', ['logs'])
  }
}
</script>