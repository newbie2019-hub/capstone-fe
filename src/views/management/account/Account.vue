<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="d-flex justify-content-end mb-3">
      <a v-on:click.prevent="$router.push('account/new')" href="" class="btn btn-purple">
        <i class="bi bi-person-circle"></i> New User
      </a>
     </div>
     <div class="card pe-5 ps-5 pb-4 pt-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5>
         <router-link to="/home/organization" class="text-decoration-none text-violet">Organization</router-link>
         Accounts
        </h5>
        <p class="mb-4"><small>Listed below are accounts under organization</small></p>
       </div>
       <div class="d-flex align-items-center mb-3 me-2">
        <p class="me-2">Status</p>
        <select v-model="orgStatus" @change="getOrgAccounts" class="form-select">
         <option value="All Accounts">All Accounts</option>
         <option value="Approved">Approved</option>
         <option value="Pending">Pending</option>
        </select>
       </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
       <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
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
      <div class="table-responsive mt-3">
       <div class="text-center" v-if="org_accounts.data == 0">No accounts under organizations</div>
       <b-skeleton-table
        :rows="6"
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading && org_accounts.data == 0"
       ></b-skeleton-table>
       <b-skeleton-table
        :rows="6"
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="orgAccountLoading"
       ></b-skeleton-table>
       <table class="table table-hover" v-if="!orgAccountLoading">
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
          <th scope="row" class="justify-content-center">
           <avatar
            :size="40"
            :src="'http://127.0.0.1:8000/uploads/' + acc.user.userinfo.image"
            :username="acc.user.userinfo.first_name + ' ' + acc.user.userinfo.last_name"
           ></avatar>
          </th>
          <td class="text-nowrap">{{ acc.user.userinfo.first_name }} {{ acc.user.userinfo.last_name }}</td>
          <td>{{ acc.organization.name }}</td>
          <td>{{ acc.user.userinfo.role.role }}</td>
          <td>
           <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
            acc.user.status
           }}</b-badge>
          </td>
          <td>{{ acc.created_at | moment }}</td>
          <td>
           <div class="d-flex">
            <button
             href=""
             :disabled="isLoading && current_id == acc.user.id"
             v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')"
             v-b-tooltip.hover
             title="View Details"
             class="btn btn-sm btn-purple rounded-pill me-2">
            <i v-if="current_id != acc.user.id" class="bi bi-arrows-angle-expand"></i>
            </button>
            <button
             v-on:click.prevent="setUpdateAccount(acc, 'Organization')"
             href=""
             v-if="acc.user.status == 'Approved'"
             v-b-tooltip.hover
             title="Update Account"
             class="btn btn-sm btn-success rounded-pill me-2"
            >
             <i class="bi bi-pencil-square"></i>
            </button>
            <button href="" v-on:click.prevent="$bvModal.show('deleteModal'); delete_data.id = acc.user.id; delete_data.type = acc.user.type"
             v-b-tooltip.hover title="Delete Account" class="btn btn-sm btn-danger rounded-pill me-2">
              <i v-if="current_id != acc.user.id" class="bi bi-trash"></i>
             <div v-if="isLoading && current_id == acc.user.id"
              class="spinner-grow text-light spinner-grow-sm"
              role="status">
              <span class="visually-hidden">Loading...</span>
             </div>
            </button>
           </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="org_accounts.data">
       <pagination
        :showDisabled="true"
        :align="'right'"
        :data="org_accounts"
        @pagination-change-page="organizationSearch"
       >
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
      </div>
     </div>
    </div>
   </div>

   <!--- DEPARTMENT ACCOUNT -->
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card pe-5 ps-5 pb-4 pt-4 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-3">
        <h5>
         <router-link to="/home/organization" class="text-decoration-none text-violet">Department </router-link>
         Accounts
        </h5>
        <p class="mb-4"><small>Listed below are accounts under a department</small></p>
       </div>
       <div class="d-flex align-items-center mb-3 me-2">
        <p class="me-2">Status</p>
        <select @change="getUniAccounts" v-model="unitStatus" class="form-select">
         <option value="All Accounts">All Accounts</option>
         <option value="Approved">Approved</option>
         <option value="Pending">Pending</option>
        </select>
       </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
       <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
        <div class="input-group form-floating mb-3">
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
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading && unit_accounts.data == 0"></b-skeleton-table>
       <b-skeleton-table
        :rows="4"
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="depAccountLoading"></b-skeleton-table>
       <table class="table table-hover" v-if="!depAccountLoading">
        <caption>Showing {{unit_accounts.from}} to {{unit_accounts.to}} out of {{unit_accounts.total}} accounts</caption>
        <div class="text-center" v-if="unit_accounts.data == 0">No accounts under unit/departments</div>
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
          <th scope="row" class="justify-content-center" v-if="unit_accounts.data != 0">
           <avatar
            :size="40"
            :src="'http://127.0.0.1:8000/uploads/' + acc.user.userinfo.image"
            :username="acc.user.userinfo.first_name + ' ' + acc.user.userinfo.last_name"
           ></avatar>
          </th>
          <td class="text-nowrap">
           {{ acc.user.userinfo.first_name }} {{ acc.user.userinfo.last_name }}
          </td>
          <td class="text-nowrap">{{ acc.department.name }}</td>
          <td class="text-nowrap">{{ acc.user.userinfo.role.role }}</td>
          <td>
           <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
            acc.user.status
           }}</b-badge>
          </td>
          <td class="text-nowrap">{{ acc.created_at | moment }}</td>
          <td>
           <div class="d-flex">
            <button
             href=""
             :disabled="isLoading && current_id == acc.user.id"
             v-on:click.prevent="accUnitDisplayed = acc; $bvModal.show('viewDepInfoModal')"
             v-b-tooltip.hover
             title="View Details"
             class="btn btn-sm btn-purple rounded-pill me-2">
             <i v-if="current_id != acc.user.id" class="bi bi-arrows-angle-expand"></i>
            </button>
            <button
             v-on:click.prevent="setUpdateAccount(acc, 'Department')"
             href=""
             v-if="acc.status == 'Approved'"
             v-b-tooltip.hover
             title="Update Account"
             class="btn btn-sm btn-success rounded-pill me-2">
             <i class="bi bi-pencil-square"></i>
            </button>
            <button href="" v-on:click.prevent="$bvModal.show('deleteModal');delete_data.id = acc.user.id; delete_data.type = acc.type;"
             v-b-tooltip.hover title="Delete Account" class="btn btn-sm btn-danger rounded-pill">
             <i v-if="current_id != acc.user.id" class="bi bi-trash"></i>
             <div
              v-if="isLoading && current_id == acc.user.id"
              class="spinner-grow text-light spinner-grow-sm"
              role="status">
              <span class="visually-hidden">Loading...</span>
             </div>
            </button>
           </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="unit_accounts.data">
       <pagination
        :showDisabled="true"
        :align="'right'"
        :data="unit_accounts"
        @pagination-change-page="departmentSearch">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
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
   <b-modal id="viewInfoModal" centered title="Account Info">
      <div class="row justify-content-center text-center">
        <avatar
            :size="100"
            :src="'http://127.0.0.1:8000/uploads/' + accDisplayed.user.userinfo.image"
            :username="accDisplayed.user.userinfo.first_name + ' ' + accDisplayed.user.userinfo.last_name"
        ></avatar>
        <h5 class="mt-3 ">{{accDisplayed.user.userinfo.first_name}} {{accDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accDisplayed.user.email}}</p>
        <p class="">Contact: {{accDisplayed.user.userinfo.contact_number}}</p>
        <p class="">Gender: {{accDisplayed.user.userinfo.gender}}</p>
        <p class="mt-4">Organization: {{accDisplayed.organization.name}} {{ accDisplayed.organization.abbreviation ? ' - ' + accDisplayed.organization.abbreviation :'' }}</p>
        <p class="">Role: {{accDisplayed.user.userinfo.role.role}}</p>
      </div>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" @click="cancel()"> Close </b-button>
    </template>
   </b-modal>

   <!-- VIEW INFO MODAL --->
   <b-modal id="viewDepInfoModal" centered title="Account Info">
      <div class="row justify-content-center text-center">
        <avatar
            :size="100"
            :src="'http://127.0.0.1:8000/uploads/' + accUnitDisplayed.user.userinfo.image"
            :username="accUnitDisplayed.user.userinfo.first_name + ' ' + accUnitDisplayed.user.userinfo.last_name"
        ></avatar>
        <h5 class="mt-3 ">{{accUnitDisplayed.user.userinfo.first_name}} {{accUnitDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accUnitDisplayed.user.email}}</p>
        <p class="">Contact: {{accUnitDisplayed.user.userinfo.contact_number}}</p>
        <p class="">Gender: {{accUnitDisplayed.user.userinfo.gender}}</p>
        <p class="mt-4">Unit: {{accUnitDisplayed.department.name}}</p>
        <p class="">Role: {{accUnitDisplayed.user.userinfo.role.role}}</p>
      </div>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" @click="cancel()"> Close </b-button>
    </template>
   </b-modal>

   <!--- APPROVE MODAL -->
   <!-- <b-modal id="approveModal" centered title="Confirm Approve">
    <p class="">An email of approval will be sent to the user. Are you sure you want to approve this account?</p>
    <template #modal-footer="{cancel}">
     <b-button :disabled="isLoading" variant="primary" @click="cancel()"> Cancel </b-button>
     <b-button :disabled="isLoading" variant="success" v-on:click.prevent="setStatus">
      Approve
     </b-button>
    </template>
   </b-modal> -->
  </div>
 </div>
