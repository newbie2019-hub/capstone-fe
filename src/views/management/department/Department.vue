<template>
  <div>
    <div class="container pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row me-0 ms-0 justify-content-center mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-5">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Unit</h5>
                <p class="mb-4"><small>Manage your unit below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
               
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
               <button v-on:click.prevent="$bvModal.show('newDepartmentModal')" class="btn btn-purple btn-sm me-2"><i class="bi bi-plus-circle"></i> New Unit</button>
              <div class="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input type="text" v-model="search_department" class="form-control" id="floatingSearchDep" placeholder="Search here">
                  <label  for="floatingSearchDep" class="">Search</label>
                  <button @click.prevent="departmentSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="departments.data == 0">No accounts under the unit</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{departments.from}} to {{departments.to}} out of {{departments.total}} units</caption>
                <thead>
                  <tr>
                    <th scope="col">Logo</th>
                    <th scope="col" class="text-nowrap">Unit</th>
                    <th scope="col" class="text-nowrap">Abbreviation</th>
                    <th scope="col" class="text-nowrap">Added on</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(dep, i) in departments.data" :key="i">
                    <th>
                      <b-avatar variant="dark" :src="`${imgURL}/${dep.image}`"></b-avatar>
                    </th>
                    <td>{{dep.name}}</td>
                    <td :class="dep.appreviation ? '' : 'text-muted'">{{dep.abbreviation ? dep.appreviation : 'None'}}</td>
                    <td class="text-nowrap">{{dep.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button :disabled="isLoading && update_department.department_id == dep.id" v-on:click.prevent="update_department = JSON.parse(JSON.stringify(dep)); $bvModal.show('updateDepartmentModal')" href="" v-b-tooltip.hover title="Update" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i v-if="!isLoading || update_department.department_id != dep.id" class="bi bi-pencil-square"></i>
                          <div v-else class="spinner-grow text-light spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                        <button :disabled="isLoading && delete_id == dep.id" v-on:click.prevent="delete_id = dep.id; $bvModal.show('deleteDepartmentModal')" href="" v-b-tooltip.hover title="Delete" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash" v-if="!isLoading || delete_id != dep.id"></i>
                          <div v-else class="spinner-grow text-light spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="departments.data">
              <pagination :showDisabled="true" :align="'right'" :data="departments" @pagination-change-page="departmentSearch">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 mb-3">
          <div class="card p-5">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Unit Roles</h5>
                <p class="mb-4"><small>Manage your roles for the unit below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <button v-on:click.prevent="$bvModal.show('newRoleModal')" class="btn btn-purple btn-sm me-2"><i class="bi bi-plus-circle"></i> New Role</button>
              <div class="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input type="text" v-model="search_role" class="form-control" id="floatingSearchDep" placeholder="Search here">
                  <button @click.prevent="departmentRoleSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
                  <label for="floatingSearchDep" class="">Search</label>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="dep_roles.data == 0">No roles added for unit. Add a role by clicking the New Role button</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{dep_roles.from}} to {{dep_roles.to}} out of {{dep_roles.total}} unit roles</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Role</th>
                    <th scope="col" class="text-nowrap">Added on</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(role, i) in dep_roles.data" :key="i">
                    <td class="text-nowrap">{{role.role}}</td>
                    <td>{{role.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-if="role.role != 'University Admin'" v-on:click.prevent="data.role = role.role; data.role_id = role.id; $bvModal.show('updateRoleModal')" href="" v-b-tooltip.hover title="Update" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button v-if="role.role != 'University Admin'" v-on:click.prevent="delete_id = role.id; $bvModal.show('deleteModal')" href="" v-b-tooltip.hover title="Delete" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
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
            <div class="row mt-3" v-if="dep_roles.data">
              <pagination :showDisabled="true" :align="'right'" :data="dep_roles" @pagination-change-page="departmentRoleSearch">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  <!-- UPDATE ROLE MODAL --->
  <b-modal id="updateRoleModal" centered title="Update Role">
    <div class="form-floating mb-2 mt-3 ">
      <input v-model="data.role" type="text" class="form-control" id="updateRole" placeholder="">
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

  <!-- NEW DEPARTMENT MODAL --->
  <b-modal id="newDepartmentModal" centered title="New Department">
    <label for="brand" class="mt-2">Image</label>
    <VueFileAgent class="mb-4"
            ref="vueFileAgent"
            @select="filesSelected($event)"
            :multiple="false"
            :maxSize="'5MB'"
            :deletable="true"
            :accept="'image/*,'"
            :theme="'list'"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            :errorText="{
              type: 'Invalid file type. Only image file is allowed',
              size: 'Image should not exceed 5MB in size',
            }"
        v-model="fileRecords"
      ></VueFileAgent>
    <div class="form-floating mb-2 mt-4">
      <input v-model="department.department" type="text" class="form-control" id="newDepartment" placeholder="name@example.com">
      <label for="newDepartmet">Type a new department</label>
    </div>
    <div class="form-floating mb-2 mt-4">
      <input v-model="department.abbreviation" type="text" class="form-control" id="newDepAbbrev" placeholder="">
      <label for="newOrgAbbrev">Abbreviation</label>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="saveDepartment" :disabled="isLoading">
        Save Department
      </b-button>
    </template>
   </b-modal>

  <!-- UPDATE DEPARTMENT MODAL --->
  <b-modal id="updateDepartmentModal" centered title="Update Department">
    <label for="brand" class="mt-2">Image</label>
    <VueFileAgent class="mb-4"
            ref="vueFileAgent"
            @select="filesSelected($event)"
            :multiple="false"
            :maxSize="'5MB'"
            :deletable="true"
            :accept="'image/*,'"
            :theme="'list'"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            :errorText="{
              type: 'Invalid file type. Only image file is allowed',
              size: 'Image should not exceed 5MB in size',
            }"
        v-model="fileRecords"
      ></VueFileAgent>
    <div class="form-floating mb-2 mt-4">
      <input v-model="update_department.name" type="text" class="form-control" id="updateDepartment" placeholder="name@example.com">
      <label for="newDepartmet">Type a new department</label>
    </div>
    <div class="form-floating mb-2 mt-4">
      <input v-model="update_department.abbreviation" type="text" class="form-control" id="newDepAbbrev" placeholder="">
      <label for="newOrgAbbrev">Abbreviation</label>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateDepartment" :disabled="isLoading">
        Update
      </b-button>
    </template>
   </b-modal>

 <!-- DELETE MODAL --->
  <b-modal id="deleteDepartmentModal" centered title="Confirm Delete">
    <p class="">Deleting a department will delete all accounts under that department. You cannot undo this action but you can set a new department for those accounts. Are you sure you want to delete this department?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="primary" v-on:click.prevent="$bvModal.show('selectDepartmentModal')" :disabled="isLoading">
        Change Department
      </b-button>
      <b-button variant="danger" v-on:click.prevent="deleteDepartment" :disabled="isLoading">
        Delete
      </b-button>
    </template>
   </b-modal>

  <!-- CHANGE DEPARTMENT MODAL --->
  <b-modal id="selectDepartmentModal" centered title="Select Department">
    <p class="mb-3">If there are accounts under this department, you can transfer them to a new department so that those accounts will not be deleted.</p>
    <label for="floatingSelect text-muted "><small>New Department</small></label>
    <select v-model="new_department" class="form-select" id="floatingSelect" aria-label="Select deparments modal">
      <option :value="dep.id" v-for="(dep, i) in alldepartments" :key="i" :disabled="delete_id == dep.id">{{dep.name}}</option>
    </select>
    <template #modal-footer = {cancel} >
      <b-button variant="success" @click="cancel()">
        Save
      </b-button>
    </template>
   </b-modal>

  <!-- DELETE MODAL --->
  <b-modal id="deleteModal" centered title="Confirm Delete">
    <p class="">Deleting a role will delete all accounts under that role. You cannot undo this action but you can set a new role for those accounts. Are you sure you want to delete this role?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="primary" v-on:click.prevent="$bvModal.show('selectRoleModal')">
        Change Role
      </b-button>
      <b-button variant="danger" v-on:click.prevent="deleteRole">
        Delete
      </b-button>
    </template>
   </b-modal>

  <!-- CHANGE ROLE MODAL --->
  <b-modal id="selectRoleModal" centered title="Select Role">
    <p class="mb-3">If there are accounts under this role you can select a new role so that those accounts will not be deleted.</p>
    <label for="floatingSelect text-muted "><small>New Role</small></label>
    <select v-model="role" class="form-select" id="floatingSelect" aria-label="Select role modal">
      <option :value="role.id" v-for="(role, i) in dep_roles.data" :key="i" :disabled="delete_id == role.id">{{role.role}}</option>
    </select>
    <div class="mt-3" v-if="dep_roles.data">
      <pagination :showDisabled="true" :align="'right'" :data="dep_roles" @pagination-change-page="getRoleDepartments">
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

  </div>
</template>
<script>
import { mapState } from 'vuex';
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
      isLoading: false,
      delete_id: '',
      role: '',
      search_department: '',
      search_role: '',
      data: {
        role: '',
        role_id: ''
      },
      new_department: '',
      department: {
        image: '',
        department: '',
        department_id: '',
      },
      update_department: {
        image: '',
        name: '',
        department_id: '',
      },
      isSearching: false,
      fileRecords: [],
      fileRecordsForUpload: [],
    }
  },
  watch: {
    search_department(before, after){
      this.debouncedDepartmentSearch()
    },
    search_role(before, after){
      this.debouncedDepartmentRoleSearch()
    }
  },
  created: function () {
    this.debouncedDepartmentRoleSearch = _.debounce(this.departmentRoleSearch, 1000)
    this.debouncedDepartmentSearch = _.debounce(this.departmentSearch, 1000)
  },
  async mounted() {
    document.title = "Department and Department Roles Management"
    this.initialLoading = true
    await this.$store.dispatch('depandorg/getDepartments', 1)
    await this.$store.dispatch('depandorg/getAllDepartments')
    await this.$store.dispatch('depandorg/getRoleDepartments', 1)
    this.initialLoading = false
  },
  methods: {
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
    async getDepartments(page = 1){
      await this.$store.dispatch('depandorg/getDepartments', page)
    },
    async getRoleDepartments(page = 1){
      await this.$store.dispatch('depandorg/getRoleDepartments', page)
    },
    async saveDepartment(){
      if(this.department.department == '') return this.$toast.error('Department name is required!');  
      
      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `${this.envURL}/admin/uploadDepartmentImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.department.image = img[0].data
      }

      const res = await this.$store.dispatch('depandorg/saveDepartment', this.department)
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getDepartments', 1)
        this.$toast.success('Department added successfully!')
        this.$bvModal.hide('newDepartmentModal')
        this.department = {department: '', department_id: ''}
      }
      this.isLoading = false
    },
    async updateDepartment(){
      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `${this.envURL}/admin/uploadDepartmentImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.update_department.image = img[0].data
      }

      const res = await this.$store.dispatch('depandorg/updateDepartment', this.update_department)
      if(res.status == 200 ){
        this.getDepartments()
        this.$toast.success('Department updated successfully!')
        this.$bvModal.hide('updateDepartmentModal')
        this.update_department = {department: '', department_id: ''}
      }
      this.isLoading = false
    },
    async deleteDepartment(){
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/deleteDepartment', {id: this.delete_id, data: this.new_department})
      if(res.status == 200 ){
        await this.$store.dispatch('depandorg/getDepartments', 1)
        this.$toast.success('Department deleted successfully!')
        this.$bvModal.hide('deleteDepartmentModal')
        this.new_department = ''
      }
      this.isLoading = false
    },
    async deleteRole(){
      const res = await this.$store.dispatch('depandorg/deleteDepRole', {id: this.delete_id, role: this.role})
      if(res.status == 200 ){
        this.$toast.success('Role deleted successfully!')
        this.$bvModal.hide('deleteModal')
      }
    },
    async saveRole(){
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/saveDepRole', this.data)
      if(res.status == 200 ){
        this.$toast.success('Role added successfully!')
        this.$bvModal.hide('newRoleModal')
        this.data = {role: '', role_id: ''}
      }
      this.isLoading = false
    },
    async updateRole(){
      this.isLoading = true
      const res = await this.$store.dispatch('depandorg/updateDepRole', this.data)
      if(res.status == 200 ){
        this.$toast.success('Role updated successfully!')
        await this.getRoleDepartments()
        this.$bvModal.hide('updateRoleModal')
        this.data = {role: '', role_id: ''}
      }
      this.isLoading = false
    },
    async searchDepartment(page){
      this.isSearching = true
      let data = {
        search: this.search_department
      }
      await this.$store.dispatch('depandorg/searchDepartment', {page: page, data: data})
      this.isSearching = false
    },
    async searchDepartmentRole(page){
      this.isSearching = true
      let data = {
        search: this.search_role
      }
      await this.$store.dispatch('depandorg/searchDepartmentRole', {page: page, data: data})
      this.isSearching = false
    },
    departmentSearch(page = 1){
      if(this.search_department == ''){
        this.getDepartments(page)
      }
      else {
        this.searchDepartment(page)
      }
    },
    departmentRoleSearch(page = 1){
      if(this.search_role == ''){
        this.getRoleDepartments(page)
      }
      else {
        this.searchDepartmentRole(page)
      }
    },
    
  },
  computed: {
    ...mapState('depandorg', ['departments', 'dep_roles', 'alldepartments']),

  },
  
}
</script>