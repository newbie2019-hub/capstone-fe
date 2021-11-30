<template>
 <div>
   <div class="container pe-sm-0 ps-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card pe-5 ps-5 pb-4 pt-5 mb-4">
       <div class="d-flex flex-column me-auto mt-2">
        <h5>Activity Logs</h5>
        <p class="mb-4"><small>Listed below are the activity of the users</small></p>
       </div>
        <div class="row justify-content-end mb-3">
          <div class="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <b-input-group>
              <b-form-input id="filter-input" v-model="filterLogs" type="search" placeholder="Type to Search"></b-form-input>
              <b-input-group-append>
                <b-button class="rounded-0 btn-purple" :filter="!filterLogs" @click="filterLogs = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
       <div class="table-responsive mt-3">
          <b-table id="logstable" :items="logs" @filtered="onFiltered" :filter="filterLogs" sort-icon-left :filter-included-fields="['user','event']" show-empty :fields="logsFields" :per-page="10" :current-page="currentLogsPage" striped>
            <template #table-caption>Users activity logs</template>
            <template #cell(user)="row">
              <div class="text-nowrap cursor-pointer" @click="selectedLog = row.item; $bvModal.show('logInfoModal')">
                {{row.item.user.userinfo.first_name}} {{row.item.user.userinfo.last_name}}
              </div>
            </template>
            <template #cell(activity)="row">
              <div class="text-nowrap cursor-pointer" @click="selectedLog = row.item; $bvModal.show('logInfoModal')">
                {{row.item.log_name}}
              </div>
            </template>
            <template #cell(event_type)="row" >
                <small><b-badge :variant="badgeEvent(row.item.event)" pill>{{row.item.event}}</b-badge></small>
            </template>
            <template #cell(date_and_time)="row">
               {{row.item.created_at | moment}}
            </template>
          </b-table>
        </div>
        <div class="d-flex justify-content-end">
          <b-pagination
            class="mt-1"
            v-model="currentLogsPage"
            :total-rows="logs.length"
            :per-page="10"
            aria-controls="logstable"
          ></b-pagination>
        </div>
     </div>
    </div>
   </div>
  </div>

  <!-- LOG INFO MODAL --->
  <b-modal id="logInfoModal" scrollable centered title="Log Info" v-if="selectedLog.user">
      <p class=""><span class="fw-bold">Activity</span>:  {{selectedLog.log_name}}</p>
      <p class=""><span class="fw-bold">User</span>: {{selectedLog.user.userinfo.first_name}} {{selectedLog.user.userinfo.last_name}}</p>
      <p class=""><span class="fw-bold">Event Type</span>: <small><b-badge :variant="badgeEvent(selectedLog.event)" pill>{{selectedLog.event}}</b-badge></small></p>
      
      <div v-if="selectedLog.event == 'deleted'" class="">
        <h6 class="mt-3 fw-bold mb-2">Deleted Data</h6>
        <div v-for="(value, key, i) in selectedLog.properties.old" :key="i">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
      </div>

      <div v-if="selectedLog.event == 'login failed' || selectedLog.event == 'logout' || selectedLog.event == 'login success'" class="">
        <h6 class="fw-bold mt-1 mb-2">User IP: <span class="fw-normal">{{selectedLog.properties.ip}}</span></h6>
      </div>

      <div v-if="selectedLog.event == 'deleted account'" class="">
        <h6 class="mt-3 fw-bold mb-2">Deleted Account</h6>
        <div v-for="(value, key, i) in selectedLog.properties" :key="i">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
      </div>

      <div v-if="selectedLog.event == 'created'" class="">
        <h6 class="mt-3 fw-bold mb-2">Data Created</h6>
        <div v-for="(value, key, i) in selectedLog.properties.attributes" :key="i">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
      </div>

      <div v-if="selectedLog.event == 'updated'" class="">
        <h6 class="mt-3 fw-bold mb-2">New Data</h6>
        <div v-for="(value, key, i) in selectedLog.properties.attributes" :key="i">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
        <h6 class="mt-3 fw-bold mb-2">Old Data</h6>
        <div v-for="(value, key) in selectedLog.properties.old" :key="key.id">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
      </div>
      <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()">Close</b-button>
      </template>
  </b-modal>
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
      currentLogsPage: 1,
      filterLogs: null,
      logsFields: [
        {
          key: 'user',
        },
        {
          key: 'activity',
        },
        {
          key: 'event_type',
        },
        {
          key: 'description',
        },
        {
          key: 'date_and_time',
        },
      ],
    }
  },
  async mounted() {
    this.initialLoading = true
    document.title = "Activity Logs - Management"
    await this.$store.dispatch('logs/getAllActivityLogs')
    this.initialLoading = false
  },
  methods: {
    badgeEvent(event){
      switch (event) {
        case 'created':
          return 'success'
        case 'deleted account':
          return 'danger'
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
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentLogsPage = 1
    },
    async getLogs(page = 1){
      await this.$store.dispatch('logs/getAllActivityLogs', page)
    },
  },
  computed: {
    ...mapState('logs', ['logs'])
  }
}
</script>