<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card mb-3 pe-5 ps-5 pb-4 pt-4">
      <h5 class="mt-3">Organization Management</h5>
      <p class="text-muted">Manage organization member post below</p>
      <div class="row justify-content-end mt-4">
       <div class="col-9 col-sm-7 col-md-7 col-lg-6 col-xl-5 mt-2">
        <div class="d-flex align-items-center justify-content-center">
           <p class="pe-2">Organization</p>
           <select v-model="selectedOrganization" @change="setCurrentOrganization" class="form-select">
           <option v-for="(org, i) in organizations.data" :key="i" :value="org.id">{{org.name}}</option>
         </select>
        </div>
       </div>
      </div>
      <div class="table-responsive mt-4" v-if="!viewPost">
       <b-skeleton-table
        :rows="6"
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading || isSearching"
       ></b-skeleton-table>
       <div class="text-center" v-if="!currentOrganization || currentOrganization == 0">No accounts is under this organizations</div>
       <table class="table table-hover" v-if="(!viewPost && currentOrganization != 0) && !initialLoading ">
        <thead v-if="currentOrganization">
         <tr>
          <th scope="col"></th>
          <th scope="col" class="text-nowrap">Name</th>
          <th scope="col">Role</th>
          <th scope="col" class="text-nowrap">Date Created</th>
          <th scope="col">Actions</th>
         </tr>
        </thead>
        <tbody v-if="currentOrganization">

         <tr v-for="(acc, i) in currentOrganization" :key="i" >
          <th scope="row" class="justify-content-center cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
           <avatar
            :size="40"
            :src="'http://127.0.0.1:8000/uploads/' + acc.userinfo.image"
            :username="acc.userinfo.first_name + ' ' + acc.userinfo.last_name"
           ></avatar>
          </th>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.userinfo.first_name }} {{ acc.userinfo.last_name }}</td>
          <td class="cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.userinfo.role.role }}</td>
          <td>{{ acc.created_at | moment }}</td>
          <td>
           <div class="d-flex">
            <button
              v-on:click.prevent="posts = acc.posts; viewPost = true"
              v-b-tooltip.hover
              title="View Posts"
              class="btn btn-sm btn-secondary rounded-pill me-2"
              >
              <i class="bi bi-newspaper"></i>
            </button>
           </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>

      <!---POSTS OF USER---->
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, i) in posts" :key="i">
                <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{i + 1}}</td>
                <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">
                  <img v-if="post.postcontent.image" :src="'http://127.0.0.1:8000/uploads/' + post.postcontent.image" alt="" class="" width="100"/>
                  <p class="text-muted" v-else>No Image</p>
                </td>
                <td class="cursor-pointer text-nowrap" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')" >{{post.postcontent.title}}</td>
                <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
                <td>
                  <b-badge class="rounded-pill" :variant="post.status == 'Approved' ? 'success':'info'">{{post.status}}</b-badge>
                </td>
                <td class="text-nowrap">{{post.created_at | moment}}</td>
                <td>
                  <div class="d-flex">
                    <!-- <button v-if="$can('delete_post') || post.user_account_id == user.id || adviser_id == user.id" @click="deletePost = post.id; $bvModal.show('deletePostModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                      <i class="bi bi-trash"></i>
                    </button> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--- END OF TABLE FOR POST --->
     </div>
    </div>
   </div>
  </div>

  <b-modal id="viewPostModal" size="lg" scrollable centered :title="postContent.postcontent.title">
      <div v-html="postContent.postcontent.content"></div>
      <p class="mt-4"><small>Views: {{postContent.views}}</small></p>
      <p class=" mb-2"><small>Date Posted: {{postContent.created_at | moment}}</small></p>
      <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Close </b-button>
      </template>
  </b-modal>

   <!-- VIEW INFO MODAL --->
   <b-modal id="viewInfoModal" centered title="Account Info">
      <div class="row justify-content-center text-center">
        <avatar
            :size="100"
            :src="'http://127.0.0.1:8000/uploads/' + accDisplayed.userinfo.image"
            :username="accDisplayed.userinfo.first_name + ' ' + accDisplayed.userinfo.last_name"
        ></avatar>
        <h5 class="mt-3 ">{{accDisplayed.userinfo.first_name}} {{accDisplayed.userinfo.last_name}}</h5>
        <p class="">{{accDisplayed.email}}</p>
        <p class="">Contact: {{accDisplayed.userinfo.contact_number}}</p>
        <p class="">Gender: {{accDisplayed.userinfo.gender}}</p>
        <p class="">Role: {{accDisplayed.userinfo.role.role}}</p>
      </div>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" @click="cancel()"> Close </b-button>
    </template>
   </b-modal>

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

   <!-- DELETE POST OF ORG MEMBER MODAL --->
   <b-modal id="deletePostModal" centered title="Confirm Delete">
    <p >Are you sure you want to delete this account?</p>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" size="sm" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
     <b-button size="sm" variant="danger" v-on:click.prevent="deletePost" :disabled="isLoading">
      Delete
     </b-button>
    </template>
   </b-modal>

     <!--- APPROVE MODAL -->
   <b-modal id="approvePostModal" centered title="Confirm Approve">
    <p class="">Are you sure you want to approve this post?</p>
    <template #modal-footer="{cancel}">
     <b-button :disabled="isLoading" variant="primary" @click="cancel()"> Cancel </b-button>
     <b-button :disabled="isLoading" variant="success" v-on:click.prevent="approvePost">
      Approve
     </b-button>
    </template>
   </b-modal>
 </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import Avatar from 'vue-avatar';
