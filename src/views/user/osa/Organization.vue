<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card mb-3 pe-5 ps-5 pb-4 pt-4">
      <h5 class="mt-4">Organization Monitoring</h5>
      <p class="text-muted">Manage organization member post below</p>
      <div class="row mt-3" v-if="!viewMembers">
        <div class="table-responsive mt-4">
          <div class="row justify-content-end mb-3">
            <div class="col-10 col-sm-8 col-md-5 col-lg-4 col-xl-4">
              <b-input-group>
                <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                <b-input-group-append>
                  <b-button class="rounded-0" :filter="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
          <b-table id="orgstable" :items="organizations" @filtered="onFiltered" :filter="filter" sort-icon-left :filter-included-fields="['name', 'abbreviation']" :fields="orgSelectionFields" :per-page="8" :current-page="currentOrgPage" striped>
            <template #table-caption>Organizations of the university </template>
            <template #cell(actions)="row">
                <b-button variant="" size="sm" @click="currentOrganization = row.item.members; viewMembers = true" class="mr-1 btn-purple ">
                  View
                </b-button>
              </template>
          </b-table>
          <div class="d-flex justify-content-end">
            <b-pagination
              class="mt-3"
              v-model="currentOrgPage"
              :total-rows="organizations.length"
              :per-page="8"
              aria-controls="orgstable"
            ></b-pagination>
          </div>
        </div>
      </div>
      <div class="table-responsive mt-4"  v-if="viewMembers && !viewPost ">
        <button class="btn btn-purple" @click="viewMembers = false">
          <i class="bi bi-arrow-left me-2"></i> Return
        </button>
        <div class="row mt-3" v-if="viewMembers">
          <div class="table-responsive mt-4">
            <div class="row justify-content-end mb-3">
              <div class="col-10 col-sm-8 col-md-5 col-lg-4 col-xl-4">
                <b-input-group>
                  <b-form-input id="filter-input" v-model="filterMembers" type="search" placeholder="Type to Search"></b-form-input>
                  <b-input-group-append>
                    <b-button class="rounded-0" :filter="!filterMembers" @click="filterMembers = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </div>
            <b-table id="orgstable" :items="currentOrganization" @filtered="onFilteredMembers" :filter="filterMembers" sort-icon-left :filter-included-fields="[]" show-empty :fields="orgMemberFields" :per-page="8" :current-page="currentOrgMemberPage" striped>
              <template #table-caption>Members of the selected organization</template>
              <template #cell(name)="row">
                  {{row.item.userinfo.first_name}} {{row.item.userinfo.last_name}}
              </template>
              <template #cell(role)="row">
                  {{row.item.userinfo.role.role}}
              </template>
              <template #cell(actions)="row">
                 <button
                    v-on:click.prevent="posts = row.item.posts; viewPost = true"
                    v-b-tooltip.hover
                    title="View Posts"
                    class="btn btn-sm btn-purple me-2">
                     Post
                  </button>
                  <b-button variant="" size="sm" @click="accDisplayed = row.item; $bvModal.show('viewInfoModal'); viewMembers = true" class="mr-1 btn-purple ">
                    Details
                  </b-button>
              </template>
            </b-table>
            <div class="d-flex justify-content-end">
              <b-pagination
                class="mt-3"
                v-model="currentOrgMemberPage"
                :total-rows="currentOrganization.length"
                :per-page="8"
                aria-controls="orgstable"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>

      <!---POSTS OF USER---->
       <div class="mt-4 mb-3" v-if="viewPost">
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
                  <img v-if="post.postcontent.image" :src="`${imgURL}/` + post.postcontent.image" alt="" class="" width="100"/>
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
                    <button v-if="post.status != 'Approved'"  v-on:click.prevent="approve_post.id = post.id; $bvModal.show('approvePostModal')" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                        <i class="bi bi-check"></i>
                    </button>
                    <button @click="deletePost = post.id; $bvModal.show('deletePostModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
     </div>
    </div>
   </div>
  </div>

  <b-modal id="viewPostModal" scrollable centered :title="postContent.postcontent.title">
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
      <b-avatar size="6rem" variant="dark" :src="`${imgURL}/` + accDisplayed.userinfo.image"></b-avatar>
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
     <b-button size="sm" variant="danger" v-on:click.prevent="destroyPost" :disabled="isLoading">
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
const _ = require('lodash');

export default {
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
     currentOrganization: '',
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
    approve_post: {
      id: '',
    },
    deletePost: '',
    currentOrgPage: 1,
    currentOrgMemberPage: 1,
    viewMembers: false,
    filter: null,
    filterMembers: null,
    orgSelectionFields: [
      {
        key: 'id',
        sortable: true,
      },
      {
        key: 'image',
        sortable: true,
      },
      {
        key: 'name',
        sortable: true,
      },
      {
        key: 'abbreviation',
        sortable: true,
      },
      {
        key: 'actions',
      },
    ],
    orgMemberFields: [
      {
        key: 'id',
        sortable: true,
      },
      {
        key: 'name',
      },
      {
        key: 'role',
      },
      {
        key: 'actions',
      },
    ]
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
    this.organizations.forEach((org) => {
     if(org.id == this.selectedOrganization){
      this.currentOrganization = org.members
     }
    });
   },
   onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentOrgPage = 1
   },
   onFilteredMembers(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentOrgMemberPage = 1
   },
   async destroyPost(){
    this.isLoading = true
    const res = await this.$store.dispatch('post/deleteOrgMemberPost', this.deletePost)
    if(res.status == 200){
      this.viewPost = false
      // this.$router.go()
      this.$toast.success('Post deleted successfully!')
    } else {
      this.$toast.error('Something went wrong')
    }
    this.$bvModal.hide('deletePostModal')
    this.isLoading = false
  },
  async approvePost(){
    const res = await this.$store.dispatch('post/approveOrgMemberPost', this.approve_post)
    if(res.status == 200){
      // this.$router.go()
      this.viewPost = false
      this.$toast.success('Post has been approved')
    }
    else {
      this.$toast.error('Something went wrong')
    }
    this.$bvModal.hide('approvePostModal')
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