<template>
 <div>
  <div class="container pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card pe-5 ps-5 pb-4 pt-5">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5>
         <router-link to="/home/organization" class="text-decoration-none text-violet">Organization</router-link>
         Accounts
        </h5>
        <p class="mb-4"><small>Listed below are accounts under organization</small></p>
       </div>
      </div>
      <div class="row justify-content-end row-reverse flex-md-row mt-2">
       <div class="col-9 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2">
        <div class="input-group form-floating mb-3">
         <input
          type="text"
          v-model="search_organization"
          class="form-control"
          id="floatingSearchDep"
          placeholder="Search here"
         />
         <label for="floatingSearchDep" class="">Search</label>
         <button @click.prevent="organizationSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
        </div>
       </div>
      </div>
      <div class="table-responsive mt-3" v-if="!viewPost && !viewLogs">
       <div class="text-center" v-if="org_accounts.data == 0">No deleted accounts under organizations</div>
       <b-skeleton-table
        :rows="6"
        :columns="6"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading"
       ></b-skeleton-table>
       <table class="table table-hover" v-if="!initialLoading">
        <caption>Showing {{org_accounts.from}} to {{org_accounts.to}} out of {{org_accounts.total}} accounts</caption>
        <thead v-if="org_accounts.data != 0">
         <tr>
          <th scope="col"></th>
          <th scope="col" class="text-nowrap">Name</th>
          <th scope="col">Organization</th>
          <th scope="col">Role</th>
          <th scope="col" class="text-nowrap">Status</th>
          <th scope="col" class="text-nowrap">Date Created</th>
          <th scope="col">Actions</th>
         </tr>
        </thead>
        <tbody v-if="org_accounts.data">
         <tr v-for="(acc, i) in org_accounts.data" :key="i">
          <th scope="row" class="justify-content-center cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
           <b-avatar variant="dark" v-if="acc.user.userinfo.image" :src="`${imgURL}/` + acc.user.userinfo.image"></b-avatar>
           <b-avatar variant="dark" v-else></b-avatar>
          </th>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.user.userinfo.first_name }} {{ acc.user.userinfo.last_name }}</td>
          <td class="cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.organization.name }}</td>
          <td>{{ acc.user.userinfo.role.role }}</td>
          <td>
           <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
            acc.user.status
           }}</b-badge>
          </td>
          <td>{{ acc.created_at | moment }}</td>
          <td>
           <div class="d-flex">
             <button @click="userPosts = acc.user.posts; viewPost = true" class="btn btn-sm btn-primary text-nowrap me-2" >
              View Posts
            </button>
            <button @click="userLogs = acc.user.logs; viewLogs = true"  class="btn btn-sm btn-primary btn-approve text-nowrap me-2" >
              View Logs
            </button>
           </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="org_accounts.data && !viewPost && !viewLogs">
       <pagination
        :showDisabled="true"
        :align="'right'"
        :data="org_accounts"
        @pagination-change-page="organizationSearch">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
      </div>

      <!---POSTS OF ORGANIZATION USER---->
      <div class="mt-2" v-if="viewPost">
        <button v-on:click.prevent="viewPost = false; posts = []" class="btn btn-purple"><i class="bi bi-arrow-left me-2"></i>Return</button>
      </div>
      <div class="table-responsive mt-3" v-if="viewPost">
        <b-skeleton-table
            :rows="4"
            :columns="7"
            :table-props="{ bordered: false, striped: true }"
            v-if="isLoading"
          ></b-skeleton-table>
        <table class="table table-hover" v-if="!isLoading">
          <thead>
            <tr>
              <th scope="col" class="text-nowrap">ID</th>
              <th scope="col" class="text-nowrap">Image</th>
              <th scope="col" class="text-nowrap">Title</th>
              <th scope="col" class="text-nowrap">Post Excerpt</th>
              <th scope="col" class="text-nowrap">Status</th>
              <th scope="col" class="text-nowrap">Date Posted</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, i) in userPosts" :key="i">
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{i + 1}}</td>
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">
                <b-avatar v-if="post.postcontent.image" size="6rem" variant="dark"  :src="`${imgURL}/` + post.postcontent.image"></b-avatar>
                <p class="text-muted" v-else>No Image</p>
              </td>
              <td class="cursor-pointer text-nowrap" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')" >{{post.postcontent.title}}</td>
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
              <td>
                <b-badge :variant="post.status == 'Approved' ? 'success':'info'">{{post.status}}</b-badge>
              </td>
              <td class="text-nowrap">{{post.created_at | moment}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!---- ORGANIZATION USER LOGS --->
      <div class="mt-2" v-if="viewLogs">
        <button v-on:click.prevent="viewLogs = false; userLogs = []" class="btn btn-purple"><i class="bi bi-arrow-left me-2"></i>Return</button>
      </div>
      <div class="table-responsive mt-3" v-if="viewLogs">
         <b-skeleton-table
          :rows="6"
          :columns="5"
          :table-props="{ bordered: false, striped: true }"
          v-if="initialLoading || isSearching"
         ></b-skeleton-table>
        <b-table id="orglogstable" :items="userLogs" :fields="['id', 'log_name', 'event', 'description', 'created_at', 'actions']" :per-page="8" :current-page="orglogspage" striped v-else>
          <template #cell(event)="row">
            <small><b-badge :variant="badgeEvent(row.item.event)" pill>{{row.item.event}}</b-badge></small>
          </template>
          <template #cell(created_at)="row">
            {{ row.item.created_at | moment }}
          </template>
          <template #cell(actions)="row">
              <b-button variant="success" size="sm" @click="selectedLog = row.item; $bvModal.show('logInfoModal')" class="mr-1">
                View
              </b-button>
            </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            class="mt-3"
            v-model="orglogspage"
            :total-rows="userLogs.length"
            :per-page="8"
            aria-controls="orglogstable"
          ></b-pagination>
        </div>
      </div>

     </div>
    </div>
   </div>

   <!--- DEPARTMENT ACCOUNT -->
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card pe-5 ps-5 pb-4 pt-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-3">
        <h5>
         <router-link to="/home/organization" class="text-decoration-none text-violet">Unit </router-link>
         Accounts
        </h5>
        <p class="mb-4"><small>Listed below are accounts under a department</small></p>
       </div>
      </div>
      <div class="row justify-content-end row-reverse flex-md-row mt-2">
       <div class="col-9 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2">
        <div class="input-group form-floating">
         <input
          type="text"
          v-model="search_department"
          class="form-control"
          id="floatingSearchDep"
          placeholder="Search here"/>
         <label for="floatingSearchDep" class="">Search here</label>
         <button @click.prevent="departmentSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
        </div>
       </div>
      </div>
      <div class="table-responsive mt-3">
       <b-skeleton-table
        :rows="4"
        :columns="6"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading"></b-skeleton-table>
       <table class="table table-hover" v-if="!initialLoading && !viewUnitPost && !viewUnitLogs">
        <caption>Showing {{unit_accounts.from}} to {{unit_accounts.to}} out of {{unit_accounts.total}} accounts</caption>
        <div class="text-center" v-if="unit_accounts.data == 0">No deleted accounts under unit</div>
        <thead v-if="unit_accounts.data != 0">
         <tr>
          <th scope="col"></th>
          <th scope="col" class="text-nowrap">Name</th>
          <th scope="col">Unit</th>
          <th scope="col">Role</th>
          <th scope="col" class="text-nowrap">Status</th>
          <th scope="row" class="text-nowrap">Date Created</th>
          <th scope="col">Action</th>
         </tr>
        </thead>
        <tbody v-if="unit_accounts.data != 0">
         <tr v-for="(acc, i) in unit_accounts.data" :key="i">
          <th scope="row" class="justify-content-center cursor-pointer" v-if="unit_accounts.data != 0" v-on:click.prevent="accUnitDisplayed = acc; $bvModal.show('viewDepInfoModal')">
           <b-avatar variant="dark" v-if="acc.user.userinfo.image" :src="`${imgURL}/` + acc.user.userinfo.image"></b-avatar>
           <b-avatar variant="dark" v-else></b-avatar>
          </th>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent="accUnitDisplayed = acc; $bvModal.show('viewDepInfoModal')">
           {{ acc.user.userinfo.first_name }} {{ acc.user.userinfo.last_name }}
          </td>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent="accUnitDisplayed = acc; $bvModal.show('viewDepInfoModal')">{{ acc.department.name }}</td>
          <td class="text-nowrap">{{ acc.user.userinfo.role.role }}</td>
          <td>
           <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
            acc.user.status
           }}</b-badge>
          </td>
          <td class="text-nowrap">{{ acc.created_at | moment }}</td>
          <td>
            <div class="d-flex">
              <button @click="userUnitPosts = acc.user.posts; viewUnitPost = true" class="btn btn-sm btn-primary text-nowrap me-2" >
                View Posts
              </button>
              <button @click="userUnitLogs = acc.user.logs; viewUnitLogs = true"  class="btn btn-sm btn-primary btn-approve text-nowrap me-2" >
                View Logs
              </button>
            </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="unit_accounts.data && !viewUnitPost && !viewUnitLogs">
       <pagination
        :showDisabled="true"
        :align="'right'"
        :data="unit_accounts"
        @pagination-change-page="departmentSearch">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
      </div>

      
      <!---POSTS OF DEPARTMENT USER---->
      <div class="mt-2" v-if="viewUnitPost">
        <button v-on:click.prevent="viewUnitPost = false; posts = []" class="btn btn-purple"><i class="bi bi-arrow-left me-2"></i>Return</button>
      </div>
      <div class="table-responsive mt-3" v-if="viewUnitPost">
        <b-skeleton-table
            :rows="4"
            :columns="7"
            :table-props="{ bordered: false, striped: true }"
            v-if="isLoading"
          ></b-skeleton-table>
        <table class="table table-hover" v-if="!isLoading">
          <thead>
            <tr>
              <th scope="col" class="text-nowrap">ID</th>
              <th scope="col" class="text-nowrap">Image</th>
              <th scope="col" class="text-nowrap">Title</th>
              <th scope="col" class="text-nowrap">Post Excerpt</th>
              <th scope="col" class="text-nowrap">Status</th>
              <th scope="col" class="text-nowrap">Date Posted</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, i) in userUnitPosts" :key="i">
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{i + 1}}</td>
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">
                <b-avatar v-if="post.postcontent.image" size="6rem" variant="dark"  :src="`${imgURL}/` + post.postcontent.image"></b-avatar>
                <p class="text-muted" v-else>No Image</p>
              </td>
              <td class="cursor-pointer text-nowrap" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')" >{{post.postcontent.title}}</td>
              <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
              <td>
                <b-badge :variant="post.status == 'Approved' ? 'success':'info'">{{post.status}}</b-badge>
              </td>
              <td class="text-nowrap">{{post.created_at | moment}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!---- DEPARTMENT USER LOGS --->
      <div class="mt-2" v-if="viewUnitLogs">
        <button v-on:click.prevent="viewUnitLogs = false; userUnitLogs = []" class="btn btn-purple"><i class="bi bi-arrow-left me-2"></i>Return</button>
      </div>
      <div class="table-responsive mt-3" v-if="viewUnitLogs">
         <b-skeleton-table
          :rows="6"
          :columns="5"
          :table-props="{ bordered: false, striped: true }"
          v-if="initialLoading || isSearching"
         ></b-skeleton-table>
        <b-table id="orglogstable" :items="userUnitLogs" :fields="['id', 'log_name', 'event', 'description', 'created_at', 'actions']" :per-page="8" :current-page="orglogspage" striped v-else>
          <template #cell(event)="row">
            <small><b-badge :variant="badgeEvent(row.item.event)" pill>{{row.item.event}}</b-badge></small>
          </template>
          <template #cell(created_at)="row">
            {{ row.item.created_at | moment }}
          </template>
          <template #cell(actions)="row">
              <b-button variant="success" size="sm" @click="selectedLog = row.item; $bvModal.show('logInfoModal')" class="mr-1">
                View
              </b-button>
            </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            class="mt-3"
            v-model="orglogspage"
            :total-rows="userLogs.length"
            :per-page="8"
            aria-controls="orglogstable"
          ></b-pagination>
        </div>
      </div>

     </div>
    </div>
   </div>

   <!-- DELETE MODAL --->
   <b-modal id="deleteModal" centered title="Confirm Delete">
    <p >Are you sure you want to delete this account?</p>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" size="sm" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
     <b-button size="sm" variant="danger" v-on:click.prevent="removeAccount" :disabled="isLoading">
      Delete
     </b-button>
    </template>
   </b-modal>

   <!-- VIEW INFO MODAL --->
   <b-modal id="viewInfoModal" hide-footer centered title="Account Info">
      <div class="row justify-content-center text-center">
        <b-avatar size="6rem" variant="dark" v-if="accDisplayed.user.userinfo.image" :src="`${imgURL}/` + accDisplayed.user.userinfo.image"></b-avatar>
        <b-avatar size="6rem" variant="dark" v-else></b-avatar>
        <h5 class="mt-3 ">{{accDisplayed.user.userinfo.first_name}} {{accDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accDisplayed.user.email}}</p>
        <p class="">Contact: {{accDisplayed.user.userinfo.contact_number}}</p>
        <p class="">Gender: {{accDisplayed.user.userinfo.gender}}</p>
        <p class="mt-4">Organization: {{accDisplayed.organization.name}} {{ accDisplayed.organization.abbreviation ? ' - ' + accDisplayed.organization.abbreviation :'' }}</p>
        <p class="">Role: {{accDisplayed.user.userinfo.role.role}}</p>
      </div>
     <div class="d-flex justify-content-center mt-5">
        <b-button variant="primary" @click="$bvModal.hide('viewInfoModal')"> Close </b-button>
      </div>
   </b-modal>

  <b-modal id="viewPostModal" scrollable centered :title="postContent.postcontent.title">
      <div v-html="postContent.postcontent.content"></div>
      <p class="mt-4"><small>Views: {{postContent.views}}</small></p>
      <p class=" mb-2"><small>Date Posted: {{postContent.created_at | moment}}</small></p>
      <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Close </b-button>
      </template>
  </b-modal>

   <!-- VIEW INFO MODAL --->
   <b-modal id="viewDepInfoModal" hide-footer centered title="Account Info">
      <div class="row justify-content-center text-center">
        <b-avatar size="6rem" variant="dark"  :src="`${imgURL}/` + accUnitDisplayed.user.userinfo.image"></b-avatar>
        <h5 class="mt-3 ">{{accUnitDisplayed.user.userinfo.first_name}} {{accUnitDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accUnitDisplayed.user.email}}</p>
        <p class="">Contact: {{accUnitDisplayed.user.userinfo.contact_number}}</p>
        <p class="">Gender: {{accUnitDisplayed.user.userinfo.gender}}</p>
        <p class="mt-4">Unit: {{accUnitDisplayed.department.name}}</p>
        <p class="">Role: {{accUnitDisplayed.user.userinfo.role.role}}</p>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <b-button variant="primary" @click="$bvModal.hide('viewDepInfoModal')"> Close </b-button>
      </div>
   </b-modal>

   
  <!-- LOG INFO MODAL --->
  <b-modal id="logInfoModal" scrollable centered title="Log Info" v-if="selectedLog">
      <p class=""><span class="fw-bold">Activity</span>:  {{selectedLog.log_name}}</p>
      <!-- <p class=""><span class="fw-bold">User</span>: {{selectedLog.user.userinfo.first_name}} {{selectedLog.user.userinfo.last_name}}</p> -->
      <p class=""><span class="fw-bold">Event Type</span>: <small><b-badge :variant="badgeEvent(selectedLog.event)" pill>{{selectedLog.event}}</b-badge></small></p>
      
      <div v-if="selectedLog.event == 'deleted'" class="">
        <h6 class="mt-3 fw-bold mb-2">Deleted Data</h6>
        <div v-for="(value, key, i) in selectedLog.properties.old" :key="i">
          <p v-if="key == 'created_at' || key == 'updated_at'"><span class="fw-bold">{{key}}:</span> {{value | moment}}</p>
          <p v-else><span class="fw-bold">{{key}}:</span> {{value}}</p>
        </div>
      </div>

      <div v-if="selectedLog.event == 'logout' || selectedLog.event == 'login success'" class="">
        <h6 class="fw-bold mb-2">User IP: <span class="fw-normal">{{selectedLog.properties.ip}}</span></h6>
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

   <!--- APPROVE MODAL -->
   <b-modal id="approveModal" centered title="Confirm Approve">
    <p class="">An email of approval will be sent to the user. Are you sure you want to approve this account?</p>
    <template #modal-footer="{cancel}">
     <b-button :disabled="isLoading" variant="primary" @click="cancel()"> Cancel </b-button>
     <b-button :disabled="isLoading" variant="success" v-on:click.prevent="setStatus">
      Approve
     </b-button>
    </template>
   </b-modal>
  </div>
 </div>
</template>
<script>
 import moment from 'moment';
 import { mapState, mapActions } from 'vuex';
 const _ = require('lodash');

 export default {
  filters: {
   moment: function(date) {
    return moment(date).format('MMM Do YYYY, h:mm a');
   },
  },
  data() {
   return {
    orglogspage: 1,
    current_id: '',
    postContent: {
      postcontent: {
        title: '',
        content: ''
      },
    },
    
    isLoading: false,
    search: '',
    userPosts: [],
    userLogs: [],
    viewPost: false,
    viewLogs: false,
    userUnitPosts: [],
    userUnitLogs: [],
    viewUnitPost: false,
    viewUnitLogs: false,
    delete_data: {
     id: '',
     type: '',
    },
    approve_data: {
     id: '',
     index: '',
     type: '',
    },
    search_organization: '',
    search_department: '',
    initialLoading: false,
    orgStatus: 'All Accounts',
    advancedFilter: false,
    unitStatus: 'All Accounts',
    orgAccountLoading: false,
    depAccountLoading: false,
    accDisplayed: {
      organization: {
        name: ''
      },
      user: {
        userinfo: {
          first_name: '',
          last_name: '',
          role: {
            role: '',
          },
        },
      }
    },
    isSearching: false,
    accUnitDisplayed: {
      department:{
        name: '',
      },
      user: {
        userinfo: {
          role: {
            role: '',
          },
          first_name: '',
          last_name: '',
          orgunit: {
            role: {
              role: '',
            },
          },
        },
      },
    },
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
   }
  },
  watch: {
   search_organization: function(after, before) {
    this.debouncedOrganizationSearch()
   },
   search_department: function(after, before) {
    this.debouncedDepartmentSearch()
   },
  },
  created: function () {
    this.debouncedOrganizationSearch = _.debounce(this.organizationSearch, 1000)
    this.debouncedDepartmentSearch = _.debounce(this.departmentSearch, 1000)
  },
  async mounted() {
   document.title = 'Archive Accounts';
   this.isLoading = true;
   this.initialLoading = true;
   await this.$store.dispatch('archive/unitAccounts', 1);
   await this.$store.dispatch('archive/orgAccounts', 1);
   this.isLoading = false;
   this.initialLoading = false;
  },
  computed: {
   ...mapState('archive', ['accounts', 'unit_accounts', 'org_accounts']),
  },
  methods: {
   ...mapActions('archive', ['approveAccountType', 'deleteAccount']),
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
   async getOrgAccounts(page = 1) {
    if (this.orgStatus == 'All Accounts') {
     await this.$store.dispatch('archive/orgAccounts', page);
    }
    if (this.orgStatus == 'Approved') {
     await this.$store.dispatch('archive/approvedOrgAccounts', page);
    }
    if (this.orgStatus == 'Pending') {
     await this.$store.dispatch('archive/pendingOrgAccounts', page);
    }
   },
   async getUniAccounts(page) {
    if (this.unitStatus == 'All Accounts') {
     await this.$store.dispatch('archive/unitAccounts', page);
    }
    if (this.unitStatus == 'Approved') {
     await this.$store.dispatch('archive/approvedUnitAccounts', page);
    }
    if (this.unitStatus == 'Pending') {
     await this.$store.dispatch('archive/pendingUnitAccounts', page);
    }
   },
   async searchOrganization(page) {
    this.isSearching = true;
    let data = {
     search: this.search_organization,
     status: this.orgStatus,
    };
    await this.$store.dispatch('archive/searchOrgAccount', { page: page, data: data });
    this.isSearching = false;
   },
   async organizationSearch(page = 1) {
    this.orgAccountLoading = true;
    if (this.search_organization == '') {
     await this.getOrgAccounts(page);
     this.orgAccountLoading = false;
    } else {
     await this.searchOrganization(page);
     this.orgAccountLoading = false;
    }
   },
   async searchDepartment(page) {
    this.isSearching = true;

    let data = {
     search: this.search_department,
     status: this.unitStatus,
    };
    await this.$store.dispatch('archive/searchUnitAccount', { page: page, data: data });
    this.isSearching = false;
   },
   async departmentSearch(page = 1) {
    this.depAccountLoading = true
    if (this.search_department == '') {
     await this.getUniAccounts(page)
     this.depAccountLoading = false
    } else {
     await this.searchDepartment(page)
     this.depAccountLoading = false
    }
   },
  },
 };
</script>