const _ = require('lodash');

export default {
 components: {Avatar},
 filters: {
   moment: function(date) {
    return moment(date).format('MMM Do YYYY, h:mm a');
   },
 },
 watch: {
   search: function(after, before) {
    this.debouncedOrgMemberSearch()
   },
  },
  created: function () {
    this.debouncedOrgMemberSearch = _.debounce(this.orgmembersSearch, 1000)
  },
 data(){
  return {
     initialLoading: false,
     isLoading: false,
     isSearching: false,
     currentOrganization: {},
     selectedOrganization: '',
     postContent: {
        postcontent: {
          title: '',
          content: ''
        },
     },
     viewPost: false,
     posts: [],
     current_id: '',
     search: '',
     accDisplayed: {
      organization: {
        name: ''
      },
      userinfo: {
        image: '',
        first_name: '',
        last_name: '',
        role: {
          role: '',
        },
      },
    },
  }
 },
 computed: {
   ...mapState('auth', ['user']),
   ...mapState('osa', ['organizations']),
 },
 async mounted(){
   document.title = "Organization Members"
   this.initialLoading = true
   this.isLoading = true
   await this.$store.dispatch('auth/checkAuthUser')
   await this.$store.dispatch('osa/getOrganizations', 1)
   this.isLoading = false
   this.initialLoading = false
 },
 methods: {
   setCurrentOrganization(){
    this.organizations.data.forEach((org) => {
     if(org.id == this.selectedOrganization){
      this.currentOrganization = org.members
     }
    });
   },
   async searchOrganizationMember(page) {
    this.isSearching = true;
    let data = {
     search: this.search,
    };
    await this.$store.dispatch('osa/searchOrganization', { page: page, data: data });
    this.isSearching = false;
   },
   async getOrgMembers(page = 1) {
      await this.$store.dispatch('osa/getOrganizations', page)
   },
   async orgmembersSearch(page = 1) {
    this.isSearching = true;
    if (this.search == '') {
     await this.getOrgMembers(page);
     this.isSearching = false;
    } else {
     await this.searchOrganizationMember(page);
     this.isSearching = false;
    }
   },
 }
}
</script>