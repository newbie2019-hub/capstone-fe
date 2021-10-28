<template>
  <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Organizations</h5>
                <p class="mb-4"><small>Manage your organizations below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newOrganizationModal')" class="btn btn-purple"><i class="bi bi-diagram-2"></i> New Org</button>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_organization" class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search</label>
                  <button @click.prevent="organizationSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="organizations.data == 0">No accounts under organizations</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{organizations.from}} to {{organizations.to}} out of {{organizations.total}} organizations</caption>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" class="text-nowrap text-center">Organization</th>
                    <th scope="col" class="text-nowrap">Abbreviation</th>
                    <th scope="col" class="text-nowrap">Department</th>
                    <th scope="col" class="text-nowrap">Added on</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(org, i) in organizations.data" :key="i">
                    <th scope="row" class="justify-content-center">
                      {{organizations.from + i}}
                    </th>
                    <td class="">{{org.name}}</td>
                    <td :class="org.abbreviation ? '':'text-muted'">{{org.abbreviation ? org.abbreviation : 'N/A'}}</td>
                    <td :class="org.department ? '':'text-muted'">{{org.department ? org.department.name : 'N/A'}}</td>
                    <td class="text-nowrap text-center">{{org.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="update_organization = {...org}; $bvModal.show('updateOrganizationModal')" href="" v-b-tooltip.hover title="Update" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button :disabled="isLoading && delete_id == org.id" v-on:click.prevent="delete_id = org.id; $bvModal.show('deleteOrganizationModal')" href="" v-b-tooltip.hover title="Delete" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                          <div v-if="isLoading && delete_id == org.id" class="spinner-grow text-light spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="organizations.data">
              <pagination :showDisabled="true" :align="'right'" :data="organizations" @pagination-change-page="organizationSearch">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12 mt-3 mb-3">
          <div class="card p-4">
           <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Organization Roles</h5>
                <p class="mb-4"><small>Manage your roles for organizations below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newRoleModal')" class="btn btn-purple"><i class="bi bi-diagram-2"></i> New Role</button>
              </div>
            </div>
             <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_role" class="form-control" id="floatingSearchOrganization" placeholder="Search here">
                  <button @click.prevent="organizationRoleSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
                  <label for="floatingSearchOrganization" class="">Search</label>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="org_roles.data == 0">No roles for department added</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" class="text-nowrap">Organization Role</th>
                    <th scope="col" class="text-nowrap">Added on</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(role, i) in org_roles.data" :key="i">
                    <th>{{org_roles.from + i}}</th>
                    <td>{{role.role}}</td>
                    <td>{{role.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button :disabled="isLoading" v-on:click.prevent="role_update = {...role}; $bvModal.show('updateRoleModal')" href="" v-b-tooltip.hover title="Update" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button :disabled="isLoading" v-on:click.prevent="delete_id = role.id; $bvModal.show('deleteModal')" href="" v-b-tooltip.hover title="Delete" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                          <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="org_roles.data">
              <pagination :showDisabled="true" :align="'right'" :data="org_roles" @pagination-change-page="organizationRoleSearch">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

 <!-- NEW ORGANIZATION MODAL --->
  <b-modal id="newOrganizationModal" centered title="New Organization">
    <label for="brand" class="mt-2">Logo</label>
    <VueFileAgent class="mb-4"
            ref="vueFileAgent"
            @select="filesSelected($event)"
            :multiple="false"
            :maxSize="'3MB'"
            :deletable="true"
            :accept="'image/*,'"
            :theme="'list'"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            :errorText="{
              type: 'Invalid file type. Only image file is allowed',
              size: 'Image should not exceed 3MB in size',
            }"
        v-model="fileRecords"
      ></VueFileAgent>
    <div class="form-floating mb-2 mt-3 ">
      <input v-model="organization.organization" type="text" class="form-control" id="newOrganization" placeholder="name@example.com">
      <label for="newOrganization">Type a new organization</label>
    </div>
    <div class="form-floating mb-2 mt-4">
      <input v-model="organization.abbreviation" type="text" class="form-control" id="newOrgAbbrev" placeholder="">
      <label for="newOrgAbbrev">Abbreviation</label>
    </div>
    <!---- FIX UPDATE ON ORGANIZATION -> ADD THE DEPARTMENT AS TO WHERE IT BELONGS ---->
    <div class="mb-2 mt-3">
       <select v-model="organization.department_id" class="form-select">
        <option :value="unit.id" v-for="(unit, i) in signup.unit" :key="i">{{unit.name}}</option>
      </select>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="saveOrganization" :disabled="isLoading">
        Save Organization
      </b-button>
    </template>
   </b-modal>

  <!-- UPDATE ORGANIZATION MODAL --->
  <b-modal id="updateOrganizationModal" centered title="Update Organization">
    <label for="brand" class="mt-2">Logo</label>
    <VueFileAgent class="mb-4"
            ref="vueFileAgent"
            @select="filesSelected($event)"
            :multiple="false"
            :maxSize="'3MB'"
            :deletable="true"
            :accept="'image/*,'"
            :theme="'list'"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            :errorText="{
              type: 'Invalid file type. Only image file is allowed',
              size: 'Image should not exceed 3MB in size',
            }"
        v-model="fileRecords"
      ></VueFileAgent>
    <div class="form-floating mb-2 mt-3 ">
      <input v-model="update_organization.name" type="text" class="form-control" id="updateOrganization" placeholder="">
      <label for="updateOrganization">Type a new organization</label>
    </div>
    <div class="form-floating mb-2 mt-4">
      <input v-model="update_organization.abbreviation" type="text" class="form-control" id="updateOrgAbbrev" placeholder="">
      <label for="updateOrgAbbrev">Abbreviation</label>
    </div>
    <!---- FIX UPDATE ON ORGANIZATION -> ADD THE DEPARTMENT AS TO WHERE IT BELONGS ---->
    <div class="mb-2 mt-3">
       <select v-model="update_organization.department_id" class="form-select" id="unitSelect" aria-label="Department">
        <option value="default" selected disabled>Select a department</option>
        <option :value="unit.id" v-for="(unit, i) in signup.unit" :key="i">{{unit.name}}</option>
      </select>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateOrganization" :disabled="isLoading">
        Update
      </b-button>
    </template>
   </b-modal>

 <!-- DELETE MODAL --->
  <b-modal id="deleteOrganizationModal" centered title="Confirm Delete">
    <p class="">Deleting an organization will delete all accounts under that organization. You cannot undo this action but you can set a new organization for those accounts. Are you sure you want to delete this department?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="primary" v-on:click.prevent="$bvModal.show('selectOrganizationModal')">
        Change Organization
      </b-button>
      <b-button variant="danger" v-on:click.prevent="deleteOrganization" :disabled="isLoading">
        Delete
      </b-button>
    </template>
   </b-modal>

  <!-- CHANGE ORGANIZATION MODAL --->
  <b-modal id="selectOrganizationModal" centered title="Select Organization">
    <p class="mb-3">If there are accounts under this organization, you can transfer them to a new organization so that those accounts will not be deleted.</p>
    <label for="organizationModal"><small>New Organization</small></label>
    <select v-model="new_organization" class="form-select" id="organizationModal" aria-label="Select Organization modal">
      <option :value="org.id" v-for="(org, i) in organizations.data" :key="i" :disabled="delete_id == org.id">{{org.organization}}</option>
    </select>
    <div class="mt-4" v-if="organizations.data">
      <pagination :showDisabled="true" :align="'right'" :data="organizations" @pagination-change-page="getOrganizations">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
      </pagination>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="success" @click="cancel()">
        Save
      </b-button>
    </template>
   </b-modal>
   
  <!-- UPDATE ROLE MODAL --->
  <b-modal id="updateRoleModal" centered title="Update Role">
    <div class="form-floating mb-2 mt-3 ">
      <input v-model="role_update.role" type="text" class="form-control" id="updateRole" placeholder="">
      <label for="floatingInput">Type a new role</label>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateRole" :disabled="isLoading">
        Update Role
      </b-button>
    </template>
   </b-modal>

  <!-- NEW ROLE MODAL --->
  <b-modal id="newRoleModal" centered title="New Role">
    <div class="form-floating mb-2 mt-3 ">
      <input v-model="data.role" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Type a new role</label>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="saveRole" :disabled="isLoading">
        Save Role
      </b-button>
    </template>
   </b-modal>

  <!-- DELETE MODAL --->
  <b-modal id="deleteModal" centered title="Confirm Delete">
    <p class="">Deleting a role will delete all accounts under that role. You cannot undo this action but you can set a new role for those accounts. Are you sure you want to delete this role?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="primary" v-on:click.prevent="$bvModal.show('selectRoleModal')" >
        Change Role
      </b-button>
      <b-button variant="danger" v-on:click.prevent="deleteRole" :disabled="isLoading">
        Delete
      </b-button>
    </template>
   </b-modal>

  <!-- CHANGE ROLE MODAL --->
  <b-modal id="selectRoleModal" centered title="Select Role">
    <p class="mb-3">If there are accounts under this role you can select a new role so that those accounts will not be deleted.</p>
    <label for="floatingSelect text-muted "><small>New Role</small></label>
    <select v-model="role" class="form-select" id="floatingSelect" aria-label="Select role modal">
      <option :value="role.id" v-for="(role, i) in org_roles.data" :key="i" :disabled="delete_id == role.id">{{role.role}}</option>
    </select>
    <template #modal-footer = {cancel} >
      <b-button variant="success" @click="cancel()">
        Save
      </b-button>
    </template>
   </b-modal>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

// import Avatar from 'vue-avatar';
export default {
  components: {
    // Avatar
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
 data(){
    return {
      initialLoading: false,
      isLoading: false,
      delete_id: '',
      role: '',
      new_organization: '',
      data: {
        role: '',
        role_id: ''
      },
      search_organization: '',
      search_role: '',
      isSearching: false,
      organization: {
        organization: '',
        image: '',
        abbreviation: '',
        organization_id: '',
      },
      update_organization: {
        organization: '',
        image: '',
        abbreviation: '',
        organization_id: '',
        department_id: '',
        department: {
          id: ''
        }
      },
      fileRecords: [],
      fileRecordsForUpload: [],
      role_update: '',
    }
  },
  watch: {
    search_organization(before, after){
      this.debouncedOrganizationSearch()
    },
    search_role(before, after){
      this.debouncedOrganizationRoleSearch()
    },
    'update_organization.department_id': function(){
      this.update_organization.department_id == null ? this.update_organization.department_id = 'default' : ''
    }
  },
  created: function () {
    this.debouncedOrganizationRoleSearch = _.debounce(this.organizationRoleSearch, 1000)
    this.debouncedOrganizationSearch = _.debounce(this.organizationSearch, 1000)
  },
  async mounted() {
    document.title = "Organization and Organization Roles Management"
    this.initialLoading = true
    await this.$store.dispatch('depandorg/getOrganizations', 1)
    await this.$store.dispatch('depandorg/getRoleOrganizations')
    await this.getSignUpInfo();
    this.initialLoading = false
  },
  methods: {
     ...mapActions('auth', ['getSignUpInfo']),
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
      (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
      validFileRecords
      );
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      }
    },
    onBeforeDelete: function(fileRecord) {
      console.log(fileRecord)
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      }
    },
    async getOrganizations(page = 1){
      await this.$store.dispatch('depandorg/getOrganizations', page)
    },
    async getRoleOrganizations(page = 1){
      await this.$store.dispatch('depandorg/getRoleOrganizations', page)
    },
    async deleteRole(){
      const res = await this.$store.dispatch('depandorg/deleteOrgRole', {id: this.delete_id, role: this.role})
      this.isLoading = true
      if(res.status == 200 ){
        this.$toast.success('Role deleted successfully!')
        this.$bvModal.hide('deleteModal')
      }
      this.isLoading = false
    },
    async saveOrganization(){
      if(this.organization.organization == '') return this.$toast.error('Organization name is required!');  
      
      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `http://127.0.0.1:8000/api/admin/uploadOrganizationImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.organization.image = img[0].data
      }
      const res = await this.$store.dispatch('depandorg/saveOrganization', this.organization)
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getOrganizations', 1)
        this.$toast.success('Organization added successfully!')
        this.$bvModal.hide('newOrganizationModal')
        this.organization = {organization: '', abbreviation: '', organization_id: ''}
      }
      this.isLoading = false
    },
    async updateOrganization(){
      if(this.update_organization.name == '') return this.$toast.error('Organization name is required')

      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `http://127.0.0.1:8000/api/admin/uploadOrganizationImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.update_organization.image = img[0].data
      }
      
      const res = await this.$store.dispatch('depandorg/updateOrganization', this.update_organization)
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getOrganizations', 1)
        this.$toast.success('Organization updated successfully!')
        this.$bvModal.hide('updateOrganizationModal')
        this.update_organization = {organization: '', abbreviation: '', organization_id: ''}
      }

      this.isLoading = false
    },
    async deleteOrganization(){
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/deleteOrganization', {id: this.delete_id, data: this.new_organization})
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getOrganizations', 1)
        this.$toast.success('Organization deleted successfully!')
        this.$bvModal.hide('deleteOrganizationModal')
        this.new_organization = ''
        this.delete_id = ''
      }
      this.isLoading = false
    },
    async saveRole(){
      if(this.data.role.trim() == '') return this.$toast.error('Role is required')
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/saveOrgRole', this.data)
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getRoleOrganizations')
        this.$toast.success('Role added successfully!')
        this.$bvModal.hide('newRoleModal')
        this.data = {role: '', role_id: ''}
      }
      this.isLoading = false
    },
    async updateRole(){
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/updateOrgRole', this.role_update)
      if(res.status == 200 ){
        this.$toast.success('Role updated successfully!')
        this.$bvModal.hide('updateRoleModal')
        this.role_update =''
      }
      this.isLoading = false
    },
    async searchOrganization(page){
      this.isSearching = true
      let data = {
        search: this.search_organization
      }
      await this.$store.dispatch('depandorg/searchOrganization', {page: page, data: data})
      this.isSearching = false
    },
    async searchOrganizationRole(page){
      this.isSearching = true
      let data = {
        search: this.search_role
      }
      await this.$store.dispatch('depandorg/searchOrganizationRole', {page: page, data: data})
      this.isSearching = false
    },
    organizationSearch(page = 1){
      if(this.search_organization == ''){
        this.getOrganizations(page)
      }
      else {
        this.searchOrganization(page)
      }
    },
    organizationRoleSearch(page = 1){
      if(this.search_role == ''){
        this.getRoleOrganizations(page)
      }
      else {
        this.searchOrganizationRole(page)
      }
    },
    
  },
  computed: {
    ...mapState('depandorg', ['organizations', 'org_roles']),
    ...mapState('auth', ['signup']),
    
  },
 
}
</script>