</template>
<script>
 import Avatar from 'vue-avatar';
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
    current_id: '',
    isLoading: false,
    search: '',
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
    }
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
   document.title = 'Account Management';
   this.isLoading = true;
   this.initialLoading = true;
   await this.$store.dispatch('account/unitAccounts', 1);
   await this.$store.dispatch('account/orgAccounts', 1);
   this.isLoading = false;
   this.initialLoading = false;
  },
  computed: {
   ...mapState('account', ['accounts', 'unit_accounts', 'org_accounts']),
  },
  components: {
   Avatar,
  },
  methods: {
   ...mapActions('account', ['approveAccountType', 'deleteAccount']),
   async setStatus() {
    this.current_id = this.approve_data.id;
    this.isLoading = true;
    const res = await this.approveAccountType(this.approve_data.id);
    if (res.status == 200) {
     this.isLoading = false;
     this.current_id = '';
     this.$bvModal.hide('approveModal');
     this.$toast.success('Account Approved \nAn email has been sent to the user.');
     if (this.approve_data.type == 'Organization') {
      this.$store.commit('account/UPDATE_ORGACC_STATUS', this.approve_data.id);
     } else if (this.approve_data.type == 'Department') {
      this.$store.commit('account/UPDATE_UNITACC_STATUS', this.approve_data.id);
     }
    } else {
     this.current_id = '';
     this.$bvModal.hide('approveModal');
     this.isLoading = false;
     this.$toast.error('Something went wrong');
    }
    this.approve_data = { id: '', type: '', index: '' };
   },
   setUpdateAccount(data, type) {
    this.$store.commit('account/SET_UPDATE_ACCOUNT', { data: data, type: type });
    this.$router.push({ name: 'accountupdate', params: { slug: data.id } });
   },
   async removeAccount() {
    this.isLoading = true
    const res = await this.deleteAccount(this.delete_data.id);
    if (res.status == 200) {
      if(this.delete_data.type == 'Department'){
        await this.$store.dispatch('account/unitAccounts', 1);
      }
      else {
        await this.$store.dispatch('account/orgAccounts', 1);
      }
      this.delete_data = { id: '', type: ''};
      this.$toast.success('Account removed successfully');
      this.$bvModal.hide('deleteModal');
    } else {
     this.delete_data = { id: '', type: ''};
     this.$toast.error('Something went wrong');
     this.$bvModal.hide('deleteModal');
    }

     this.isLoading = false
   },
   async getOrgAccounts(page = 1) {
    if (this.orgStatus == 'All Accounts') {
     await this.$store.dispatch('account/orgAccounts', page);
    }
    if (this.orgStatus == 'Approved') {
     await this.$store.dispatch('account/approvedOrgAccounts', page);
    }
    if (this.orgStatus == 'Pending') {
     await this.$store.dispatch('account/pendingOrgAccounts', page);
    }
   },
   async getUniAccounts(page) {
    if (this.unitStatus == 'All Accounts') {
     await this.$store.dispatch('account/unitAccounts', page);
    }
    if (this.unitStatus == 'Approved') {
     await this.$store.dispatch('account/approvedUnitAccounts', page);
    }
    if (this.unitStatus == 'Pending') {
     await this.$store.dispatch('account/pendingUnitAccounts', page);
    }
    console.clear()

   },
   async searchOrganization(page) {
    this.isSearching = true;
    let data = {
     search: this.search_organization,
     status: this.orgStatus,
    };
    await this.$store.dispatch('account/searchOrgAccount', { page: page, data: data });
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
    await this.$store.dispatch('account/searchUnitAccount', { page: page, data: data });
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

