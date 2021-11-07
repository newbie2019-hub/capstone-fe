<template>
  <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-5">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Members</h5>
                <p class="mb-4"><small>All your members are listed below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_member" class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search</label>
                  <button @click.prevent="memberSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-4" v-if="!viewPost">
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading"
                ></b-skeleton-table>
              <table class="table table-hover" v-if="!initialLoading">
                <caption>Showing {{members.from}} to {{members.to}} out of {{members.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" class="text-nowrap">Name</th>
                    <th scope="col" class="text-nowrap">Role</th>
                    <th scope="col" class="text-nowrap">Status</th>
                    <th scope="col" class="text-nowrap">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="members.data == 0">
                    <td colspan="6" class="p-4"><h6 class="text-center">No accounts found </h6></td>
                  </tr>
                  <tr v-for="(acc, i) in members.data" :key="i">
                    <th scope="row" class="justify-content-center cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
                      <avatar
                        :size="40"
                        :src="'http://127.0.0.1:8000/uploads/' + acc.user.userinfo.image"
                        :username="acc.user.userinfo.first_name + ' ' + acc.user.userinfo.last_name"
                      ></avatar>
                    </th>
                    <td class="pt-3 cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{acc.user.userinfo.first_name}} {{acc.user.userinfo.middle_name}} {{acc.user.userinfo.last_name}}</td>
                    <td class="pt-3 cursor-pointer"  v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">{{acc.user.userinfo.role.role}}</td>
                    <td class="pt-3 cursor-pointer" v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')">
                      <b-badge class="rounded-pill" :class="acc.user.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{
                        acc.user.status
                      }}</b-badge>
                    </td>
                    <td class="text-nowrap pt-3">{{acc.user.email}}</td>
                    <td>
                      <div class="d-flex">
                        <button
                          :disabled="isLoading && current_id == acc.id"
                          v-b-tooltip.hover
                          v-if="$can('approve_user') && acc.user.status == 'Pending'"
                          title="Approve Account"
                          v-on:click.prevent="approve_data.id = acc.user.id; $bvModal.show('approveModal');"
                          class="btn btn-sm btn-success rounded-pill me-2">
                          <i v-if="current_id != acc.id" class="bi bi-check"></i>
                        </button>
                        <!-- <button
                          :disabled="isLoading && current_id == acc.id"
                          v-if="$can('view_users')"
                          v-on:click.prevent="accDisplayed = acc; $bvModal.show('viewInfoModal')"
                          v-b-tooltip.hover
                          title="View Details"
                          class="btn btn-sm btn-purple rounded-pill me-2">
                          <i v-if="current_id != acc.id" class="bi bi-arrows-angle-expand"></i>
                        </button> -->
                        <button
                          v-on:click.prevent="userPosts = acc.user.posts; viewPost = true"
                          v-b-tooltip.hover
                          title="View Posts"
                          class="btn btn-sm btn-success rounded-pill me-2"
                          >
                          <i v-if="current_id != acc.id" class="bi bi-newspaper"></i>
                        </button>
                        <button href="" v-if="$can('delete_user')" v-on:click.prevent="$bvModal.show('deleteModal'); delete_data.id = acc.user.id; delete_data.type = acc.user.type"
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
            <div class="row mt-3" v-if="members.data">
              <pagination :showDisabled="true" :align="'right'" :data="members" @pagination-change-page="memberSearch">
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
                    <tr v-for="(post, i) in userPosts" :key="i">
                      <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{i + 1}}</td>
                      <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">
                        <img v-if="post.postcontent.image" :src="'http://127.0.0.1:8000/uploads/' + post.postcontent.image" alt="" class="" width="100"/>
                        <p class="text-muted" v-else>No Image</p>
                      </td>
                      <td class="cursor-pointer text-nowrap" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')" >{{post.postcontent.title}}</td>
                      <td class="cursor-pointer" v-on:click.prevent="postContent = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
                      <td>
                        <b-badge :variant="post.status == 'Approved' ? 'success':'info'">{{post.status}}</b-badge>
                      </td>
                      <td class="text-nowrap">{{post.created_at | moment}}</td>
                      <td>
                        <div class="d-flex">
                          <button v-if="$can('approve_post') && post.status != 'Approved' || adviser_id == user.id" v-on:click.prevent="approve_post.id = post.id; $bvModal.show('approvePostModal')" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
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

    <b-modal id="viewInfoModal" centered title="Account Info">
      <div class="row justify-content-center text-center">
        <avatar
            :size="100"
            :src="'http://127.0.0.1:8000/uploads/' + accDisplayed.user.userinfo.image"
            :username="accDisplayed.user.userinfo.first_name + ' ' + accDisplayed.user.userinfo.last_name"
        ></avatar>
        <h5 class="mt-3 ">{{accDisplayed.user.userinfo.first_name}} {{accDisplayed.user.userinfo.last_name}}</h5>
        <p class="">{{accDisplayed.email}}</p>
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
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Avatar from 'vue-avatar';
import moment from 'moment'
const _ = require('lodash');

export default {
  components: {
    Avatar
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
 data(){
    return {
      initialLoading: false,
      current_id: '',
      isLoading: false,
      userPosts: [],
      search_member: '',
      viewPost: false,
      approve_data: {
        id: '',
      },
      postContent: {
        postcontent: {
          title: '',
          content: ''
        },
      },
      isSearching: '',
      accDisplayed: {
        user: {
          userinfo: {
            image: '',
            first_name: '',
            last_name: '',
            orgunit:{
              name: ''
            },
            role: {
              role: '',
            },
          },
        }
      },
      delete_data: {
        id: '',
        type: '',
      },
      accPostsDisplayed: {
        post: {
          title: '',
          content: '',
          image: '',
          type: '',
        }
      }
    }
  },
  watch: {
    search_member(before, after){
      this.debouncedMemberSearch()
    }
  },
  created: function () {
    this.debouncedMemberSearch = _.debounce(this.memberSearch, 1000)
  },
  async mounted() {
    document.title = "All Accounts"
    this.initialLoading = true
    await this.$store.dispatch('auth/checkAuthUser');
    await this.$store.dispatch('members/getMembers');
    this.initialLoading = false
  },
  methods: {
    ...mapActions('auth', ['checkAuthUser']),
    async getMembers(page = 1){
      await this.$store.dispatch('members/getMembers', page)
    },
    async removeAccount() {
      this.isLoading = true
      const res = await this.$store.dispatch('members/deleteMember', this.delete_data.id);
      if (res.status == 200) {
        await this.$store.dispatch('members/getMembers');
        this.delete_data = { id: '', type: ''};
        this.$toast.success('Account removed successfully');
        this.$bvModal.hide('deleteModal');
      } 
      else {
        this.delete_data = { id: '', type: ''};
        this.$toast.error('Something went wrong');
        this.$bvModal.hide('deleteModal');
      }

      this.isLoading = false
    },
    async searchMember(page){
      let data = {
        search: this.search_member
      }
      this.isSearching = true
      await this.$store.dispatch('members/searchMember', {page: page, data: data})
      this.isSearching = false
    },
    async approveAccount(){
      const { status, data } = await this.$store.dispatch('members/approveMember', this.approve_data)
      if(status == 200){
        this.$toast.success('Account of member has been approved')
      }
      else {
        this.$toast.error(data.msg)
      }

      this.$bvModal.hide('approveModal')
      this.approve_data.id = ''
    },
    memberSearch(page = 1){
      if(this.search_member == ''){
        this.getMembers(page)
      }
      else {
        this.searchMember(page)
      }
    },   
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('members', ['members', 'posts']),
  },
}
</script>