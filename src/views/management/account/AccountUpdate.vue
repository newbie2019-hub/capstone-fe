<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-12">
          <div class="card p-5 mb-4">
            <h5>Account Update</h5>
            <p class="text-muted">Update user informations</p>
            <div v-if="initialLoading" class="row justify-content-center align-items-center mt-3" style="height: 250px">
              <div class="spinner-grow text-secondary" role="status" style="width: 2.5rem; height: 2.5rem">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="row mt-3 gap-2" v-else>
              <div class="col-11 col-md-5 col-lg-5 col-xl-4">
                  <label>Upload Image</label>
                  <VueFileAgent
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
              </div>
              <h5 class="mt-2">User Information</h5>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                 <div class="">
                  <label for="firstname" class="form-label">First Name</label>
                  <input v-model="data.first_name" type="text" class="form-control" id="firstname" placeholder="First Name">
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="middlename" class="form-label">Middle Name</label>
                  <input v-model="data.middle_name" type="text" class="form-control" id="middlename" placeholder="">
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="lastname" class="form-label">Last Name</label>
                  <input v-model="data.last_name" type="text" class="form-control" id="lastname" placeholder="">
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="contactnumber" class="form-label">Contact Number</label>
                  <input v-model="data.contact_number" type="text" class="form-control" id="contactnumber" placeholder="">
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="text-muted "><small>Select Gender</small></label>
                  <select v-model="data.gender" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option value="Select Gender" selected disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4" v-if="update_account.type == 'Organization'">
                <div class="">
                    <label for="text-muted "><small>Select Organization</small></label>
                    <select v-model="data.org_unit_id" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="org.id" v-for="(org, i) in signup.organization" :key="i">{{org.name}}</option>
                    </select>
                  </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4" v-else>
                <div class="">
                  <label for="floatingSelect text-muted "><small>Select Unit</small></label>
                  <select v-model="data.org_unit_id" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option :value="unit.id" v-for="(unit, i) in signup.unit" :key="i">{{unit.name}}</option>
                  </select>
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4"  v-if="update_account.type == 'Organization'">
                <div class="">
                  <label for="text-muted "><small>Organization Role</small></label>
                  <select v-model="data.role_id" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option :value="role.id" v-for="(role, i) in signup.organization_roles" :key="i">{{role.role}}</option>
                  </select>
                </div>
              </div>
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4"  v-else>
                <label for="floatingSelect text-muted "><small>Unit Role</small></label>
                <select v-model="data.role_id" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option :value="role.id" v-for="(role, i) in signup.unit_roles" :key="i">{{role.role}}</option>
                </select>
              </div>
              <!-- <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="text-muted "><small>Account Status</small></label>
                  <select v-model="data.status" class="form-select" id="status" aria-label="Floating label select example">
                    <option value="Account Status" selected disabled>Select status</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div> -->
              <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                <div class="">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="data.email" type="text" class="form-control" id="email" placeholder="">
                </div>
              </div>
            </div>
            <div v-if="!initialLoading" class="form-check mt-3">
              <input v-model="data.emailNotif" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Send Email Notification
              </label>
            </div>
            <div v-if="!initialLoading"  class="d-flex mt-4">
              <button :disabled="isLoading" v-on:click.prevent="updateAccount" class="btn btn-purple me-2">
                 <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                 </div>
                 Save Update
              </button>
              <button :disabled="isLoading" v-on:click.prevent="$router.push('/home/accounts')" class="btn btn-purple">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return {
      data: {
        first_name: '',
        middle_name: '',
        last_name: '',
        contact_number: '',
        role_id: '',
        organization_id: '',
        gender: 'Select gender',
        emailNotif: false,
        status: 'Approve'
      },
      isLoading: false,
      initialLoading: false,
      fileRecords: [],
      fileRecordsForUpload: [],
    }
  },
  async mounted(){
    this.initialLoading = true
    this.$store.dispatch('auth/checkUser')
    await this.getSignUpInfo();

    if(this.update_account.type == 'Organization'){
      this.data = {
        id: this.update_account.user.userinfo.id,
        first_name: this.update_account.user.userinfo.first_name,
        middle_name: this.update_account.user.userinfo.middle_name,
        last_name: this.update_account.user.userinfo.last_name,
        email: this.update_account.user.email,
        contact_number: this.update_account.user.userinfo.contact_number,
        gender: this.update_account.user.userinfo.gender,
        role_id: this.update_account.user.userinfo.role.id,
        org_unit_id: this.update_account.organization.id,
        status: this.update_account.user.status,
        account_type: this.update_account.user.type,
      }
    }

    if(this.update_account.type == 'Department'){
      this.data = {
        id: this.update_account.user.userinfo.id,
        first_name: this.update_account.user.userinfo.first_name,
        middle_name: this.update_account.user.userinfo.middle_name,
        last_name: this.update_account.user.userinfo.last_name,
        email: this.update_account.user.email,
        contact_number: this.update_account.user.userinfo.contact_number,
        gender: this.update_account.user.userinfo.gender,
        role_id: this.update_account.user.userinfo.role.id,
        org_unit_id: this.update_account.department.id,
        status: this.update_account.user.status,
        account_type: this.update_account.user.type,
      }
    }
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
       var i = this.fileRecordsForUpload.indexOf(fileRecord);
       if (i !== -1) {
         this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
         if (k !== -1) this.fileRecords.splice(k, 1);
       }
     },
    async updateAccount(){
      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `${this.envURL}/admin/uploadAccountImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );
        this.data.image = img[0].data
      }
      
      const res = await this.$store.dispatch('account/updateAccount', this.data)
      res.status == 200 ? this.$toast.success('Account update successful') : this.$toast.error('Account update failed')
      this.isLoading = false
      this.$router.push('/home/accounts')
    },
  },
  computed: {
    ...mapState('auth', ['signup']),
    ...mapState('account', ['update_account']),
  }

}
</script>