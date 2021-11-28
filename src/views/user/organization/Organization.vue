<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card mb-3 pe-5 ps-5 pb-4 pt-4">
      <h5 class="mt-3" v-if="orgmembers.data != 0">{{orgmembers.data[0].organization.abbreviation ? orgmembers.data[0].organization.abbreviation : orgmembers.data[0].organization.name}} Organization</h5>
      <h5 class="mt-3" v-else>No Organization Available</h5>
      <p class="text-muted">Here are the members for this organization</p>
      <div v-if="$can('assign_org_adviser')" class="d-flex justify-content-end mt-2">
        <div class="mt-2">
        </div>
       </div>
      <div class="d-flex justify-content-end mt-2">
        <button v-if="$can('assign_org_adviser')" v-on:click.prevent="$bvModal.show('assignAdviserModal')" class="btn btn-purple me-2"><i class="bi bi-person-circle me-2"></i>Assign Adviser</button>
        <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-4">
          <div class="input-group form-floating">
            <input type="text" v-model="search" class="form-control" id="floatingSearchOrg" placeholder="Search here">
            <label  for="floatingSearchOrg" class="">Search</label>
            <button @click.prevent="orgmemberSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
          </div>
        </div>
      </div>
      <div class="table-responsive mt-5" v-if="!viewPost">
       <div class="text-center" v-if="!orgmembers.data || orgmembers.data == 0">No accounts is under this organizations</div>
       <b-skeleton-table
        :rows="6"
        :columns="10"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading || isSearching"
       ></b-skeleton-table>
       <table class="table table-hover" v-if="!viewPost && !initialLoading">
        <caption>Showing {{orgmembers.from}} to {{orgmembers.to}} out of {{orgmembers.total}} accounts</caption>
        <thead v-if="orgmembers.data != 0">
         <tr>
          <th scope="col"></th>
          <th scope="col" class="text-nowrap">Name</th>
          <th scope="col">Role</th>
          <th scope="col" class="text-nowrap">Status</th>
          <th scope="col" class="text-nowrap">Date Created</th>
          <th scope="col">Actions</th>
         </tr>
        </thead>
        <tbody v-if="orgmembers.data">
         <tr v-for="(acc, i) in orgmembers.data" :key="i" >
          <th scope="row" class="justify-content-center cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
            <b-avatar variant="dark" :src="`${imgURL}/` + acc.user.userinfo.image"></b-avatar>
          </th>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.user.userinfo.first_name }} {{ acc.user.userinfo.last_name }}</td>
          <td class="cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{ acc.user.userinfo.role.role }}</td>
          <td class="cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
           <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
            acc.user.status
           }}</b-badge>
          </td>
          <td>{{ acc.created_at | moment }}</td>
          <td>
           <div class="d-flex">
            <button
                :disabled="isLoading && current_id == acc.id"
                v-b-tooltip.hover
                v-if="($can('org_approve_member') && acc.user.status == 'Pending') || (adviser_id == user.id && acc.user.status == 'Pending')"
                title="Approve Account"
                v-on:click.prevent="approve_data.id = acc.user.id; $bvModal.show('approveModal');"
                class="btn btn-sm btn-success rounded-pill me-2">
                <i v-if="current_id != acc.id" class="bi bi-check"></i>
            </button>
            <button
              v-if="$can('view_org_member_post') || adviser_id == user.id"
              v-on:click.prevent="posts = acc.user.posts; viewPost = true"
              v-b-tooltip.hover
              title="View Posts"
              class="btn btn-sm btn-secondary rounded-pill me-2"
              >
              <i v-if="current_id != acc.id" class="bi bi-newspaper"></i>
            </button>
            <button href="" v-if="$can('delete_user') || adviser_id == user.id"  v-on:click.prevent="$bvModal.show('deleteModal'); delete_data.id = acc.user.id; delete_data.type = acc.type;"
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
      <div class="row mt-3" v-if="orgmembers.data && !viewPost">
       <pagination
        :showDisabled="true"
        :align="'right'"
        :data="orgmembers"
        @pagination-change-page="orgmembersSearch"
       >
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
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
                    <button v-if="($can('approve_post') || adviser_id == user.id) && post.status != 'Approved' " v-on:click.prevent="approve_post.id = post.id; $bvModal.show('approvePostModal')" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                        <i class="bi bi-check"></i>
                    </button>
                    <button v-if="$can('delete_post') || post.user_account_id == user.id || adviser_id == user.id" @click="deletePost = post.id; $bvModal.show('deletePostModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                      <i class="bi bi-trash"></i>
                    </button>
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
        <b-avatar size="6rem" variant="dark" :src="`${imgURL}/` + accDisplayed.user.userinfo.image"></b-avatar>
        <h5 class="mt-3 ">{{accDisplayed.user.userinfo.first_name}} {{accDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accDisplayed.user.email}}</p>
        <p class="">Contact: {{accDisplayed.user.userinfo.contact_number}}</p>
        <p class="">Gender: {{accDisplayed.user.userinfo.gender}}</p>
        <p class="">Role: {{accDisplayed.user.userinfo.role.role}}</p>
      </div>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" @click="cancel()"> Close </b-button>
    </template>
   </b-modal>

   
    <!--- APPROVE MODAL -->
   <b-modal id="approveModal" centered title="Confirm Approve">
    <p class="">An email of approval will be sent to the user. Are you sure you want to approve this account?</p>
    <template #modal-footer="{cancel}">
     <b-button :disabled="isLoading" variant="primary" @click="cancel()"> Cancel </b-button>
     <b-button :disabled="isLoading" variant="success" v-on:click.prevent="approveAccount">
      Approve
     </b-button>
    </template>
   </b-modal>

   <b-modal id="assignAdviserModal" centered title="Assign Adviser">
    <div class="ps-4 pe-4">
      <label>Select an adviser</label>
      <select v-model="adviser_data.user_id" class="form-select">
        <option :value="adv.user.id" v-for="(adv, i) in advisers" :key="i">
            <p>
              {{adv.user.userinfo.first_name}} {{adv.user.userinfo.last_name}} <span class="fs-4" v-if="adviser_id == adv.user.id">- current adviser</span>
            </p>
        </option>
      </select>
      <p class="mt-2"><small>This will replace the existing adviser if it has one already.</small></p>
    </div>
    <template #modal-footer="{cancel}">
     <b-button variant="secondary" @click="cancel()" :disabled="isLoading"> Close </b-button>
     <b-button variant="success" @click="setAdviser" :disabled="isLoading"> Proceed </b-button>
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
     adviser_id: '',
     approve_post: {
       id: '',
     },
     approve_data: {
       id: '',
     },
     adviser_data: {
       user_id: '',
       organization_id: ''
     },
     delete_data: {
       id: '',
     },
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
  }
 },
 computed: {
   ...mapState('auth', ['user']),
  ...mapState('members', ['orgmembers', 'advisers'])
 },
 async mounted(){
   document.title = "Organization Members"
   this.initialLoading = true
   this.isLoading = true
   await this.$store.dispatch('auth/checkAuthUser')
   await this.$store.dispatch('members/organizationMembers', 1)
   await this.$store.dispatch('members/retrieveDepMembers')
   this.isLoading = false
   this.initialLoading = false
   this.setOrgID()
 },
 methods: {
   setOrgID(){
     if(this.orgmembers.data) {
       this.adviser_data.organization_id = this.orgmembers.data[0].organization.id
       this.adviser_id = this.orgmembers.data[0].organization.adviser.userinfo.id
     }
   },
   async approvePost(){
      const res = await this.$store.dispatch('post/approveMemberPost', this.approve_post)
      if(res.status == 200){
        this.$toast.success('Post has been approved')
        this.posts.forEach((post, i) => {
          console.log(post)
          if(post.id == this.approve_post.id){
            this.$set(this.posts[i], 'status', 'Approved')
          }
        });
      }
      else {
        this.$toast.error('Something went wrong')
      }
      this.$bvModal.hide('approvePostModal')
   },
   async approveAccount(){
      const { status, data } = await this.$store.dispatch('members/approveOrgMember', this.approve_data)
      if(status == 200){
        this.$toast.success('Account of member has been approved')
      }
      else {
        this.$toast.error(data.msg)
      }

      this.$bvModal.hide('approveModal')
      this.approve_data.id = ''
  },
   async searchOrganizationMember(page) {
    this.isSearching = true;
    let data = {
     search: this.search,
    };
    await this.$store.dispatch('members/searchOrgMembers', { page: page, data: data });
    this.isSearching = false;
   },
   async getOrgMembers(page = 1) {
      await this.$store.dispatch('members/organizationMembers', page)
   },
   async setAdviser(){
     this.adviser_data.organization_id = this.orgmembers.data[0].organization.id
     this.isLoading = true
     const res = await this.$store.dispatch('members/setOrgAdviser', this.adviser_data)
     if(res.status == 200){
       await this.$store.dispatch('members/retrieveDepMembers')
       this.adviser_id = this.adviser_data.user_id
       this.$toast.success(res.data.msg);
     }
     else {
        this.$toast.error('Something went wrong');
     }
     this.adviser_data = {id: ''};
     this.$bvModal.hide('assignAdviserModal');
     this.isLoading = false
   },
   async removeAccount(page = 1) {
    this.isLoading = true
    const res = await this.$store.dispatch('members/deleteOrgMember', this.delete_data.id);
    if (res.status == 200) {
      await this.$store.dispatch('members/organizationMembers', page)
      this.$toast.success('User has been removed successfully');
    } else {
      this.$toast.error('Something went wrong');
    }
    this.delete_data = { id: '' };
    this.$bvModal.hide('deleteModal');
    this.isLoading = false
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