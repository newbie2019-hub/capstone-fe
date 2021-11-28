<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card pe-5 ps-5 pb-4 pt-5 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">DELETED POSTS</h5>
                <p class="mb-4"><small>Manage your posts below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <!-- <button v-on:click.prevent="$bvModal.show('scheduleModal')" class="btn btn-primary btn-sm me-2"><i class="bi bi-clock"></i> Schedule</button> -->
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input v-model="search_post" type="text"  class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-4">
              <div v-if="posts == 0">No Posts found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="7"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading"
                ></b-skeleton-table>
              <table class="table table-hover" v-if="!initialLoading">
                <caption>Showing {{posts.from}} to {{posts.to}} out of {{posts.total}} posts.</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Image</th>
                    <th scope="col" class="text-nowrap">Title</th>
                    <th scope="col" class="text-nowrap">Post Excerpt</th>
                    <th scope="col" class="text-nowrap">Status</th>
                    <th scope="col" class="text-nowrap">Date Posted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(post, i) in posts.data" :key="i">
                    <td v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      <img v-if="post.postcontent.image" :src="`${imgURL}/` + post.postcontent.image" alt="" class="" width="100"/>
                      <p class="text-muted" v-else>No Image</p>
                    </td>
                    <td class="text-nowrap cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      {{post.postcontent.title}} <br/>
                      <span class="text-muted"><small>Added by: {{post.useraccount.userinfo.first_name}} {{post.useraccount.userinfo.last_name}}</small></span>
                    </td>
                    <td class="cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
                    <td class="cursor-pointer">
                      <b-badge :variant="post.status == 'Approved' ? 'success rounded-pill':'info rounded-pill'">{{post.status}}</b-badge>
                    </td>
                    <td class="text-nowrap">{{post.created_at | moment}}</td>

                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="posts.data">
              <pagination :showDisabled="true" :align="'right'" :data="posts">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this post?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyPost" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>
<!-- 
    <b-modal id="scheduleModal" centered title="Select Schedule">
        <p class="">Select a schedule for deleting the records automatically</p>
        <p class="">Current Schedule: <span class="fw-bold">{{schedule.deletion == '9999' ? 'None' : schedule.deletion + ' days'}}</span></p>
        <p class="mt-3">Every after</p>
        <select v-model="data.schedule" class="form-select">
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="7">1 week</option>
          <option value="30">1 month</option>
        </select>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveSchedule" :disabled="isLoading">
            Save
        </b-button>
        </template>
    </b-modal> -->

    <b-modal id="viewPostModal" scrollable centered :title="viewPost.postcontent.title">
        <div v-html="viewPost.postcontent.content"></div>
        <p class="mt-3" v-if="viewPost.useraccount"><small>Added by: <strong>{{viewPost.useraccount.userinfo.first_name}} {{viewPost.useraccount.userinfo.last_name}}</strong></small></p>
        <p class="text-muted "><small>Date Posted: {{viewPost.created_at | moment}}</small></p>
        <p class=""><small>Views: {{viewPost.views}}</small></p>
        <template #modal-footer = {cancel} >
          <b-button variant="primary" @click="cancel()"> Close </b-button>
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
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
export default {
    data(){
    return {
       viewPost: {
         postcontent: {
           title: '',
           content: ''
         },
       },
       data: {
         schedule: '',
       },
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       search_post: '',
       approve_post: {
         id: '',
       },
       post: {
           title: '',
           content: '',
           image: '',
       },
       update: {
           title: '',
           content: '',
           image: '',
       },
       deletePost: '',
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM D, YYYY, h:mm a');
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('osa', ['posts', 'schedule']),
  },
  async mounted(){
    document.title = 'Info Kiosk - Post Management'
    this.initialLoading = true
    await this.checkAuthUser()
    await this.$store.dispatch('osa/getArchived', 1);
    await this.$store.dispatch('osa/getSchedule');
    this.initialLoading = false
  },
  methods: {
   //SEARCH NEEDS TO BE FIXED
    ...mapActions('auth', ['checkAuthUser']),
    async saveSchedule(){
        this.isLoading = true
        const res = await this.$store.dispatch('osa/saveSchedule', this.data)
        if(res.status == 200){
          this.$bvModal.hide('scheduleModal')
          this.$toast.success('Schedule has been updated successfully')
          await this.$store.dispatch('osa/getSchedule');
        }
        this.isLoading = false
    },
    async searchPost(page){
      let data = {
        search: this.search_role
      }
      this.isSearching = true
      await this.$store.dispatch('post/searchPost', {page: page, data: data})
      this.isSearching = false
    },
    async getPost(page){
       await this.$store.dispatch('post/getPost', page);
    },
    postSearch(page = 1){
      if(this.search_post == ''){
        this.getPost(page)
      }
      else {
        this.searchPost(page)
      }
    },
  },
  watch: {
    search_post(before, after){
      this.postSearch()
    }
  }
}
</script>