<template>
 <div class="container ">
  <div class="row justify-content-center mt-3">
   <div class="col-11 col-md-11 col-lg-11 col-xl-11">
    <div class="row justify-content-center">
    <div class="col-11 col-md-12 col-lg-12 col-xl-12">
       <h5>User Profile Image</h5>
       <hr class="mt-2 mb-2"/>   
    </div>
     <div class="col-11 col-md-6 col-lg-5 col-xl-5">
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
     <div class="col-11 col-md-6 col-lg-7 col-xl-7"></div>
     <div class="col-11 col-md-12 col-lg-12 col-xl-12 mt-4">
       <h5>Basic Information</h5>
       <hr class="mt-2 mb-4"/>   
     </div>
     <div class="col-11 col-md-6 col-lg-6 col-xl-6">
      <label for="firstname">First Name</label>
      <input v-model="data.first_name" type="text" class="form-control" id="firstname">
      <label for="lastname">Last Name</label>
      <input v-model="data.last_name" type="text" class="form-control" id="lastname">
      <label for="contactnumber">Contact Number</label>
      <input v-model="data.contact_number" class="form-control" id="contactnumber">
     </div>
     <div class="col-11 col-md-6 col-lg-6 col-xl-6">
      <label for="middlename">Middle Name</label>
      <input v-model="data.middle_name" type="text" class="form-control" id="middlename">
      <label for="gender">Gender</label>
      <select v-model="data.gender" class="form-select" id="gender">
       <option value="Male">Male</option>
       <option value="Female">Female</option>
      </select>
     </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-12 col-lg-12 col-xl-12">
        <h5 class="mt-4">Login Credentials</h5>
        <hr class="mt-2 mb-4"/>
     </div>
     <div class="col-11 col-md-6 col-lg-6 col-xl-6">
      <label for="email">Email</label>
      <input v-model="data.email" type="email" class="form-control" id="email">
     </div>
     <div class="col-11 col-md-6 col-lg-6 col-xl-6">
      <p for="password">Password</p>
      <button class="btn btn-primary" v-on:click.prevent="$bvModal.show('changePasswordModal')">Change Password</button>
     </div>
     <div class="col-11 col-md-12 col-lg-12 col-xl-12">
      <div class="d-block mt-4 mb-3">
        <button class="btn btn-success me-2" v-on:click.prevent="$bvModal.show('saveChangesModal')">Save Changes</button>
      </div>
     </div>
    </div>
   </div>
  </div>

  <!-- DELETE MODAL --->
  <b-modal id="saveChangesModal" centered title="Save Changes">
    <div class="p-3">
      <p class="">Please enter your password</p>
      <input v-model="data.confirm_password" type="password" class="form-control">
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="saveChanges" :disabled="isLoading">
        {{isLoading ? 'Saving Changes ...' : 'Save Changes'}}
      </b-button>
    </template>
   </b-modal>

  <!-- CHANGE PASSWORD MODAL --->
  <b-modal id="changePasswordModal" centered title="Change Password">
    <div class="p-3">
     <p class="">Enter current password</p>
     <input v-model="password_data.current_password" type="password" class="form-control">
     <p class="">Enter new password</p>
     <input v-model="password_data.new_password" type="password" class="form-control">
     <p class="">Confirm new password</p>
     <input v-model="password_data.confirm_password" type="password" class="form-control">
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="changePassword" :disabled="isLoading">
        {{isLoading ? 'Saving Changes ...' : 'Save Changes'}}
      </b-button>
    </template>
   </b-modal>
 </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
   return {
    data: {
     first_name: '',
     middle_name: '',
     last_name: '',
     gender: '',
     contact_number: '',
     email: '',
     image: '',
     confirm_password: ''
    },
    isLoading: false,
    password_data: {
      new_password: '',
      confirm_password: '',
      current_password: '',
    },
    fileRecords: [],
    fileRecordsForUpload: [],
   }
  },
  async mounted(){
   this.isLoading = true
   await this.$store.dispatch('auth/checkAuthUser')
   document.title = "Account Settings"
   this.setData()
  },
  computed: {
   ...mapState('auth', ['user'])
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
       var i = this.fileRecordsForUpload.indexOf(fileRecord);
       if (i !== -1) {
         this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
         if (k !== -1) this.fileRecords.splice(k, 1);
       }
     },
   setData(){
    this.data.first_name = this.user.userinfo.first_name
    this.data.middle_name = this.user.userinfo.middle_name
    this.data.last_name = this.user.userinfo.last_name
    this.data.gender = this.user.userinfo.gender
    this.data.contact_number = this.user.userinfo.contact_number
    this.data.email = this.user.email
    this.isLoading = false
   },
   async saveChanges(){
    if(this.data.first_name.trim() == '') return this.$toast.error('First Name is required')
    if(this.data.middle_name.trim() == '') return this.$toast.error('Middle Name is required')
    if(this.data.last_name.trim() == '') return this.$toast.error('Last Name is required')
    if(this.data.gender == '') return this.$toast.error('Gender is required')
    if(this.data.contact_number == '') return this.$toast.error('Contact Number is required')
    if(this.data.email == '') return this.$toast.error('Email is required')

    if(this.data.confirm_password.trim() == '') return this.$toast.error('Please enter your current password')

    if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
          `http://127.0.0.1:8000/api/auth/user/uploadUserImage?token=` + localStorage.getItem("auth"), 
          {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.data.image = img[0].data
      }

    this.isLoading = true
    const res = await this.$store.dispatch('auth/updateAccount', this.data)
    this.data.confirm_password = ''
    if(res.status == 422) {
      this.$bvModal.hide('saveChangesModal')
      this.$toast.error(res.data.msg)
    }
    if(res.status == 200){
      await this.$store.dispatch('auth/checkAuthUser')
      this.$toast.success(res.data.msg)
      this.$bvModal.hide('saveChangesModal')
    }
    this.isLoading = false
 
   },
   async changePassword(){
     if(this.password_data.current_password.trim() == '') return this.$toast.error('Current password is required');
     if(this.password_data.new_password.trim() == '') return this.$toast.error('New password is required');
     if(this.password_data.confirm_password.trim() == '') return this.$toast.error('Confirm password is required');
     if(this.password_data.new_password !== this.password_data.confirm_password) return this.$toast.error('New Password doesn\'t match');
     this.isLoading = true

     const res = await this.$store.dispatch('auth/changeUserPassword', this.password_data)

     if(res.status == 200){
       this.$toast.success(res.data.msg)
       this.clearPasswordField()
       this.$bvModal.hide('changePasswordModal')
     } 
     else {
       this.$toast.error(res.data.msg)
     }  
      this.isLoading = false
   },
   clearPasswordField(){
     this.password_data.current_password = ''
     this.password_data.new_password = ''
     this.password_data.confirm_password = ''
   }

  }
}
</script>