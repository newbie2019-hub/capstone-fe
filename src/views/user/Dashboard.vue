<template>
 <div>
   <div class="row justify-content-center m-0">
   <div class="col-11 col-md-11 col-lg-7 col-xl-6">
     <div class="card  pe-5 ps-5 pt-5 pb-4 br-20">
       <div class="d-flex ">
         <div class="d-flex flex-column me-auto">
           <h4 v-if="user.length != 0">{{msg}}, {{user.userinfo.last_name}}</h4>
           <p class="mt-3 lh-1 -1">It's good to know you're here. <br/>Have a great day</p>
         </div>
         <div class="cardimg">
           <img src="@/assets/images/lightning.svg" alt="" class="img-fluid" > 
         </div>
       </div>
      </div>
      <div v-if="$can('osa_permissions')" class="card mt-4 pe-5 ps-5 pt-5 pb-4 mb-4 br-20">
        <div class="d-flex flex-column me-auto">
          <h5>Latest Post</h5>
          <p class="mb-4"><small>Latest post of the organizations</small></p>
        </div>
        <div class="table-responsive">
          <b-skeleton-table
            :rows="4"
            :columns="4"
            :table-props="{ bordered: true, striped: false }"
            v-if="initialLoading"
          ></b-skeleton-table>
          <table class="table table-hover" v-else>
            <thead>
              <tr>
                <th scope="col" class="text-nowrap">Post</th>
                <th scope="col" class="text-nowrap">User</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cursor-pointer" v-for="(post, i) in post_summary" :key="i" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                <td >{{post.postcontent.title}}</td>
                <td>{{post.useraccount.userinfo.first_name}} {{post.useraccount.userinfo.last_name}}</td>
                <td><small><b-badge class="rounded-pill" :class="post.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{post.status}}</b-badge></small></td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
       <div v-else class="card mt-4 mb-4 p-5 br-20">
          <div class="d-flex">
            <div class="d-flex flex-column me-auto">
              <h5>{{user.type == 'Organization' ? 'Organization' : 'Department'}} Members</h5>
              <p class="mb-4"><small>Latest members of your {{user.type == 'Organization' ? 'organization' : 'department'}} </small></p>
            </div>
            <div class="d-flex">
              <a href="members" class="text-decoration-none text-violet cursor-pointer ">View All</a>
            </div>
          </div>
          <div class="table-responsive">
            <b-skeleton-table
              :rows="4"
              :columns="4"
              :table-props="{ bordered: true, striped: false }"
              v-if="initialLoading && accounts == 0"
            ></b-skeleton-table>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="text-nowrap">Name</th>
                  <th scope="col" class="text-nowrap">Position</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(acc, i) in accounts" :key="i">
                  <th scope="row" class="d-flex justify-content-center" v-if="acc.length != 0"> 
                    <b-avatar variant="dark" :src="`${imgURL}/${acc.user.userinfo.image}`" ></b-avatar>
                  </th>
                  <td v-if="acc.length != 0" class="text-nowrap">{{acc.user.userinfo.first_name}} {{acc.user.userinfo.last_name}}</td>
                  <td v-if="acc.length != 0">{{acc.user.userinfo.role.role}}</td>
                  <td v-if="acc.length != 0">{{acc.user.email}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
    <div class="col-11 col-md-11 col-lg-5 col-xl-6">
      <div class="row justify-content-center mb-4">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10">
          <div class="card sys-primary text-white br-20 ps-4 p-3">
            <div class="lh-l">
              <p class="date">{{date}}</p>
              <p class="time">{{time}}</p>
            </div>
          </div>
        </div>
      </div>
       <div v-if="$can('osa_permissions')" class="row justify-content-center">
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                <i class="bi bi-person-circle me-2 bi-5x"></i>
                <h6 class="mt-2">ORGANIZATIONS</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                  {{summary.org}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-receipt me-2 bi-5x"></i>
                <h6 class="mt-2">POSTS</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                   {{summary.post}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-receipt me-2 bi-5x"></i>
                <h6 class="mt-2">FAQs</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                   {{summary.faqs}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-receipt me-2 bi-5x"></i>
                <h6 class="mt-2">Telephone</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                   {{summary.tel}}
                </p>
              </div>
            </div>
          </div>
        </div>
       <div v-else class="row justify-content-center">
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                <i class="bi bi-person-circle me-2 bi-5x"></i>
                <h6 class="mt-2">MEMBERS</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                  {{summary.members}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-receipt me-2 bi-5x"></i>
                <h6 class="mt-2">POSTS</h6>
              </div>
              <div class="summary-container">
                <p class="summary-text">
                   {{summary.post}}
                </p>
              </div>
            </div>
          </div>
        </div>
     </div>
   </div>

    <b-modal id="viewPostModal" scrollable centered :title="viewPost.postcontent.title">
        <div v-html="viewPost.postcontent.content"></div>
        <p class="mt-2"><small>Date Posted: {{viewPost.created_at | moment}}</small></p>
        <p class="mb-3"><small>Views: {{viewPost.views}}</small></p>
        <template #modal-footer = {cancel} >
          <b-button variant="primary" @click="cancel()"> Close </b-button>
        </template>
    </b-modal>
 </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import moment from 'moment'
export default {
  data(){
   return {
    msg: 'Good Day',
    viewPost: {
      postcontent: {
        title: '',
        content: ''
      },
    },
    time: '',
    date: '',
    initialLoading: false,
    isLoading: false,
    current_id: '',
   }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM D, YYYY, h:mm a');
    }
  },
  async mounted() {
   this.initialLoading = true
   await this.checkAuthUser()
   if(!this.$can('osa_permissions')){
    this.$store.dispatch('userdashboard/recentAccounts')
   }
   else {
     this.$store.dispatch('userdashboard/getOSAPostSummary')
   }
   this.$store.dispatch('userdashboard/summary')
   setInterval(() =>{
      this.currentdate()
      this.currenttime()
      this.greetingMsg()
    }, 1000)
    document.title = "User Dashboard - Touchless Information Management"
    this.initialLoading = false
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('userdashboard', ['accounts', 'summary', 'post_summary']),
  },
  methods: {
    ...mapActions('auth', ['checkAuthUser']),
    currentdate(){
      var a = new Date();
      this.date = moment(a).format(' MMMM D[,] YYYY'); 
    },
    currenttime(){
      var a = new Date();
      this.time =  moment(a).format('hh:mm:ss A'); 
    },
    greetingMsg(){
      var today = new Date()
      var curHr = today.getHours()

      if (curHr < 12) {
        this.msg = 'Good Morning'
      } else if (curHr < 18) {
        this.msg = 'Good Afternoon'
      } else {
        this.msg = 'Good Evening'
      }
    }
  }
}
</script>